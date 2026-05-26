import { useState } from "react";
import { PackageCheck, Search, Filter, AlertTriangle, CheckCircle } from "lucide-react";
import DashboardLayout from "@/components/template/dashboardLayout";
import { MAIN_MENU, MI_NEGOCIO } from "@/lib/menus";
import { logout } from "@/lib/auth";
import Card from "@/components/atoms/card";
import { MOCK_PRODUCTOS } from "@/lib/mocks/products";

type StockFilter = "Todos" | "Bajo mínimo" | "Óptimo";

function StockPage() {
  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState<StockFilter>("Todos");

  const filtered = MOCK_PRODUCTOS.filter((p) => {
    const matchSearch = p.nombre.toLowerCase().includes(search.toLowerCase());
    const bajoMinimo = p.stock <= p.stockMinimo;
    const matchFiltro =
      filtro === "Todos" ||
      (filtro === "Bajo mínimo" && bajoMinimo) ||
      (filtro === "Óptimo" && !bajoMinimo);
    return matchSearch && matchFiltro;
  });

  const bajoMinimo = MOCK_PRODUCTOS.filter((p) => p.stock <= p.stockMinimo);
  const totalUnidades = MOCK_PRODUCTOS.reduce((s, p) => s + p.stock, 0);

  return (
    <DashboardLayout
      menuItems={MAIN_MENU}
      miNegocioItems={MI_NEGOCIO.map((item) => ({ ...item, active: item.to === "/stock" }))}
      onLogout={logout}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text)]">Stock</h1>
          <p className="text-sm text-[var(--text-muted)]">
            Inventario y niveles de stock
          </p>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Card className="text-center">
            <p className="text-xs uppercase text-[var(--text-muted)]">Productos</p>
            <p className="text-xl font-bold text-[var(--text)]">{MOCK_PRODUCTOS.length}</p>
          </Card>
          <Card className="text-center">
            <p className="text-xs uppercase text-[var(--text-muted)]">Unidades totales</p>
            <p className="text-xl font-bold text-[var(--text)]">{totalUnidades}</p>
          </Card>
          <Card className="text-center">
            <p className="text-xs uppercase text-[var(--text-muted)]">Bajo mínimo</p>
            <p className="text-xl font-bold text-red-600">{bajoMinimo.length}</p>
          </Card>
        </div>

        {bajoMinimo.length > 0 && (
          <Card className="border-l-4 border-l-amber-500 bg-amber-50 dark:bg-[var(--card-bg)]">
            <div className="flex items-start gap-3">
              <AlertTriangle className="size-5 shrink-0 text-amber-500" />
              <div>
                <p className="text-sm font-semibold text-amber-700 dark:text-amber-400">Productos con stock bajo</p>
                <div className="mt-2 space-y-1">
                  {bajoMinimo.map((p) => (
                    <p key={p.id} className="text-sm text-amber-600 dark:text-amber-300">
                      <span className="font-medium">{p.nombre}</span> — {p.stock}/{p.stockMinimo} unidades
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        )}

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-3 py-2 flex-1">
            <Search className="size-4 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Buscar producto..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border-0 bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="size-4 text-[var(--text-muted)]" />
            {(["Todos", "Bajo mínimo", "Óptimo"] as StockFilter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFiltro(f)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  filtro === f
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--accent-bg)] text-[var(--text-muted)] hover:bg-[var(--accent-border)]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map((prod) => {
            const bajo = prod.stock <= prod.stockMinimo;
            const pct = Math.min((prod.stock / (prod.stockMinimo * 3)) * 100, 100);
            return (
              <Card key={prod.id} className="flex items-center gap-4">
                <div className={`flex size-10 shrink-0 items-center justify-center rounded-full ${bajo ? "bg-red-100" : "bg-emerald-100"}`}>
                  {bajo ? (
                    <AlertTriangle className="size-5 text-red-500" />
                  ) : (
                    <CheckCircle className="size-5 text-emerald-500" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-[var(--text)]">{prod.nombre}</p>
                  <p className="text-xs text-[var(--text-muted)]">{prod.categoria}</p>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[var(--border)]">
                    <div
                      className={`h-full rounded-full transition-all ${bajo ? "bg-red-500" : pct < 50 ? "bg-amber-500" : "bg-emerald-500"}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className={`text-lg font-bold ${bajo ? "text-red-600" : "text-emerald-600"}`}>{prod.stock}</p>
                  <p className="text-xs text-[var(--text-muted)]">mín: {prod.stockMinimo}</p>
                </div>
              </Card>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <PackageCheck className="mx-auto size-10 text-[var(--text-muted)]" />
            <p className="mt-3 text-sm text-[var(--text-muted)]">No se encontraron productos</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default StockPage;
