export type RegistroHistorial = {
  id: string;
  fecha: string;
  tipo: "venta" | "pago" | "bloqueo" | "registro";
  descripcion: string;
  clienteNombre: string;
  monto?: number;
};

export const MOCK_HISTORIAL: RegistroHistorial[] = [
  { id: "H-001", fecha: "16/03/2025 14:32", tipo: "venta", descripcion: "Venta registrada — Arroz x2, Leche x3", clienteNombre: "María García", monto: 21.6 },
  { id: "H-002", fecha: "16/03/2025 12:10", tipo: "venta", descripcion: "Venta registrada — Agua x6, Gaseosa x2", clienteNombre: "Diego Vargas", monto: 32 },
  { id: "H-003", fecha: "15/03/2025 18:00", tipo: "pago", descripcion: "Pago de boleta B001-0042 recibido", clienteNombre: "María García", monto: 120 },
  { id: "H-004", fecha: "15/03/2025 10:20", tipo: "venta", descripcion: "Venta a crédito — Arroz x5, Aceite 1L, Leche x6", clienteNombre: "María García", monto: 120 },
  { id: "H-005", fecha: "14/03/2025 16:00", tipo: "registro", descripcion: "Nuevo cliente registrado", clienteNombre: "Carlos Ramírez" },
  { id: "H-006", fecha: "14/03/2025 09:30", tipo: "venta", descripcion: "Venta a crédito — Pan x2, Mantequilla, Yogurt x6", clienteNombre: "Carlos Ramírez", monto: 52 },
  { id: "H-007", fecha: "13/03/2025 15:00", tipo: "venta", descripcion: "Venta registrada — Galletas, Jugos x4", clienteNombre: "Lucía Torres", monto: 42 },
  { id: "H-008", fecha: "12/03/2025 11:25", tipo: "venta", descripcion: "Venta a crédito — Carne 2kg, Pollo 1kg, Cebolla x2", clienteNombre: "Pedro Sánchez", monto: 98 },
  { id: "H-009", fecha: "11/03/2025 09:00", tipo: "pago", descripcion: "Pago de boleta B001-0036 recibido", clienteNombre: "Ana López", monto: 72 },
  { id: "H-010", fecha: "10/03/2025 10:00", tipo: "bloqueo", descripcion: "Cliente bloqueado — Boletas vencidas sin pago", clienteNombre: "Rosa Mendoza" },
  { id: "H-011", fecha: "08/03/2025 14:00", tipo: "pago", descripcion: "Pago de boleta B001-0038 recibido", clienteNombre: "María García", monto: 38 },
  { id: "H-012", fecha: "28/02/2025 09:00", tipo: "bloqueo", descripcion: "Cliente bloqueado — Devoluciones frecuentes", clienteNombre: "Félix Gutiérrez" },
];
