import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Stethoscope, Play, Clock, CheckCircle } from 'lucide-react';

interface Client {
  id: string;
  full_name: string | null;
  email: string;
}

interface Diagnostic {
  id: string;
  diagnostic_type: string;
  results: any;
  executed_at: string;
  client: {
    full_name: string | null;
    email: string;
  };
}

const diagnosticTypes = [
  { value: 'seo_audit', label: 'Auditoría SEO' },
  { value: 'performance', label: 'Análisis de Rendimiento' },
  { value: 'security', label: 'Análisis de Seguridad' },
  { value: 'ux_review', label: 'Revisión UX' },
  { value: 'competitive', label: 'Análisis Competitivo' },
  { value: 'custom', label: 'Diagnóstico Personalizado' },
];

export default function AdminDiagnostics() {
  const { user } = useAuth();
  const { toast } = useToast();

  const [clients, setClients] = useState<Client[]>([]);
  const [selectedClient, setSelectedClient] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [customNotes, setCustomNotes] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [recentDiagnostics, setRecentDiagnostics] = useState<Diagnostic[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // Get all clients
    const { data: clientRoles } = await supabase
      .from('user_roles')
      .select('user_id')
      .eq('role', 'client');

    if (clientRoles) {
      const clientIds = clientRoles.map((r) => r.user_id);
      const { data: profiles } = await supabase
        .from('profiles')
        .select('id, full_name, email')
        .in('id', clientIds);

      if (profiles) setClients(profiles);
    }

    // Get recent diagnostics
    const { data: diagnostics } = await supabase
      .from('diagnostics')
      .select(`
        id,
        diagnostic_type,
        results,
        executed_at,
        profiles!diagnostics_client_id_fkey (
          full_name,
          email
        )
      `)
      .order('executed_at', { ascending: false })
      .limit(10);

    if (diagnostics) {
      const formatted = diagnostics.map((d: any) => ({
        ...d,
        client: d.profiles,
      }));
      setRecentDiagnostics(formatted);
    }

    setIsLoading(false);
  };

  const handleRunDiagnostic = async () => {
    if (!selectedClient || !selectedType) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Selecciona un cliente y un tipo de diagnóstico',
      });
      return;
    }

    setIsRunning(true);

    // Simulate diagnostic running
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Create diagnostic result
    const results = {
      type: selectedType,
      status: 'completed',
      notes: customNotes || null,
      timestamp: new Date().toISOString(),
      summary: `Diagnóstico ${diagnosticTypes.find((t) => t.value === selectedType)?.label} completado`,
    };

    const { error } = await supabase.from('diagnostics').insert({
      client_id: selectedClient,
      diagnostic_type: selectedType,
      results,
      executed_by: user?.id,
    });

    setIsRunning(false);

    if (error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'No se pudo ejecutar el diagnóstico',
      });
      return;
    }

    toast({
      title: 'Diagnóstico completado',
      description: 'Los resultados se han guardado correctamente',
    });

    setSelectedClient('');
    setSelectedType('');
    setCustomNotes('');
    fetchData();
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getTypeLabel = (value: string) => {
    return diagnosticTypes.find((t) => t.value === value)?.label || value;
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
        <h2 className="text-2xl font-bold">Diagnósticos</h2>
        <p className="text-muted-foreground">Ejecuta diagnósticos y análisis para los clientes</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Run Diagnostic */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Stethoscope className="h-5 w-5" />
              Ejecutar Diagnóstico
            </CardTitle>
            <CardDescription>
              Selecciona un cliente y el tipo de diagnóstico a realizar
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Cliente</Label>
              <Select value={selectedClient} onValueChange={setSelectedClient}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona un cliente" />
                </SelectTrigger>
                <SelectContent>
                  {clients.map((client) => (
                    <SelectItem key={client.id} value={client.id}>
                      {client.full_name || client.email}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Tipo de Diagnóstico</Label>
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecciona el tipo" />
                </SelectTrigger>
                <SelectContent>
                  {diagnosticTypes.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Notas adicionales (opcional)</Label>
              <Textarea
                value={customNotes}
                onChange={(e) => setCustomNotes(e.target.value)}
                placeholder="Añade notas o instrucciones especiales..."
                rows={3}
              />
            </div>

            <Button 
              className="w-full" 
              onClick={handleRunDiagnostic}
              disabled={isRunning || !selectedClient || !selectedType}
            >
              {isRunning ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary-foreground mr-2"></div>
                  Ejecutando...
                </>
              ) : (
                <>
                  <Play className="h-4 w-4 mr-2" />
                  Ejecutar Diagnóstico
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Recent Diagnostics */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              Diagnósticos Recientes
            </CardTitle>
          </CardHeader>
          <CardContent>
            {recentDiagnostics.length === 0 ? (
              <p className="text-sm text-muted-foreground text-center py-8">
                No hay diagnósticos ejecutados
              </p>
            ) : (
              <div className="space-y-3">
                {recentDiagnostics.map((diagnostic) => (
                  <div 
                    key={diagnostic.id} 
                    className="flex items-start justify-between p-3 rounded-lg border border-border"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium text-sm">{getTypeLabel(diagnostic.diagnostic_type)}</p>
                        <p className="text-xs text-muted-foreground">
                          {diagnostic.client?.full_name || diagnostic.client?.email}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {formatDate(diagnostic.executed_at)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Future Integrations Placeholder */}
      <Card className="border-dashed">
        <CardContent className="py-8 text-center">
          <p className="text-muted-foreground">
            🚀 Próximamente: Integraciones con herramientas externas de análisis
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
