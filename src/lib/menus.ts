import {
  Home,
  TrendingUp,
  FileText,
  Users,
  Bell,
  Ban,
  Package,
  ShoppingCart,
  PackageCheck,
  History,
} from "lucide-react";
import type { SectionItem } from "@/components/molecules/section";

export const MAIN_MENU: SectionItem[] = [
  { label: "Dashboard", icon: Home, to: "/dashboard" },
  { label: "Rendimiento", icon: TrendingUp, to: "/rendimiento" },
  { label: "Boletas", icon: FileText, to: "/boletas" },
  { label: "Clientes", icon: Users, to: "/clientes" },
  { label: "Notificaciones", icon: Bell, to: "/notificaciones" },
  { label: "Lista negra", icon: Ban, to: "/lista-negra" },
];

export const MI_NEGOCIO: SectionItem[] = [
  { label: "Productos", icon: Package, to: "/productos" },
  { label: "Ventas", icon: ShoppingCart, to: "/ventas" },
  { label: "Stock", icon: PackageCheck, to: "/stock" },
  { label: "Historial", icon: History, to: "/historial" },
];
