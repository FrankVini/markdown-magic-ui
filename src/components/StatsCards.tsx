import { CheckCircle2, Clock, Calendar } from "lucide-react";

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-success/10 p-3 rounded-xl">
            <CheckCircle2 className="w-6 h-6 text-success" />
          </div>
          <span className="text-3xl font-bold text-success">86%</span>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">Implementado</h3>
        <p className="text-xs text-muted-foreground">Documentos aprovados e vigentes</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-warning/10 p-3 rounded-xl">
            <Clock className="w-6 h-6 text-warning" />
          </div>
          <span className="text-3xl font-bold text-warning">14%</span>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">Em Revisão</h3>
        <p className="text-xs text-muted-foreground">Aguardando atualização</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-muted p-3 rounded-xl">
            <Calendar className="w-6 h-6 text-muted-foreground" />
          </div>
          <span className="text-3xl font-bold text-muted-foreground">5%</span>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">Planejado</h3>
        <p className="text-xs text-muted-foreground">Previstos para elaboração</p>
      </div>
    </div>
  );
};
