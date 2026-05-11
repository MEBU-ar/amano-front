export type Notificacion = {
  id: string;
  tipo: "boleta_vencida" | "stock_bajo" | "nuevo_cliente" | "pago_recibido";
  titulo: string;
  mensaje: string;
  fecha: string;
  leida: boolean;
};

export const MOCK_NOTIFICACIONES: Notificacion[] = [
  { id: "NOT-001", tipo: "boleta_vencida", titulo: "Boleta vencida", mensaje: "La boleta B001-0037 de Pedro Sánchez venció hace 5 días. Saldo: S/ 98.00", fecha: "12/03/2025", leida: false },
  { id: "NOT-002", tipo: "stock_bajo", titulo: "Stock bajo", mensaje: "Azúcar Rubia 1kg tiene solo 5 unidades (mínimo: 10). Reponga pronto.", fecha: "14/03/2025", leida: false },
  { id: "NOT-003", tipo: "stock_bajo", titulo: "Stock bajo", mensaje: "Detergente 500g tiene solo 3 unidades (mínimo: 8). Reponga pronto.", fecha: "14/03/2025", leida: false },
  { id: "NOT-004", tipo: "nuevo_cliente", titulo: "Nuevo cliente", mensaje: "Diego Vargas se registró como nuevo cliente. ¡Dale la bienvenida!", fecha: "16/03/2025", leida: false },
  { id: "NOT-005", tipo: "boleta_vencida", titulo: "Boleta vencida", mensaje: "La boleta B001-0035 de Rosa Mendoza venció hace 10 días. Saldo: S/ 28.00", fecha: "11/03/2025", leida: true },
  { id: "NOT-006", tipo: "pago_recibido", titulo: "Pago recibido", mensaje: "María García pagó la boleta B001-0042 por S/ 120.00", fecha: "15/03/2025", leida: true },
  { id: "NOT-007", tipo: "pago_recibido", titulo: "Pago recibido", mensaje: "Ana López pagó la boleta B001-0036 por S/ 72.00", fecha: "13/03/2025", leida: true },
  { id: "NOT-008", tipo: "nuevo_cliente", titulo: "Nuevo cliente", mensaje: "Carlos Ramírez se registró como nuevo cliente.", fecha: "14/03/2025", leida: true },
];
