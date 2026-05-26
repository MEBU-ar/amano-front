import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Plus, Search, CreditCard, Banknote } from "lucide-react";
import DashboardLayout from "@/components/template/dashboardLayout";
import { MAIN_MENU, MI_NEGOCIO } from "@/lib/menus";
import { logout } from "@/lib/auth";
import Card from "@/components/atoms/card";
import { BtnPrimary } from "@/components/atoms/btn";
import { MOCK_VENTAS } from "@/lib/mocks/sales";

function SalesPage() {
  const [search, setSearch] = useState("");

  const filtered = MOCK_VENTAS.filter((v) => {
    const q = search.toLowerCase();
    return (
      v.id.toLowerCase().includes(q) ||
      v.clienteNombre.toLowerCase().includes(q) ||
      v.productos.toLowerCase().includes(q)
    );
  });

  const ventasHoy = MOCK_VENTAS.filter((v) => v.fecha.startsWith("16/03")).length;
  const ingresosHoy = MOCK_VENTAS.filter((v) => v.fecha.startsWith("16/03")).reduce((s, v) => s + v.total, 0);
  const creditoPendiente = MOCK_VENTAS.filter((v) => v.metodoPago === "Crédito").reduce((s, v) => s + v.total, 0);

  return (
    <DashboardLayout
      menuItems={MAIN_MENU}
      miNegocioItems={MI_NEGOCIO.map((item) => ({ ...item, active: item.to === "/ventas" }))}
      onLogout={logout}
    >
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--text)]">Ventas</h1>
            <p className="text-sm text-[var(--text-muted)]">Registro de ventas del negocio</p>
          </div>
          <BtnPrimary size="sm" fullWidth={false}>
            <Plus className="mr-2 size-4" />
            Nueva venta
          </BtnPrimary>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Card className="text-center">
            <p className="text-xs uppercase text-[var(--text-muted)]">Hoy</p>
            <p className="text-xl font-bold text-[var(--text)]">{ventasHoy}</p>
          </Card>
          <Card className="text-center">
            <p className="text-xs uppercase text-[var(--text-muted)]">Ingresos hoy</p>
            <p className="text-xl font-bold text-emerald-600">S/ {ingresosHoy.toLocaleString("es-PE")}</p>
          </Card>
          <Card className="text-center">
            <p className="text-xs uppercase text-[var(--text-muted)]">Total ventas</p>
            <p className="text-xl font-bold text-[var(--text)]">{MOCK_VENTAS.length}</p>
          </Card>
          <Card className="text-center">
            <p className="text-xs uppercase text-[var(--text-muted)]">Crédito pend.</p>
            <p className="text-xl font-bold text-amber-600">S/ {creditoPendiente.toLocaleString("es-PE")}</p>
          </Card>
        </div>

        <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-3 py-2">
          <Search className="size-4 text-[var(--text-muted)]" />
          <input
            type="text"
            placeholder="Buscar por ID, cliente o producto..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border-0 bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none"
          />
        </div>

        <div className="space-y-3">
          {filtered.map((venta) => (
            <Card key={venta.id} className="flex items-center gap-4">
              <div className={`flex size-10 shrink-0 items-center justify-center rounded-full ${venta.metodoPago === "Efectivo" ? "bg-emerald-100" : "bg-amber-100"}`}>
                {venta.metodoPago === "Efectivo" ? (
                  <Banknote className="size-5 text-emerald-600" />
                ) : (
                  <CreditCard className="size-5 text-amber-600" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p className="text-sm font-semibold text-[var(--text)]">{venta.id}</p>
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${venta.metodoPago === "Efectivo" ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"}`}>
                    {venta.metodoPago}
                  </span>
                </div>
                <p className="text-sm text-[var(--text-muted)]">{venta.productos}</p>
                <div className="mt-1 flex items-center gap-3 text-xs text-[var(--text-muted)]">
                  <Link to={`/clientes/${venta.clienteId}`} className="text-[var(--accent)] hover:underline">
                    {venta.clienteNombre}
                  </Link>
                  <span>{venta.fecha}</span>
                </div>
              </div>
              <p className="shrink-0 text-lg font-bold text-[var(--accent)]">
                S/ {venta.total.toLocaleString("es-PE")}
              </p>
            </Card>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <ShoppingCart className="mx-auto size-10 text-[var(--text-muted)]" />
            <p className="mt-3 text-sm text-[var(--text-muted)]">No se encontraron ventas</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default SalesPage;
