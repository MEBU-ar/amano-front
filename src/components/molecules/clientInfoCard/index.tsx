import Card from "@/components/atoms/card";
import type { ClientProfile } from "@/lib/mocks/clientProfile";
import { cn } from "@/lib/utils";

type ClientInfoCardProps = {
  client: ClientProfile;
  className?: string;
};

const estadoColor: Record<string, string> = {
  Frecuente: "var(--accent)",
  Nuevo: "#22c55e",
  Ocasional: "var(--text-muted)",
};

function ClientInfoCard({ client, className }: ClientInfoCardProps) {
  const initial = client.nombre.charAt(0).toUpperCase();

  return (
    <Card className={cn("p-6", className)}>
      <div className="flex items-start gap-5">
        <div
          className="flex size-16 shrink-0 items-center justify-center rounded-full text-2xl font-bold text-white"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {initial}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-xl font-semibold text-[var(--text)]">{client.nombre}</h2>
            <span
              className="rounded-full px-2.5 py-0.5 text-xs font-semibold text-white"
              style={{ backgroundColor: estadoColor[client.categoria] ?? "var(--accent)" }}
            >
              {client.categoria}
            </span>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-[var(--text-muted)]">
            <p>
              <span className="font-medium text-[var(--text)]">DNI:</span> {client.dni}
            </p>
            <p>
              <span className="font-medium text-[var(--text)]">Teléfono:</span> {client.telefono}
            </p>
            <p>
              <span className="font-medium text-[var(--text)]">Email:</span> {client.email}
            </p>
            <p>
              <span className="font-medium text-[var(--text)]">Cliente desde:</span> {client.creadoEn}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default ClientInfoCard;
