import type { SectionItem } from "@/components/molecules/section";
import type { ClientProfile, BoletaRecord } from "@/lib/mocks/clientProfile";
import { ClientInfoCard, ClientSummary, BoletasTable } from "@/components/organism/clientProfile";
import DashboardLayout from "@/components/template/dashboardLayout";

type ClientProfileSummaryItem = {
  label: string;
  value: string | number;
  accent?: boolean;
};

export type ClientProfileTemplateProps = {
  menuItems: SectionItem[];
  miNegocioItems: SectionItem[];
  onLogout?: () => void;
  client: ClientProfile;
  summaryItems: ClientProfileSummaryItem[];
  boletas: BoletaRecord[];
};

function ClientProfileTemplate({
  menuItems,
  miNegocioItems,
  onLogout,
  client,
  summaryItems,
  boletas,
}: ClientProfileTemplateProps) {
  return (
    <DashboardLayout menuItems={menuItems} miNegocioItems={miNegocioItems} onLogout={onLogout}>
      <ClientInfoCard client={client} />
      <ClientSummary items={summaryItems} className="mt-6" />
      <BoletasTable boletas={boletas} className="mt-6" />
    </DashboardLayout>
  );
}

export default ClientProfileTemplate;
