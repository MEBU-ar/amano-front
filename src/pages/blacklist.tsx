import { useState } from "react";
import { Ban, AlertTriangle, Unlock } from "lucide-react";
import DashboardLayout from "@/components/template/dashboardLayout";
import { MAIN_MENU, MI_NEGOCIO } from "@/lib/menus";
import { logout } from "@/lib/auth";
import Card from "@/components/atoms/card";
import { BtnIcon } from "@/components/atoms/btn";
import { MOCK_LISTA_NEGRA } from "@/lib/mocks/blacklist";

function BlacklistPage() {
  const [bloqueados, setBloqueados] = useState(MOCK_LISTA_NEGRA);

  function desbloquear(id: string) {
    setBloqueados((prev) => prev.filter((c) => c.id !== id));
  }

  const deudaTotal = bloqueados.reduce((sum, c) => sum + c.deudaTotal, 0);

  return (
    <DashboardLayout
      menuItems={MAIN_MENU.map((item) => ({ ...item, active: item.to === "/lista-negra" }))}
      miNegocioItems={MI_NEGOCIO}
      onLogout={logout}
    >
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--text)]">Lista Negra</h1>
          <p className="text-sm text-[var(--text-muted)]">
            {bloqueados.length} clientes bloqueados · Deuda total: S/ {deudaTotal.toLocaleString("es-PE")}
          </p>
        </div>

        {bloqueados.length > 0 && (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Card className="text-center">
              <p className="text-xs uppercase text-[var(--text-muted)]">Bloqueados</p>
              <p className="text-xl font-bold text-red-600">{bloqueados.length}</p>
            </Card>
            <Card className="text-center">
              <p className="text-xs uppercase text-[var(--text-muted)]">Con deuda</p>
              <p className="text-xl font-bold text-amber-600">{bloqueados.filter((c) => c.deudaTotal > 0).length}</p>
            </Card>
            <Card className="text-center">
              <p className="text-xs uppercase text-[var(--text-muted)]">Deuda total</p>
              <p className="text-xl font-bold text-[var(--accent)]">S/ {deudaTotal.toLocaleString("es-PE")}</p>
            </Card>
          </div>
        )}

        <div className="space-y-3">
          {bloqueados.map((cliente) => (
            <Card key={cliente.id} className="border-l-4 border-l-red-500">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100">
                    <Ban className="size-5 text-red-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text)]">{cliente.nombre}</p>
                    <p className="text-sm text-[var(--text-muted)]">DNI: {cliente.dni}</p>
                    <div className="mt-2 flex items-center gap-2">
                      <AlertTriangle className="size-4 text-amber-500" />
                      <p className="text-sm text-[var(--text-muted)]">{cliente.motivo}</p>
                    </div>
                    <div className="mt-2 grid grid-cols-3 gap-4 text-xs">
                      <div>
                        <p className="uppercase text-[var(--text-muted)]">Bloqueado</p>
                        <p className="font-medium text-[var(--text)]">{cliente.fechaBloqueo}</p>
                      </div>
                      <div>
                        <p className="uppercase text-[var(--text-muted)]">Boletas</p>
                        <p className="font-medium text-[var(--text)]">{cliente.boletasPendientes}</p>
                      </div>
                      <div>
                        <p className="uppercase text-[var(--text-muted)]">Deuda</p>
                        <p className="font-medium text-[var(--accent)]">
                          {cliente.deudaTotal > 0 ? `S/ ${cliente.deudaTotal.toLocaleString("es-PE")}` : "—"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <BtnIcon
                  size="sm"
                  variant="ghost"
                  rounded="lg"
                  onClick={() => desbloquear(cliente.id)}
                  aria-label="Desbloquear"
                  className="shrink-0 !border-0 !bg-transparent text-[var(--text-muted)] hover:!bg-transparent hover:text-emerald-500"
                >
                  <Unlock className="size-4" />
                </BtnIcon>
              </div>
            </Card>
          ))}
        </div>

        {bloqueados.length === 0 && (
          <div className="py-12 text-center">
            <Ban className="mx-auto size-10 text-[var(--text-muted)]" />
            <p className="mt-3 text-sm text-[var(--text-muted)]">No hay clientes bloqueados</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default BlacklistPage;
