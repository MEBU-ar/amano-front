import { DashboardTemplate } from "@/components/template";
import { MAIN_MENU, MI_NEGOCIO } from "@/lib/menus";
import { MOCK_CHART_DATA, MOCK_METRICS } from "@/lib/mocks/metrics";
import { MOCK_RECENT_CLIENTS, MOCK_TOP_PRODUCT } from "@/lib/mocks/dashboard";
import { logout } from "@/lib/auth";

export default function DashboardPage() {
  return (
    <DashboardTemplate
      menuItems={MAIN_MENU.map((item) => ({
        ...item,
        active: item.to === "/dashboard",
      }))}
      miNegocioItems={MI_NEGOCIO}
      onLogout={logout}
      chartData={MOCK_CHART_DATA}
      chartTitle="Ventas del mes"
      metrics={MOCK_METRICS}
      recentClients={MOCK_RECENT_CLIENTS}
      topProduct={MOCK_TOP_PRODUCT}
    />
  );
}
