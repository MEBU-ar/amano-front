import Card from "@/components/atoms/card";
import { cn } from "@/lib/utils";

export type SummaryItem = {
  label: string;
  value: string | number;
  accent?: boolean;
};

type ClientSummaryProps = {
  items: SummaryItem[];
  className?: string;
};

function ClientSummary({ items, className }: ClientSummaryProps) {
  return (
    <div className={cn("grid grid-cols-2 gap-4 sm:grid-cols-4", className)}>
      {items.map((item) => (
        <Card key={item.label} className="p-4 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
            {item.label}
          </p>
          <p
            className={cn(
              "mt-1 text-2xl font-bold",
              item.accent ? "text-[var(--accent)]" : "text-[var(--text)]"
            )}
          >
            {item.value}
          </p>
        </Card>
      ))}
    </div>
  );
}

export default ClientSummary;
