import type { LucideIcon } from "lucide-react";
import Item from "@/components/atoms/item";

export type SectionItem = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  to?: string;
};

type SectionProps = {
  title: string;
  items: SectionItem[];
  onItemClick?: (item: SectionItem) => void;
};

function Section({ title, items, onItemClick }: SectionProps) {
  return (
    <nav>
      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
        {title}
      </p>
      <ul className="space-y-0.5">
        {items.map((item) => (
          <Item
            key={item.label}
            icon={item.icon}
            label={item.label}
            active={item.active}
            to={item.to}
            onClick={() => onItemClick?.(item)}
          />
        ))}
      </ul>
    </nav>
  );
}

export default Section;
