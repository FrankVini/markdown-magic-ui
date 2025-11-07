import { CheckCircle2, Clock, Calendar, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const StatsCards = () => {
  const { t } = useLanguage();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-success/10 p-3 rounded-xl">
            <CheckCircle2 className="w-6 h-6 text-success" />
          </div>
          <span className="text-3xl font-bold text-success">86%</span>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{t.implemented}</h3>
        <p className="text-xs text-muted-foreground">{t.implementedDesc}</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl" style={{ backgroundColor: 'hsl(48, 100%, 50%, 0.1)' }}>
            <TrendingUp className="w-6 h-6" style={{ color: 'hsl(48, 100%, 50%)' }} />
          </div>
          <span className="text-3xl font-bold" style={{ color: 'hsl(48, 100%, 50%)' }}>8%</span>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{t.inProgress}</h3>
        <p className="text-xs text-muted-foreground">{t.inReviewDesc}</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl" style={{ backgroundColor: 'hsl(288, 100%, 50%, 0.1)' }}>
            <Clock className="w-6 h-6" style={{ color: 'hsl(288, 100%, 50%)' }} />
          </div>
          <span className="text-3xl font-bold" style={{ color: 'hsl(288, 100%, 50%)' }}>6%</span>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{t.inReview}</h3>
        <p className="text-xs text-muted-foreground">{t.inReviewDesc}</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 rounded-xl" style={{ backgroundColor: 'hsl(215, 70%, 25%, 0.1)' }}>
            <Calendar className="w-6 h-6" style={{ color: 'hsl(215, 70%, 25%)' }} />
          </div>
          <span className="text-3xl font-bold" style={{ color: 'hsl(215, 70%, 25%)' }}>5%</span>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{t.planned}</h3>
        <p className="text-xs text-muted-foreground">{t.plannedDesc}</p>
      </div>
    </div>
  );
};
