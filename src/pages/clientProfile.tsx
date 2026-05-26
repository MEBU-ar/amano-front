import ClientProfileTemplate from "@/components/template/clientProfile";
import { MAIN_MENU, MI_NEGOCIO } from "@/lib/menus";
import { MOCK_CLIENT_PROFILE, MOCK_BOLETAS } from "@/lib/mocks/clientProfile";
import { logout } from "@/lib/auth";

const SUMMARY_ITEMS = [
  { label: "Total compras", value: MOCK_CLIENT_PROFILE.totalCompras },
  { label: "Total gastado", value: `S/ ${MOCK_CLIENT_PROFILE.totalGastado.toLocaleString("es-PE")}`, accent: true },
  { label: "Boletas pagadas", value: MOCK_CLIENT_PROFILE.boletasPagadas },
  { label: "Boletas pendientes", value: MOCK_CLIENT_PROFILE.boletasPendientes },
];

export default function ClientProfilePage() {
  return (
    <ClientProfileTemplate
      menuItems={MAIN_MENU.map((item) => ({
        ...item,
        active: item.to === "/clientes",
      }))}
      miNegocioItems={MI_NEGOCIO}
      onLogout={logout}
      client={MOCK_CLIENT_PROFILE}
      summaryItems={SUMMARY_ITEMS}
      boletas={MOCK_BOLETAS}
    />
  );
}
