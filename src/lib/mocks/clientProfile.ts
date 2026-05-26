export type ClientProfile = {
  id: string;
  nombre: string;
  dni: string;
  categoria: string;
  creadoEn: string;
  totalCompras: number;
  totalGastado: number;
  boletasPagadas: number;
  boletasPendientes: number;
  ultimaCompra: string;
  telefono: string;
  email: string;
};

export type BoletaRecord = {
  id: string;
  fecha: string;
  productos: string;
  total: number;
  estado: "pagada" | "pendiente" | "vencida";
};

export const MOCK_CLIENT_PROFILE: ClientProfile = {
  id: "CLI-001",
  nombre: "María García",
  dni: "72345678",
  categoria: "Frecuente",
  creadoEn: "10/01/2024",
  totalCompras: 18,
  totalGastado: 2450,
  boletasPagadas: 15,
  boletasPendientes: 3,
  ultimaCompra: "15/03/2025",
  telefono: "987 654 321",
  email: "maria.garcia@mail.com",
};

export const MOCK_BOLETAS: BoletaRecord[] = [
  { id: "B001-0042", fecha: "15/03/2025", productos: "Arroz x5, Aceite 1L, Leche x6", total: 120, estado: "pagada" },
  { id: "B001-0038", fecha: "08/03/2025", productos: "Detergente, Jabón, Cloro", total: 45, estado: "pagada" },
  { id: "B001-0033", fecha: "28/02/2025", productos: "Fideos x3, Atún x4, Galletas", total: 85, estado: "pendiente" },
  { id: "B001-0027", fecha: "15/02/2025", productos: "Pan x2, Mantequilla, Yogurt x6", total: 52, estado: "pagada" },
  { id: "B001-0019", fecha: "01/02/2025", productos: "Carne 1kg, Pollo 1kg, Cebolla x2", total: 98, estado: "vencida" },
  { id: "B001-0012", fecha: "18/01/2025", productos: "Azúcar 1kg, Café 250g, Té x20", total: 38, estado: "pagada" },
];
