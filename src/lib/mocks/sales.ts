export type Venta = {
  id: string;
  fecha: string;
  clienteNombre: string;
  clienteId: string;
  productos: string;
  total: number;
  metodoPago: "Efectivo" | "Crédito";
};

export const MOCK_VENTAS: Venta[] = [
  { id: "V-0045", fecha: "16/03/2025 14:32", clienteNombre: "María García", clienteId: "CLI-001", productos: "Arroz x2, Leche x3", total: 21.6, metodoPago: "Efectivo" },
  { id: "V-0044", fecha: "16/03/2025 12:10", clienteNombre: "Diego Vargas", clienteId: "CLI-008", productos: "Agua x6, Gaseosa x2", total: 32, metodoPago: "Efectivo" },
  { id: "V-0043", fecha: "15/03/2025 18:45", clienteNombre: "Ana López", clienteId: "CLI-003", productos: "Fideos x3, Atún x4", total: 34.9, metodoPago: "Crédito" },
  { id: "V-0042", fecha: "15/03/2025 10:20", clienteNombre: "María García", clienteId: "CLI-001", productos: "Arroz x5, Aceite 1L, Leche x6", total: 120, metodoPago: "Crédito" },
  { id: "V-0041", fecha: "14/03/2025 16:55", clienteNombre: "Juan Pérez", clienteId: "CLI-002", productos: "Pollo 1kg, Pan x6", total: 14.9, metodoPago: "Efectivo" },
  { id: "V-0040", fecha: "14/03/2025 09:30", clienteNombre: "Carlos Ramírez", clienteId: "CLI-004", productos: "Pan x2, Mantequilla, Yogurt x6", total: 52, metodoPago: "Crédito" },
  { id: "V-0039", fecha: "13/03/2025 15:00", clienteNombre: "Lucía Torres", clienteId: "CLI-005", productos: "Galletas, Jugos x4", total: 42, metodoPago: "Efectivo" },
  { id: "V-0038", fecha: "12/03/2025 11:25", clienteNombre: "Pedro Sánchez", clienteId: "CLI-006", productos: "Carne 2kg, Pollo 1kg, Cebolla x2", total: 98, metodoPago: "Crédito" },
];
