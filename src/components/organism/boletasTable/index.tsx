import Card from "@/components/atoms/card";
import type { BoletaRecord } from "@/lib/mocks/clientProfile";
import { cn } from "@/lib/utils";

type BoletasTableProps = {
  boletas: BoletaRecord[];
  className?: string;
};

const estadoBadge: Record<string, string> = {
  pagada: "bg-green-100 text-green-700",
  pendiente: "bg-yellow-100 text-yellow-700",
  vencida: "bg-red-100 text-red-700",
};

function BoletasTable({ boletas, className }: BoletasTableProps) {
  return (
    <Card className={cn("p-6", className)}>
      <h3 className="mb-4 text-sm font-semibold text-[var(--text)]">Historial de boletas</h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-[var(--border)]">
              <th className="py-2 pr-4 text-left text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                Boleta
              </th>
              <th className="py-2 pr-4 text-left text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                Fecha
              </th>
              <th className="py-2 pr-4 text-left text-xs font-medium uppercase tracking-wider text-[var(--text-muted)] hidden md:table-cell">
                Productos
              </th>
              <th className="py-2 pr-4 text-right text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                Total
              </th>
              <th className="py-2 text-right text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                Estado
              </th>
            </tr>
          </thead>
          <tbody>
            {boletas.map((b) => (
              <tr key={b.id} className="border-b border-[var(--border)] last:border-0">
                <td className="py-3 pr-4 font-medium text-[var(--text)]">{b.id}</td>
                <td className="py-3 pr-4 text-[var(--text-muted)]">{b.fecha}</td>
                <td className="py-3 pr-4 text-[var(--text-muted)] hidden md:table-cell truncate max-w-[200px]">
                  {b.productos}
                </td>
                <td className="py-3 pr-4 text-right font-semibold text-[var(--text)]">
                  S/ {b.total.toLocaleString("es-PE")}
                </td>
                <td className="py-3 text-right">
                  <span className={cn("inline-block rounded-full px-2.5 py-0.5 text-xs font-medium", estadoBadge[b.estado])}>
                    {b.estado.charAt(0).toUpperCase() + b.estado.slice(1)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

export default BoletasTable;
