import { useState } from "react";
import { Search, Filter, Plus, AlertTriangle } from "lucide-react";
import DashboardLayout from "@/components/template/dashboardLayout";
import { MAIN_MENU, MI_NEGOCIO } from "@/lib/menus";
import { logout } from "@/lib/auth";
import Card from "@/components/atoms/card";
import { BtnPrimary } from "@/components/atoms/btn";
import { MOCK_PRODUCTOS } from "@/lib/mocks/products";

type CatFilter = "Todos" | string;

function ProductsPage() {
  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState<CatFilter>("Todos");

  const categorias = ["Todos", ...Array.from(new Set(MOCK_PRODUCTOS.map((p) => p.categoria)))];

  const filtered = MOCK_PRODUCTOS.filter((p) => {
    const matchSearch = p.nombre.toLowerCase().includes(search.toLowerCase());
    const matchFiltro = filtro === "Todos" || p.categoria === filtro;
    return matchSearch && matchFiltro;
  });

  const stockBajo = MOCK_PRODUCTOS.filter((p) => p.stock <= p.stockMinimo).length;

  return (
    <DashboardLayout
      menuItems={MAIN_MENU}
      miNegocioItems={MI_NEGOCIO.map((item) => ({ ...item, active: item.to === "/productos" }))}
      onLogout={logout}
    >
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--text)]">Productos</h1>
            <p className="text-sm text-[var(--text-muted)]">
              {MOCK_PRODUCTOS.length} productos · {stockBajo} con stock bajo
            </p>
          </div>
          <BtnPrimary size="sm" fullWidth={false}>
            <Plus className="mr-2 size-4" />
            Nuevo producto
          </BtnPrimary>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <Card className="text-center">
            <p className="text-xs uppercase text-[var(--text-muted)]">Total</p>
            <p className="text-xl font-bold text-[var(--text)]">{MOCK_PRODUCTOS.length}</p>
          </Card>
          <Card className="text-center">
            <p className="text-xs uppercase text-[var(--text-muted)]">Stock bajo</p>
            <p className="text-xl font-bold text-red-600">{stockBajo}</p>
          </Card>
          <Card className="text-center">
            <p className="text-xs uppercase text-[var(--text-muted)]">Ventas mes</p>
            <p className="text-xl font-bold text-[var(--accent)]">{MOCK_PRODUCTOS.reduce((s, p) => s + p.ventasMes, 0)}</p>
          </Card>
        </div>

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
            {categorias.map((cat) => (
              <button
                key={cat}
                onClick={() => setFiltro(cat)}
                className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  filtro === cat
                    ? "bg-[var(--accent)] text-white"
                    : "bg-[var(--accent-bg)] text-[var(--text-muted)] hover:bg-[var(--accent-border)]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <Card className="overflow-x-auto p-0">
          <table className="w-full min-w-[700px] text-sm">
            <thead>
              <tr className="border-b border-[var(--border)] text-left text-xs uppercase text-[var(--text-muted)]">
                <th className="px-4 py-3 font-medium">Producto</th>
                <th className="px-4 py-3 font-medium">Categoría</th>
                <th className="px-4 py-3 font-medium text-right">Precio</th>
                <th className="px-4 py-3 font-medium text-right">Stock</th>
                <th className="px-4 py-3 font-medium text-right">Mín.</th>
                <th className="px-4 py-3 font-medium text-right">Ventas</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((prod) => {
                const bajoStock = prod.stock <= prod.stockMinimo;
                return (
                  <tr key={prod.id} className="border-b border-[var(--border)] transition-colors hover:bg-[var(--accent-bg)]">
                    <td className="px-4 py-3 font-semibold text-[var(--text)]">
                      <div className="flex items-center gap-2">
                        {bajoStock && <AlertTriangle className="size-4 shrink-0 text-amber-500" />}
                        {prod.nombre}
                      </div>
                    </td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-[var(--accent-bg)] px-2 py-0.5 text-xs text-[var(--text-muted)]">
                        {prod.categoria}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-medium text-[var(--text)]">
                      S/ {prod.precio.toFixed(2)}
                    </td>
                    <td className={`px-4 py-3 text-right font-semibold ${bajoStock ? "text-red-600" : "text-emerald-600"}`}>
                      {prod.stock}
                    </td>
                    <td className="px-4 py-3 text-right text-[var(--text-muted)]">{prod.stockMinimo}</td>
                    <td className="px-4 py-3 text-right font-medium text-[var(--accent)]">{prod.ventasMes}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </DashboardLayout>
  );
}

export default ProductsPage;
