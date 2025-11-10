import { Calendar } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const metrics = [
  { label: "Controles ISO Implementados", value: "71 / 83 (86%)" },
  { label: "Controles em Revisão", value: "12 (14%)" },
  { label: "Controles Planejados", value: "4 (5%)" },
  { label: "Maturidade Média Global", value: "8.1 / 10" },
  { label: "Próxima Revisão Geral", value: "Março/2026" },
];

const chartData = [
  { name: "Concluído", value: 86, color: "hsl(146, 72%, 42%)" },
  { name: "Em Andamento", value: 8, color: "hsl(210, 79%, 46%)" },
  { name: "Em Revisão", value: 6, color: "hsl(207, 89%, 68%)" },
  { name: "Planejado", value: 5, color: "hsl(149, 57%, 77%)" },
];

export const IndicatorsTab = () => {
  const { t } = useLanguage();
  
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      {/* Indicadores Gerais */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-accent/10 p-2 rounded-lg">
            <Calendar className="w-5 h-5 text-[hsl(215,70%,25%)]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">{t.generalIndicators}</h2>
            <p className="text-sm text-muted-foreground">{t.generalIndicatorsSubtitle}</p>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-md">
          <table className="w-full">
            <tbody className="divide-y divide-border">
              {metrics.map((metric, index) => (
                <tr key={index} className="hover:bg-secondary/50 transition-colors">
                  <td className="px-6 py-4">
                    <span className="text-sm text-muted-foreground">{metric.label}</span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <span className="text-sm font-semibold text-foreground">{metric.value}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Gráfico de Distribuição */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-accent/10 p-2 rounded-lg">
            <Calendar className="w-5 h-5 text-[hsl(215,70%,25%)]" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">Distribuição de Status</h2>
            <p className="text-sm text-muted-foreground">Percentual por categoria</p>
          </div>
        </div>
        
        <div className="bg-card border border-border rounded-2xl p-6 shadow-md">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </section>
    </div>
  );
};
