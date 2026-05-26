import { useState } from "react";
import { Link } from "react-router-dom";
import { History, Search, Filter } from "lucide-react";
import DashboardLayout from "@/components/template/dashboardLayout";
import { MAIN_MENU, MI_NEGOCIO } from "@/lib/menus";
import { logout } from "@/lib/auth";
import Card from "@/components/atoms/card";
import { MOCK_HISTORIAL, type RegistroHistorial } from "@/lib/mocks/history";

type TipoFilter = "Todos" | RegistroHistorial["tipo"];

const TIPO_CONFIG: Record<RegistroHistorial["tipo"], { label: string; color: string; bg: string }> = {
  venta: { label: "Venta", color: "text-emerald-700", bg: "bg-emerald-100" },
  pago: { label: "Pago", color: "text-blue-700", bg: "bg-blue-100" },
  bloqueo: { label: "Bloqueo", color: "text-red-700", bg: "bg-red-100" },
  registro: { label: "Registro", color: "text-violet-700", bg: "bg-violet-100" },
};

function HistoryPage() {
  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState<TipoFilter>("Todos");

  const filtered = MOCK_HISTORIAL.filter((r) => {
    const q = search.toLowerCase();
    const matchSearch =
      r.descripcion.toLowerCase().includes(q) ||
      r.clienteNombre.toLowerCase().includes(q);
    const matchFiltro = filtro === "Todos" || r.tipo === filtro;
    return matchSearch && matchFiltro;
  });

  return (
    <DashboardLayout
      menuItems={MAIN_MENU}
      miNegocioItems={MI_NEGOCIO.map((item) => ({ ...item, active: item.to === "/historial" }))}
      onLogout={logout}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text)]">Historial</h1>
          <p className="text-sm text-[var(--text-muted)]">Registro de todas las actividades</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {(["venta", "pago", "bloqueo", "registro"] as const).map((tipo) => {
            const config = TIPO_CONFIG[tipo];
            const count = MOCK_HISTORIAL.filter((r) => r.tipo === tipo).length;
            return (
              <Card key={tipo} className="text-center">
                <p className="text-xs uppercase text-[var(--text-muted)]">{config.label}s</p>
                <p className="text-xl font-bold text-[var(--text)]">{count}</p>
              </Card>
            );
          })}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-3 py-2 flex-1">
            <Search className="size-4 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Buscar por descripción o cliente..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border-0 bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="size-4 text-[var(--text-muted)]" />
            {(["Todos", "venta", "pago", "bloqueo", "registro"] as TipoFilter[]).map((f) => {
              const config = f === "Todos" ? null : TIPO_CONFIG[f];
              return (
                <button
                  key={f}
                  onClick={() => setFiltro(f)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                    filtro === f
                      ? "bg-[var(--accent)] text-white"
                      : "bg-[var(--accent-bg)] text-[var(--text-muted)] hover:bg-[var(--accent-border)]"
                  }`}
                >
                  {config?.label ?? f}
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative space-y-0">
          <div className="absolute left-5 top-3 bottom-3 w-px bg-[var(--border)]" />
          {filtered.map((reg) => {
            const config = TIPO_CONFIG[reg.tipo];
            return (
              <div key={reg.id} className="relative flex items-start gap-4 py-3">
                <div className={`relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full ${config.bg}`}>
                  <span className={`text-xs font-bold ${config.color}`}>
                    {config.label[0]}
                  </span>
                </div>
                <Card className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${config.bg} ${config.color}`}>
                          {config.label}
                        </span>
                        <Link to={`/clientes/${reg.id}`} className="text-xs text-[var(--accent)] hover:underline">
                          {reg.clienteNombre}
                        </Link>
                      </div>
                      <p className="mt-1 text-sm text-[var(--text)]">{reg.descripcion}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-xs text-[var(--text-muted)]">{reg.fecha}</p>
                      {reg.monto != null && (
                        <p className={`text-sm font-semibold ${reg.tipo === "venta" || reg.tipo === "pago" ? "text-emerald-600" : "text-[var(--text)]"}`}>
                          {reg.tipo === "bloqueo" ? "" : "S/ "}{reg.monto.toLocaleString("es-PE")}
                        </p>
                      )}
                    </div>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <History className="mx-auto size-10 text-[var(--text-muted)]" />
            <p className="mt-3 text-sm text-[var(--text-muted)]">No se encontraron registros</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default HistoryPage;
