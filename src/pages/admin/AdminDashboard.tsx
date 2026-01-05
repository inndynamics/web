import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Briefcase, Clock, TrendingUp } from 'lucide-react';

interface Stats {
  totalClients: number;
  activeServices: number;
  recentAccess: number;
}

interface RecentClient {
  id: string;
  full_name: string | null;
  email: string;
  accessed_at: string;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<Stats>({ totalClients: 0, activeServices: 0, recentAccess: 0 });
  const [recentClients, setRecentClients] = useState<RecentClient[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    // Count clients (users with client role)
    const { count: clientsCount } = await supabase
      .from('user_roles')
      .select('*', { count: 'exact', head: true })
      .eq('role', 'client');

    // Count active services
    const { count: servicesCount } = await supabase
      .from('client_services')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'active');

    // Count recent access (last 24 hours)
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    
    const { count: accessCount } = await supabase
      .from('client_access_logs')
      .select('*', { count: 'exact', head: true })
      .gte('accessed_at', yesterday.toISOString());

    setStats({
      totalClients: clientsCount || 0,
      activeServices: servicesCount || 0,
      recentAccess: accessCount || 0,
    });

    // Get recent client access with profile info
    const { data: accessLogs } = await supabase
      .from('client_access_logs')
      .select(`
        id,
        accessed_at,
        profiles (
          id,
          full_name,
          email
        )
      `)
      .order('accessed_at', { ascending: false })
      .limit(5);

    if (accessLogs) {
      const formattedClients = accessLogs.map((log: any) => ({
        id: log.profiles?.id,
        full_name: log.profiles?.full_name,
        email: log.profiles?.email,
        accessed_at: log.accessed_at,
      }));
      setRecentClients(formattedClients);
    }

    setIsLoading(false);
  };

  const formatDate = (date: string) => {
    const d = new Date(date);
    const now = new Date();
    const diff = now.getTime() - d.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(minutes / 60);
    
    if (minutes < 60) return `Hace ${minutes} min`;
    if (hours < 24) return `Hace ${hours} horas`;
    return d.toLocaleDateString('es-ES', { day: 'numeric', month: 'short' });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <p className="text-muted-foreground">Vista general del estado de la plataforma</p>
      </div>

      {/* Stats */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Clientes
            </CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalClients}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Servicios Activos
            </CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeServices}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Accesos (24h)
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.recentAccess}</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Accesos Recientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentClients.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-4">
                No hay accesos recientes
              </p>
            ) : (
              <div className="space-y-3">
                {recentClients.map((client, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <p className="font-medium text-sm">{client.full_name || 'Sin nombre'}</p>
                      <p className="text-xs text-muted-foreground">{client.email}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(client.accessed_at)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Link 
              to="/admin/clients"
              className="block p-3 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">Gestionar Clientes</p>
                  <p className="text-xs text-muted-foreground">Ver y editar información de clientes</p>
                </div>
              </div>
            </Link>
            <Link 
              to="/admin/diagnostics"
              className="block p-3 rounded-lg border border-border hover:bg-muted transition-colors"
            >
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">Diagnósticos</p>
                  <p className="text-xs text-muted-foreground">Ejecutar diagnósticos y análisis</p>
                </div>
              </div>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
