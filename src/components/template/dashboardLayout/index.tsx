import type { ReactNode } from "react";
import type { SectionItem } from "@/components/molecules/section";
import { Sidebar, Header } from "@/components/organism";
import { cn } from "@/lib/utils";

type DashboardLayoutProps = {
  menuItems: SectionItem[];
  miNegocioItems: SectionItem[];
  onLogout?: () => void;
  children: ReactNode;
  className?: string;
};

function DashboardLayout({
  menuItems,
  miNegocioItems,
  onLogout,
  children,
  className,
}: DashboardLayoutProps) {
  return (
    <div className="flex min-h-dvh bg-[var(--bg-page)]">
      <Sidebar menuItems={menuItems} miNegocioItems={miNegocioItems} />
      <div className="flex flex-1 flex-col min-w-0">
        <Header onLogout={onLogout} />
        <div className={cn("flex-1 overflow-auto bg-[var(--bg-page)] p-6", className)}>
          {children}
        </div>
      </div>
    </div>
  );
}

export default DashboardLayout;
