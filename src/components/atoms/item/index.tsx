import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type ItemProps = {
  icon: LucideIcon;
  label: string;
  active?: boolean;
  onClick?: () => void;
  to?: string;
  className?: string;
};

function Item({ icon: Icon, label, active, onClick, to, className }: ItemProps) {
  const isActive = active || (to && window.location.pathname === to);
  
  const itemContent = (
    <div
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
        isActive
          ? "bg-[var(--accent-light)]/40 text-[var(--accent)]"
          : "text-[var(--text)] hover:bg-[var(--accent-bg)]",
        className
      )}
    >
      <Icon className="size-4 shrink-0 stroke-[1.5]" />
      <span>{label}</span>
    </div>
  );

  if (to) {
    return (
      <li>
        <Link to={to} onClick={onClick}>
          {itemContent}
        </Link>
      </li>
    );
  }

  return (
    <li>
      <button
        type="button"
        onClick={onClick}
      >
        {itemContent}
      </button>
    </li>
  );
}

export default Item;
