export type Boleta = {
  id: string;
  clienteNombre: string;
  clienteId: string;
  fecha: string;
  productos: string;
  total: number;
  saldoPendiente: number;
  estado: "pagada" | "pendiente" | "vencida";
};

export const MOCK_BOLETAS: Boleta[] = [
  { id: "B001-0042", clienteNombre: "María García", clienteId: "CLI-001", fecha: "15/03/2025", productos: "Arroz x5, Aceite 1L, Leche x6", total: 120, saldoPendiente: 0, estado: "pagada" },
  { id: "B001-0041", clienteNombre: "Juan Pérez", clienteId: "CLI-002", fecha: "14/03/2025", productos: "Fideos x3, Atún x4", total: 65, saldoPendiente: 65, estado: "pendiente" },
  { id: "B001-0040", clienteNombre: "Ana López", clienteId: "CLI-003", fecha: "13/03/2025", productos: "Detergente, Jabón, Cloro", total: 45, saldoPendiente: 0, estado: "pagada" },
  { id: "B001-0039", clienteNombre: "Carlos Ramírez", clienteId: "CLI-004", fecha: "12/03/2025", productos: "Pan x2, Mantequilla, Yogurt x6", total: 52, saldoPendiente: 52, estado: "pendiente" },
  { id: "B001-0038", clienteNombre: "María García", clienteId: "CLI-001", fecha: "08/03/2025", productos: "Azúcar 1kg, Café 250g", total: 38, saldoPendiente: 0, estado: "pagada" },
  { id: "B001-0037", clienteNombre: "Pedro Sánchez", clienteId: "CLI-006", fecha: "07/03/2025", productos: "Carne 2kg, Pollo 1kg", total: 98, saldoPendiente: 98, estado: "vencida" },
  { id: "B001-0036", clienteNombre: "Lucía Torres", clienteId: "CLI-005", fecha: "05/03/2025", productos: "Galletas, Jugos x4, Helado", total: 72, saldoPendiente: 0, estado: "pagada" },
  { id: "B001-0035", clienteNombre: "Rosa Mendoza", clienteId: "CLI-007", fecha: "01/03/2025", productos: "Cebolla x3, Tomate x2, Ajo", total: 28, saldoPendiente: 28, estado: "vencida" },
  { id: "B001-0034", clienteNombre: "Ana López", clienteId: "CLI-003", fecha: "28/02/2025", productos: "Fideos x3, Atún x4, Galletas", total: 85, saldoPendiente: 0, estado: "pagada" },
  { id: "B001-0033", clienteNombre: "Diego Vargas", clienteId: "CLI-008", fecha: "16/03/2025", productos: "Agua x6, Gaseosa x2", total: 32, saldoPendiente: 0, estado: "pagada" },
];
