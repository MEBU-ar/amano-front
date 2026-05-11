import type { SectionItem } from "@/components/molecules/section";
import type { MetricItem } from "@/components/organism/cards/metricCards";
import type { RecentClient } from "@/components/organism/cards/dashboardCard/recentClients";
import type { TopProductData } from "@/components/organism/cards/dashboardCard/topProduct";
import { Metrics } from "@/components/organism";
import { RecentClients, TopProduct } from "@/components/organism/cards/dashboardCard";
import DashboardLayout from "@/components/template/dashboardLayout";

export type DashboardTemplateProps = {
  menuItems: SectionItem[];
  miNegocioItems: SectionItem[];
  onLogout?: () => void;
  chartData?: number[];
  chartTitle?: string;
  metrics?: MetricItem[];
  recentClients?: RecentClient[];
  topProduct?: TopProductData;
};

function DashboardTemplate({
  menuItems,
  miNegocioItems,
  onLogout,
  chartData,
  chartTitle,
  metrics,
  recentClients = [],
  topProduct,
}: DashboardTemplateProps) {
  return (
    <DashboardLayout menuItems={menuItems} miNegocioItems={miNegocioItems} onLogout={onLogout}>
      <Metrics chartData={chartData} chartTitle={chartTitle} metrics={metrics} />
      <main className="mt-6 flex flex-col gap-6 lg:flex-row">
        <RecentClients clients={recentClients} />
        {topProduct && <TopProduct product={topProduct} />}
      </main>
    </DashboardLayout>
  );
}

export default DashboardTemplate;
