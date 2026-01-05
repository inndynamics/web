import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Search, Eye, Briefcase } from 'lucide-react';

interface Client {
  id: string;
  full_name: string | null;
  email: string;
  created_at: string;
  active_services: number;
  last_access: string | null;
}

export default function AdminClients() {
  const [clients, setClients] = useState<Client[]>([]);
  const [filteredClients, setFilteredClients] = useState<Client[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchClients();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = clients.filter(
        (c) =>
          c.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.email.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredClients(filtered);
    } else {
      setFilteredClients(clients);
    }
  }, [searchTerm, clients]);

  const fetchClients = async () => {
    // Get all clients (users with client role)
    const { data: clientRoles } = await supabase
      .from('user_roles')
      .select('user_id')
      .eq('role', 'client');

    if (!clientRoles) {
      setIsLoading(false);
      return;
    }

    const clientIds = clientRoles.map((r) => r.user_id);

    // Get profiles for these clients
    const { data: profiles } = await supabase
      .from('profiles')
      .select('id, full_name, email, created_at')
      .in('id', clientIds);

    if (!profiles) {
      setIsLoading(false);
      return;
    }

    // Get service counts and last access for each client
    const clientsWithData = await Promise.all(
      profiles.map(async (profile) => {
        // Count active services
        const { count: serviceCount } = await supabase
          .from('client_services')
          .select('*', { count: 'exact', head: true })
          .eq('client_id', profile.id)
          .eq('status', 'active');

        // Get last access
        const { data: lastAccess } = await supabase
          .from('client_access_logs')
          .select('accessed_at')
          .eq('client_id', profile.id)
          .order('accessed_at', { ascending: false })
          .limit(1)
          .maybeSingle();

        return {
          ...profile,
          active_services: serviceCount || 0,
          last_access: lastAccess?.accessed_at || null,
        };
      })
    );

    setClients(clientsWithData);
    setFilteredClients(clientsWithData);
    setIsLoading(false);
  };

  const formatDate = (date: string | null) => {
    if (!date) return 'Nunca';
    return new Date(date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
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
        <h2 className="text-2xl font-bold">Gestión de Clientes</h2>
        <p className="text-muted-foreground">Administra los clientes registrados</p>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar por nombre o email..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Clients Table */}
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nombre</TableHead>
                <TableHead>Email</TableHead>
                <TableHead className="text-center">Servicios Activos</TableHead>
                <TableHead>Último Acceso</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredClients.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-8 text-muted-foreground">
                    {searchTerm ? 'No se encontraron clientes' : 'No hay clientes registrados'}
                  </TableCell>
                </TableRow>
              ) : (
                filteredClients.map((client) => (
                  <TableRow key={client.id}>
                    <TableCell className="font-medium">
                      {client.full_name || 'Sin nombre'}
                    </TableCell>
                    <TableCell>{client.email}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={client.active_services > 0 ? 'default' : 'secondary'}>
                        <Briefcase className="h-3 w-3 mr-1" />
                        {client.active_services}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {formatDate(client.last_access)}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm" asChild>
                        <Link to={`/admin/client/${client.id}`}>
                          <Eye className="h-4 w-4 mr-2" />
                          Ver
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
