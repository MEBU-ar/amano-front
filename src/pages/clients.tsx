import { useState } from "react";
import { Link } from "react-router-dom";
import { Users, Search, Filter } from "lucide-react";
import DashboardLayout from "@/components/template/dashboardLayout";
import { MAIN_MENU, MI_NEGOCIO } from "@/lib/menus";
import { logout } from "@/lib/auth";
import Card from "@/components/atoms/card";
import { BtnPrimary } from "@/components/atoms/btn";
import { MOCK_CLIENTES, type Cliente } from "@/lib/mocks/clients";

type CategoriaFilter = "Todos" | Cliente["categoria"];

const CATEGORIA_COLORS: Record<string, string> = {
  Frecuente: "bg-[var(--accent)] text-white",
  Nuevo: "bg-emerald-600 text-white",
  Ocasional: "bg-[var(--text-muted)] text-white",
};

function ClientsPage() {
  const [search, setSearch] = useState("");
  const [filtro, setFiltro] = useState<CategoriaFilter>("Todos");

  const filtered = MOCK_CLIENTES.filter((c) => {
    const matchSearch =
      c.nombre.toLowerCase().includes(search.toLowerCase()) ||
      c.dni.includes(search);
    const matchFiltro = filtro === "Todos" || c.categoria === filtro;
    return matchSearch && matchFiltro;
  });

  return (
    <DashboardLayout
      menuItems={MAIN_MENU.map((item) => ({ ...item, active: item.to === "/clientes" }))}
      miNegocioItems={MI_NEGOCIO}
      onLogout={logout}
    >
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--text)]">Clientes</h1>
            <p className="text-sm text-[var(--text-muted)]">
              {MOCK_CLIENTES.length} clientes registrados
            </p>
          </div>
          <BtnPrimary size="sm" fullWidth={false}>
            <Users className="mr-2 size-4" />
            Nuevo cliente
          </BtnPrimary>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 rounded-lg border border-[var(--border)] bg-[var(--card-bg)] px-3 py-2 flex-1">
            <Search className="size-4 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Buscar por nombre o DNI..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border-0 bg-transparent text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none"
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="size-4 text-[var(--text-muted)]" />
            {(["Todos", "Frecuente", "Nuevo", "Ocasional"] as CategoriaFilter[]).map((cat) => (
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

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((cliente) => (
            <Link key={cliente.id} to={`/clientes/${cliente.id}`} className="no-underline">
              <Card className="flex cursor-pointer flex-col gap-3 transition-shadow hover:shadow-[var(--shadow)]">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-white">
                      {cliente.nombre[0]}
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-semibold text-[var(--text)]">{cliente.nombre}</p>
                      <p className="text-xs text-[var(--text-muted)]">DNI: {cliente.dni}</p>
                    </div>
                  </div>
                  <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${CATEGORIA_COLORS[cliente.categoria]}`}>
                    {cliente.categoria}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 border-t border-[var(--border)] pt-3">
                  <div>
                    <p className="text-[10px] uppercase text-[var(--text-muted)]">Gastado</p>
                    <p className="text-sm font-semibold text-[var(--accent)]">
                      S/ {cliente.totalGastado.toLocaleString("es-PE")}
                    </p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase text-[var(--text-muted)]">Compras</p>
                    <p className="text-sm font-semibold text-[var(--text)]">{cliente.totalCompras}</p>
                  </div>
                </div>
                <p className="text-xs text-[var(--text-muted)]">
                  Última compra: {cliente.ultimaCompra}
                </p>
              </Card>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <Users className="mx-auto size-10 text-[var(--text-muted)]" />
            <p className="mt-3 text-sm text-[var(--text-muted)]">No se encontraron clientes</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default ClientsPage;
