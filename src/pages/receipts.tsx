import { useState } from "react";
import { Link } from "react-router-dom";
import { FileText, Search, Filter, Plus } from "lucide-react";
import DashboardLayout from "@/components/template/dashboardLayout";
import { MAIN_MENU, MI_NEGOCIO } from "@/lib/menus";
import { logout } from "@/lib/auth";
import Card from "@/components/atoms/card";
import { BtnPrimary } from "@/components/atoms/btn";
import { MOCK_BOLETAS, type Boleta } from "@/lib/mocks/receipts";

type EstadoFilter = "Todas" | Boleta["estado"];

const ESTADO_BADGE: Record<string, string> = {
  pagada: "bg-emerald-100 text-emerald-700",
  pendiente: "bg-amber-100 text-amber-700",
  vencida: "bg-red-100 text-red-700",
};

function ReceiptsPage() {
  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState<EstadoFilter>("Todas");

  const filtered = MOCK_BOLETAS.filter((b) => {
    const matchSearch =
      b.id.toLowerCase().includes(search.toLowerCase()) ||
      b.clienteNombre.toLowerCase().includes(search.toLowerCase());
    const matchFiltro = filtro === "Todas" || b.estado === filtro;
    return matchSearch && matchFiltro;
  });

  const pendientes = MOCK_BOLETAS.filter((b) => b.estado === "pendiente").length;
  const vencidas = MOCK_BOLETAS.filter((b) => b.estado === "vencida").length;

  return (
    <DashboardLayout
      menuItems={MAIN_MENU.map((item) => ({ ...item, active: item.to === "/boletas" }))}
      miNegocioItems={MI_NEGOCIO}
      onLogout={logout}
    >
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--text)]">Boletas</h1>
            <p className="text-sm text-[var(--text-muted)]">
              {MOCK_BOLETAS.length} boletas · {pendientes} pendientes · {vencidas} vencidas
            </p>
          </div>
          <BtnPrimary size="sm" fullWidth={false}>
            <Plus className="mr-2 size-4" />
            Nueva boleta
          </BtnPrimary>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Card className="text-center">
            <p className="text-xs uppercase text-[var(--text-muted)]">Pagadas</p>
            <p className="text-xl font-bold text-emerald-600">{MOCK_BOLETAS.filter((b) => b.estado === "pagada").length}</p>
          </Card>
          <Card className="text-center">
            <p className="text-xs uppercase text-[var(--text-muted)]">Pendientes</p>
            <p className="text-xl font-bold text-amber-600">{pendientes}</p>
          </Card>
          <Card className="text-center">
            <p className="text-xs uppercase text-[var(--text-muted)]">Vencidas</p>
            <p className="text-xl font-bold text-red-600">{vencidas}</p>
          </Card>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-3 py-2 flex-1">
            <Search className="size-4 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Buscar por ID o cliente..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border-0 bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="size-4 text-[var(--text-muted)]" />
            {(["Todas", "pagada", "pendiente", "vencida"] as EstadoFilter[]).map((est) => (
              <button
                key={est}
                onClick={() => setFiltro(est)}
                className={`rounded-full px-3 py-1 text-xs font-medium capitalize transition-colors ${
                  filtro === est
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--accent-bg)] text-[var(--text-muted)] hover:bg-[var(--accent-border)]"
                }`}
              >
                {est}
              </button>
            ))}
          </div>
        </div>

        <Card className="overflow-x-auto p-0">
          <table className="w-full min-w-[600px] text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] text-left text-xs uppercase text-[var(--text-muted)]">
                <th className="px-4 py-3 font-medium">Boleta</th>
                <th className="px-4 py-3 font-medium">Cliente</th>
                <th className="px-4 py-3 font-medium">Fecha</th>
                <th className="hidden px-4 py-3 font-medium md:table-cell">Productos</th>
                <th className="px-4 py-3 font-medium text-right">Total</th>
                <th className="px-4 py-3 font-medium text-right">Saldo</th>
                <th className="px-4 py-3 font-medium text-center">Estado</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((boleta) => (
                <tr key={boleta.id} className="border-b border-[var(--border)] transition-colors hover:bg-[var(--accent-bg)]">
                  <td className="px-4 py-3 font-semibold text-[var(--text)]">{boleta.id}</td>
                  <td className="px-4 py-3">
                    <Link to={`/clientes/${boleta.clienteId}`} className="text-[var(--accent)] hover:underline">
                      {boleta.clienteNombre}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-[var(--text-muted)]">{boleta.fecha}</td>
                  <td className="hidden px-4 py-3 text-[var(--text-muted)] md:table-cell">{boleta.productos}</td>
                  <td className="px-4 py-3 text-right font-semibold text-[var(--text)]">
                    S/ {boleta.total.toLocaleString("es-PE")}
                  </td>
                  <td className={`px-4 py-3 text-right font-semibold ${boleta.saldoPendiente > 0 ? "text-amber-600" : "text-emerald-600"}`}>
                    S/ {boleta.saldoPendiente.toLocaleString("es-PE")}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold capitalize ${ESTADO_BADGE[boleta.estado]}`}>
                      {boleta.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <FileText className="mx-auto size-10 text-[var(--text-muted)]" />
            <p className="mt-3 text-sm text-[var(--text-muted)]">No se encontraron boletas</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default ReceiptsPage;
