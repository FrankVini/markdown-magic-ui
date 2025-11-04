import { CheckCircle2, Clock, Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const StatsCards = () => {
  const { t } = useLanguage();
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
          <div className="bg-in-progress/10 p-3 rounded-xl">
            <Clock className="w-6 h-6 text-in-progress" />
          </div>
          <span className="text-3xl font-bold text-in-progress">8%</span>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{t.inProgress}</h3>
        <p className="text-xs text-muted-foreground">{t.inProgressDesc}</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-review/10 p-3 rounded-xl">
            <Clock className="w-6 h-6 text-review" />
          </div>
          <span className="text-3xl font-bold text-review">6%</span>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{t.inReview}</h3>
        <p className="text-xs text-muted-foreground">{t.inReviewDesc}</p>
      </div>

      <div className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex items-center justify-between mb-4">
          <div className="bg-info/10 p-3 rounded-xl">
            <Calendar className="w-6 h-6 text-info" />
          </div>
          <span className="text-3xl font-bold text-info">5%</span>
        </div>
        <h3 className="text-sm font-medium text-muted-foreground mb-1">{t.planned}</h3>
        <p className="text-xs text-muted-foreground">{t.plannedDesc}</p>
      </div>
    </div>
  );
};
