import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LogOut, Mail, Phone, MapPin, Clock, CheckCircle2, PauseCircle, Play } from 'lucide-react';
import Logo from '@/components/Logo';

interface Service {
  id: string;
  service_name: string;
  service_description: string | null;
  status: string;
  progress_percentage: number;
  start_date: string | null;
  updates: Update[];
}

interface Update {
  id: string;
  update_title: string;
  update_description: string | null;
  created_at: string;
}

interface Profile {
  full_name: string | null;
  email: string;
}

export default function Dashboard() {
  const { user, signOut, logAccess, role, loading } = useAuth();
  const navigate = useNavigate();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [recentUpdates, setRecentUpdates] = useState<Update[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!loading && role === 'admin') {
      navigate('/admin/dashboard');
    }
  }, [role, loading, navigate]);

  useEffect(() => {
    if (user) {
      logAccess();
      fetchData();
    }
  }, [user]);

  const fetchData = async () => {
    if (!user) return;

    // Fetch profile
    const { data: profileData } = await supabase
      .from('profiles')
      .select('full_name, email')
      .eq('id', user.id)
      .maybeSingle();
    
    if (profileData) setProfile(profileData);

    // Fetch services with their updates
    const { data: servicesData } = await supabase
      .from('client_services')
      .select(`
        id,
        service_name,
        service_description,
        status,
        progress_percentage,
        start_date,
        service_updates (
          id,
          update_title,
          update_description,
          created_at
        )
      `)
      .eq('client_id', user.id)
      .order('created_at', { ascending: false });

    if (servicesData) {
      const formattedServices = servicesData.map((s: any) => ({
        ...s,
        updates: s.service_updates || [],
      }));
      setServices(formattedServices);

      // Get recent updates from all services
      const allUpdates = formattedServices
        .flatMap((s: Service) => s.updates)
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 5);
      setRecentUpdates(allUpdates);
    }

    setIsLoading(false);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active':
        return <Badge className="bg-green-500/10 text-green-600 border-green-500/20"><Play className="h-3 w-3 mr-1" /> Activo</Badge>;
      case 'paused':
        return <Badge className="bg-yellow-500/10 text-yellow-600 border-yellow-500/20"><PauseCircle className="h-3 w-3 mr-1" /> Pausado</Badge>;
      case 'completed':
        return <Badge className="bg-primary/10 text-primary border-primary/20"><CheckCircle2 className="h-3 w-3 mr-1" /> Completado</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-card border-b border-border">
        <div className="container-bcr flex items-center justify-between h-16">
          <Logo className="h-8" />
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {profile?.full_name || profile?.email}
            </span>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </header>

      <main className="container-bcr py-8">
        {/* Welcome */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">
            ¡Hola, {profile?.full_name?.split(' ')[0] || 'Cliente'}!
          </h1>
          <p className="text-muted-foreground">
            Aquí puedes ver el estado de tus servicios contratados
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Services */}
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-xl font-semibold">Tus Servicios</h2>
            
            {services.length === 0 ? (
              <Card>
                <CardContent className="py-12 text-center">
                  <p className="text-muted-foreground">
                    Aún no tienes servicios contratados.
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Contacta con nosotros para comenzar.
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-4">
                {services.map((service) => (
                  <Card key={service.id} className="card-hover">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">{service.service_name}</CardTitle>
                          {service.service_description && (
                            <CardDescription className="mt-1">
                              {service.service_description}
                            </CardDescription>
                          )}
                        </div>
                        {getStatusBadge(service.status)}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progreso</span>
                          <span className="font-medium">{service.progress_percentage}%</span>
                        </div>
                        <Progress value={service.progress_percentage} className="h-2" />
                        {service.start_date && (
                          <p className="text-xs text-muted-foreground flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            Inicio: {formatDate(service.start_date)}
                          </p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Updates */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Últimas Actualizaciones</h2>
              <Card>
                <CardContent className="p-4">
                  {recentUpdates.length === 0 ? (
                    <p className="text-sm text-muted-foreground text-center py-4">
                      No hay actualizaciones recientes
                    </p>
                  ) : (
                    <div className="space-y-4">
                      {recentUpdates.map((update) => (
                        <div key={update.id} className="border-l-2 border-primary pl-4 py-1">
                          <p className="font-medium text-sm">{update.update_title}</p>
                          {update.update_description && (
                            <p className="text-xs text-muted-foreground mt-1">
                              {update.update_description}
                            </p>
                          )}
                          <p className="text-xs text-muted-foreground mt-1">
                            {formatDate(update.created_at)}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Contacto</h2>
              <Card>
                <CardContent className="p-4 space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <a href="mailto:contacto@inndynamics.com" className="text-sm hover:text-primary">
                      contacto@inndynamics.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground">
                      Sevilla, España
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
