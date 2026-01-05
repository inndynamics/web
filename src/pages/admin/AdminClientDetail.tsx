import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { ArrowLeft, Plus, Edit, Trash2, MessageSquarePlus, Clock, CheckCircle2, PauseCircle, Play } from 'lucide-react';

interface Profile {
  id: string;
  full_name: string | null;
  email: string;
  created_at: string;
}

interface Service {
  id: string;
  service_name: string;
  service_description: string | null;
  status: string;
  progress_percentage: number;
  start_date: string | null;
  created_at: string;
}

interface Update {
  id: string;
  update_title: string;
  update_description: string | null;
  created_at: string;
  service_id: string;
}

export default function AdminClientDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { toast } = useToast();

  const [profile, setProfile] = useState<Profile | null>(null);
  const [services, setServices] = useState<Service[]>([]);
  const [updates, setUpdates] = useState<Update[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Service form state
  const [serviceDialogOpen, setServiceDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [serviceName, setServiceName] = useState('');
  const [serviceDescription, setServiceDescription] = useState('');
  const [serviceStatus, setServiceStatus] = useState('active');
  const [serviceProgress, setServiceProgress] = useState(0);

  // Update form state
  const [updateDialogOpen, setUpdateDialogOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState('');
  const [updateTitle, setUpdateTitle] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');

  useEffect(() => {
    if (id) {
      fetchClientData();
    }
  }, [id]);

  const fetchClientData = async () => {
    if (!id) return;

    // Fetch profile
    const { data: profileData } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (profileData) setProfile(profileData);

    // Fetch services
    const { data: servicesData } = await supabase
      .from('client_services')
      .select('*')
      .eq('client_id', id)
      .order('created_at', { ascending: false });

    if (servicesData) setServices(servicesData);

    // Fetch all updates for this client's services
    if (servicesData && servicesData.length > 0) {
      const serviceIds = servicesData.map((s) => s.id);
      const { data: updatesData } = await supabase
        .from('service_updates')
        .select('*')
        .in('service_id', serviceIds)
        .order('created_at', { ascending: false });

      if (updatesData) setUpdates(updatesData);
    }

    setIsLoading(false);
  };

  const resetServiceForm = () => {
    setServiceName('');
    setServiceDescription('');
    setServiceStatus('active');
    setServiceProgress(0);
    setEditingService(null);
  };

  const handleOpenServiceDialog = (service?: Service) => {
    if (service) {
      setEditingService(service);
      setServiceName(service.service_name);
      setServiceDescription(service.service_description || '');
      setServiceStatus(service.status);
      setServiceProgress(service.progress_percentage);
    } else {
      resetServiceForm();
    }
    setServiceDialogOpen(true);
  };

  const handleSaveService = async () => {
    if (!serviceName.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'El nombre del servicio es obligatorio',
      });
      return;
    }

    if (editingService) {
      // Update existing service
      const { error } = await supabase
        .from('client_services')
        .update({
          service_name: serviceName,
          service_description: serviceDescription || null,
          status: serviceStatus,
          progress_percentage: serviceProgress,
        })
        .eq('id', editingService.id);

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'No se pudo actualizar el servicio',
        });
        return;
      }

      toast({
        title: 'Servicio actualizado',
        description: 'Los cambios se han guardado correctamente',
      });
    } else {
      // Create new service
      const { error } = await supabase.from('client_services').insert({
        client_id: id,
        service_name: serviceName,
        service_description: serviceDescription || null,
        status: serviceStatus,
        progress_percentage: serviceProgress,
      });

      if (error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'No se pudo crear el servicio',
        });
        return;
      }

      toast({
        title: 'Servicio creado',
        description: 'El servicio se ha añadido correctamente',
      });
    }

    setServiceDialogOpen(false);
    resetServiceForm();
    fetchClientData();
  };

  const handleDeleteService = async (serviceId: string) => {
    if (!confirm('¿Estás seguro de eliminar este servicio?')) return;

    const { error } = await supabase
      .from('client_services')
      .delete()
      .eq('id', serviceId);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No se pudo eliminar el servicio',
      });
      return;
    }

    toast({
      title: 'Servicio eliminado',
      description: 'El servicio se ha eliminado correctamente',
    });
    fetchClientData();
  };

  const handleAddUpdate = async () => {
    if (!selectedServiceId || !updateTitle.trim()) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Selecciona un servicio y escribe un título',
      });
      return;
    }

    const { error } = await supabase.from('service_updates').insert({
      service_id: selectedServiceId,
      update_title: updateTitle,
      update_description: updateDescription || null,
      created_by_admin: user?.id,
    });

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No se pudo añadir la actualización',
      });
      return;
    }

    toast({
      title: 'Actualización publicada',
      description: 'El cliente podrá ver esta actualización',
    });

    setUpdateDialogOpen(false);
    setSelectedServiceId('');
    setUpdateTitle('');
    setUpdateDescription('');
    fetchClientData();
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
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!profile) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Cliente no encontrado</p>
        <Button variant="link" onClick={() => navigate('/admin/clients')}>
          Volver a la lista
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/admin/clients')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div>
          <h2 className="text-2xl font-bold">{profile.full_name || 'Sin nombre'}</h2>
          <p className="text-muted-foreground">{profile.email}</p>
        </div>
      </div>

      {/* Client Info */}
      <Card>
        <CardHeader>
          <CardTitle>Información del Cliente</CardTitle>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-muted-foreground">Nombre</Label>
            <p className="font-medium">{profile.full_name || 'No especificado'}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Email</Label>
            <p className="font-medium">{profile.email}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Fecha de registro</Label>
            <p className="font-medium">{formatDate(profile.created_at)}</p>
          </div>
          <div>
            <Label className="text-muted-foreground">Total servicios</Label>
            <p className="font-medium">{services.length}</p>
          </div>
        </CardContent>
      </Card>

      {/* Services */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">Servicios</h3>
          <div className="flex gap-2">
            <Dialog open={updateDialogOpen} onOpenChange={setUpdateDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" disabled={services.length === 0}>
                  <MessageSquarePlus className="h-4 w-4 mr-2" />
                  Añadir Actualización
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Nueva Actualización</DialogTitle>
                  <DialogDescription>
                    Añade una actualización que el cliente podrá ver
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Servicio</Label>
                    <Select value={selectedServiceId} onValueChange={setSelectedServiceId}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.id} value={s.id}>
                            {s.service_name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Título</Label>
                    <Input
                      value={updateTitle}
                      onChange={(e) => setUpdateTitle(e.target.value)}
                      placeholder="Ej: Avance en el desarrollo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Descripción (opcional)</Label>
                    <Textarea
                      value={updateDescription}
                      onChange={(e) => setUpdateDescription(e.target.value)}
                      placeholder="Detalles de la actualización..."
                      rows={4}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setUpdateDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={handleAddUpdate}>Publicar</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog open={serviceDialogOpen} onOpenChange={setServiceDialogOpen}>
              <DialogTrigger asChild>
                <Button size="sm" onClick={() => handleOpenServiceDialog()}>
                  <Plus className="h-4 w-4 mr-2" />
                  Nuevo Servicio
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{editingService ? 'Editar Servicio' : 'Nuevo Servicio'}</DialogTitle>
                  <DialogDescription>
                    {editingService ? 'Modifica los datos del servicio' : 'Añade un nuevo servicio para este cliente'}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <Label>Nombre del servicio *</Label>
                    <Input
                      value={serviceName}
                      onChange={(e) => setServiceName(e.target.value)}
                      placeholder="Ej: Desarrollo Web"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Descripción</Label>
                    <Textarea
                      value={serviceDescription}
                      onChange={(e) => setServiceDescription(e.target.value)}
                      placeholder="Descripción del servicio..."
                      rows={3}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Estado</Label>
                    <Select value={serviceStatus} onValueChange={setServiceStatus}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Activo</SelectItem>
                        <SelectItem value="paused">Pausado</SelectItem>
                        <SelectItem value="completed">Completado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Progreso: {serviceProgress}%</Label>
                    <Slider
                      value={[serviceProgress]}
                      onValueChange={(v) => setServiceProgress(v[0])}
                      max={100}
                      step={5}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setServiceDialogOpen(false)}>
                    Cancelar
                  </Button>
                  <Button onClick={handleSaveService}>
                    {editingService ? 'Guardar Cambios' : 'Crear Servicio'}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {services.length === 0 ? (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">Este cliente no tiene servicios</p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {services.map((service) => (
              <Card key={service.id}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{service.service_name}</CardTitle>
                      {service.service_description && (
                        <CardDescription>{service.service_description}</CardDescription>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      {getStatusBadge(service.status)}
                      <Button variant="ghost" size="icon" onClick={() => handleOpenServiceDialog(service)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteService(service.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progreso</span>
                      <span className="font-medium">{service.progress_percentage}%</span>
                    </div>
                    <Progress value={service.progress_percentage} className="h-2" />
                    
                    {/* Updates for this service */}
                    {updates.filter((u) => u.service_id === service.id).length > 0 && (
                      <div className="pt-4 border-t border-border mt-4">
                        <p className="text-sm font-medium mb-2 flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Actualizaciones
                        </p>
                        <div className="space-y-2">
                          {updates
                            .filter((u) => u.service_id === service.id)
                            .slice(0, 3)
                            .map((update) => (
                              <div key={update.id} className="text-sm border-l-2 border-primary/50 pl-3">
                                <p className="font-medium">{update.update_title}</p>
                                <p className="text-xs text-muted-foreground">{formatDate(update.created_at)}</p>
                              </div>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
