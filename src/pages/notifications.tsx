import { useState } from "react";
import {
  Bell,
  FileWarning,
  PackageX,
  UserPlus,
  CheckCircle,
  Trash2,
} from "lucide-react";
import DashboardLayout from "@/components/template/dashboardLayout";
import { MAIN_MENU, MI_NEGOCIO } from "@/lib/menus";
import { logout } from "@/lib/auth";
import Card from "@/components/atoms/card";
import { BtnIcon } from "@/components/atoms/btn";
import { MOCK_NOTIFICACIONES, type Notificacion } from "@/lib/mocks/notifications";

const TIPO_CONFIG: Record<Notificacion["tipo"], { icon: typeof Bell; color: string; bg: string }> = {
  boleta_vencida: { icon: FileWarning, color: "text-red-500", bg: "bg-red-100" },
  stock_bajo: { icon: PackageX, color: "text-amber-500", bg: "bg-amber-100" },
  nuevo_cliente: { icon: UserPlus, color: "text-emerald-500", bg: "bg-emerald-100" },
  pago_recibido: { icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-100" },
};

function NotificationsPage() {
  const [notificaciones, setNotificaciones] = useState(MOCK_NOTIFICACIONES);
  const [filtro, setFiltro] = useState<"todas" | "no_leidas">("todas");

  const filtered = filtro === "todas" ? notificaciones : notificaciones.filter((n) => !n.leida);
  const noLeidas = notificaciones.filter((n) => !n.leida).length;

  function marcarLeida(id: string) {
    setNotificaciones((prev) =>
      prev.map((n) => (n.id === id ? { ...n, leida: true } : n))
    );
  }

  function marcarTodasLeidas() {
    setNotificaciones((prev) => prev.map((n) => ({ ...n, leida: true })));
  }

  function eliminar(id: string) {
    setNotificaciones((prev) => prev.filter((n) => n.id !== id));
  }

  return (
    <DashboardLayout
      menuItems={MAIN_MENU.map((item) => ({ ...item, active: item.to === "/notificaciones" }))}
      miNegocioItems={MI_NEGOCIO}
      onLogout={logout}
    >
      <div className="space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--text)]">Notificaciones</h1>
            <p className="text-sm text-[var(--text-muted)]">
              {noLeidas > 0 ? `${noLeidas} sin leer` : "Todo al día"}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex gap-1 rounded-lg bg-[var(--accent-bg)] p-0.5">
              {(["todas", "no_leidas"] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFiltro(f)}
                  className={`rounded-md px-3 py-1 text-xs font-medium transition-colors ${
                    filtro === f
                      ? "bg-[var(--accent)] text-white"
                      : "text-[var(--text-muted)] hover:text-[var(--text)]"
                  }`}
                >
                  {f === "todas" ? "Todas" : `Sin leer (${noLeidas})`}
                </button>
              ))}
            </div>
            {noLeidas > 0 && (
              <button
                onClick={marcarTodasLeidas}
                className="text-xs font-medium text-[var(--accent)] hover:underline"
              >
                Marcar todas leídas
              </button>
            )}
          </div>
        </div>

        <div className="space-y-3">
          {filtered.map((notif) => {
            const config = TIPO_CONFIG[notif.tipo];
            const Icon = config.icon;
            return (
              <Card
                key={notif.id}
                className={`flex items-start gap-4 transition-all ${!notif.leida ? "border-l-4 border-l-[var(--accent)]" : "opacity-70"}`}
              >
                <div className={`flex size-10 shrink-0 items-center justify-center rounded-full ${config.bg}`}>
                  <Icon className={`size-5 ${config.color}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-semibold text-[var(--text)]">{notif.titulo}</p>
                    {!notif.leida && (
                      <span className="size-2 shrink-0 rounded-full bg-[var(--accent)]" />
                    )}
                  </div>
                  <p className="mt-0.5 text-sm text-[var(--text-muted)]">{notif.mensaje}</p>
                  <p className="mt-1 text-xs text-[var(--text-muted)]">{notif.fecha}</p>
                </div>
                <div className="flex shrink-0 items-center gap-1">
                  {!notif.leida && (
                    <BtnIcon
                      size="sm"
                      variant="ghost"
                      rounded="lg"
                      onClick={() => marcarLeida(notif.id)}
                      aria-label="Marcar como leída"
                      className="!border-0 !bg-transparent text-[var(--text-muted)] hover:!bg-transparent hover:text-[var(--accent)]"
                    >
                      <CheckCircle className="size-4" />
                    </BtnIcon>
                  )}
                  <BtnIcon
                    size="sm"
                    variant="ghost"
                    rounded="lg"
                    onClick={() => eliminar(notif.id)}
                    aria-label="Eliminar"
                    className="!border-0 !bg-transparent text-[var(--text-muted)] hover:!bg-transparent hover:text-red-500"
                  >
                    <Trash2 className="size-4" />
                  </BtnIcon>
                </div>
              </Card>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center">
            <Bell className="mx-auto size-10 text-[var(--text-muted)]" />
            <p className="mt-3 text-sm text-[var(--text-muted)]">No hay notificaciones</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
}

export default NotificationsPage;
