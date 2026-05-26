import { useState } from "react";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
} from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import DashboardLayout from "@/components/template/dashboardLayout";
import { MAIN_MENU, MI_NEGOCIO } from "@/lib/menus";
import { logout } from "@/lib/auth";
import Card from "@/components/atoms/card";
import {
  MOCK_METRICAS_RENDIMIENTO,
  MOCK_RENDIMIENTO_SEMANAL,
  MOCK_RENDIMIENTO_MENSUAL,
  MOCK_TOP_PRODUCTOS_RENDIMIENTO,
} from "@/lib/mocks/performance";

type VistaPeriodo = "semanal" | "mensual";

function PerformancePage() {
  const [periodo, setPeriodo] = useState<VistaPeriodo>("semanal");

  return (
    <DashboardLayout
      menuItems={MAIN_MENU.map((item) => ({ ...item, active: item.to === "/rendimiento" }))}
      miNegocioItems={MI_NEGOCIO}
      onLogout={logout}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text)]">Rendimiento</h1>
          <p className="text-sm text-[var(--text-muted)]">Métricas y tendencias de tu negocio</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {MOCK_METRICAS_RENDIMIENTO.map((m) => (
            <Card key={m.label} className="flex flex-col gap-1">
              <p className="text-xs uppercase text-[var(--text-muted)]">{m.label}</p>
              <p className="text-xl font-bold text-[var(--text)]">{m.valor}</p>
              <div className={`flex items-center gap-1 text-xs font-semibold ${m.cambio >= 0 ? "text-emerald-600" : "text-red-600"}`}>
                {m.cambio >= 0 ? <ArrowUpRight className="size-3" /> : <ArrowDownRight className="size-3" />}
                {Math.abs(m.cambio)}%
              </div>
            </Card>
          ))}
        </div>

        <Card>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-[var(--text)]">
              Ventas {periodo === "semanal" ? "de la semana" : "de los últimos 6 meses"}
            </h2>
            <div className="flex gap-1 rounded-lg bg-[var(--accent-bg)] p-0.5">
              {(["semanal", "mensual"] as VistaPeriodo[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriodo(p)}
                  className={`rounded-md px-3 py-1 text-xs font-medium capitalize transition-colors ${
                    periodo === p
                      ? "bg-[var(--accent)] text-white"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              {periodo === "semanal" ? (
                <BarChart data={MOCK_RENDIMIENTO_SEMANAL}>
                  <XAxis dataKey="dia" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "var(--text-muted)" }} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                    formatter={(v) => [`S/ ${Number(v).toLocaleString("es-PE")}`, "Ventas"]}
                  />
                  <Bar dataKey="ventas" fill="var(--accent)" radius={[4, 4, 0, 0]} />
                </BarChart>
              ) : (
                <LineChart data={MOCK_RENDIMIENTO_MENSUAL}>
                  <XAxis dataKey="mes" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: "var(--text-muted)" }} />
                  <YAxis hide />
                  <Tooltip
                    contentStyle={{
                      background: "var(--card-bg)",
                      border: "1px solid var(--border)",
                      borderRadius: 8,
                      fontSize: 12,
                    }}
                    formatter={(v) => [`S/ ${Number(v).toLocaleString("es-PE")}`, "Ventas"]}
                  />
                  <Line type="monotone" dataKey="ventas" stroke="var(--accent)" strokeWidth={2} dot={{ fill: "var(--accent)", r: 4 }} />
                </LineChart>
              )}
            </ResponsiveContainer>
          </div>
        </Card>

        <Card>
          <h2 className="mb-4 text-sm font-semibold text-[var(--text)]">Top 5 productos del mes</h2>
          <div className="space-y-3">
            {MOCK_TOP_PRODUCTOS_RENDIMIENTO.map((prod, i) => (
              <div key={prod.nombre} className="flex items-center gap-3">
                <span className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold ${i === 0 ? "bg-[var(--accent)] text-white" : "bg-[var(--accent-bg)] text-[var(--text-muted)]"}`}>
                  {i + 1}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-[var(--text)]">{prod.nombre}</p>
                  <p className="text-xs text-[var(--text-muted)]">{prod.ventas} vendidos</p>
                </div>
                <p className="shrink-0 text-sm font-semibold text-[var(--accent)]">
                  S/ {prod.ingresos.toLocaleString("es-PE")}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default PerformancePage;
