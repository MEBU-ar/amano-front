export type MetricaRendimiento = {
  label: string;
  valor: string;
  cambio: number;
};

export const MOCK_METRICAS_RENDIMIENTO: MetricaRendimiento[] = [
  { label: "Ventas totales", valor: "S/ 9,820", cambio: 12.5 },
  { label: "Clientes activos", valor: "8", cambio: 33.3 },
  { label: "Boletas cobradas", valor: "128", cambio: -5.2 },
  { label: "Ticket promedio", valor: "S/ 76.60", cambio: 8.1 },
];

export const MOCK_RENDIMIENTO_SEMANAL = [
  { dia: "Lun", ventas: 285 },
  { dia: "Mar", ventas: 312 },
  { dia: "Mié", ventas: 198 },
  { dia: "Jue", ventas: 345 },
  { dia: "Vie", ventas: 420 },
  { dia: "Sáb", ventas: 580 },
  { dia: "Dom", ventas: 150 },
];

export const MOCK_RENDIMIENTO_MENSUAL = [
  { mes: "Oct", ventas: 8200 },
  { mes: "Nov", ventas: 9100 },
  { mes: "Dic", ventas: 11500 },
  { mes: "Ene", ventas: 8900 },
  { mes: "Feb", ventas: 9400 },
  { mes: "Mar", ventas: 9820 },
];

export const MOCK_TOP_PRODUCTOS_RENDIMIENTO = [
  { nombre: "Leche Evaporada 400g", ventas: 128, ingresos: 537.6 },
  { nombre: "Pan Francés x6", ventas: 95, ingresos: 285 },
  { nombre: "Arroz Extra 1kg", ventas: 85, ingresos: 382.5 },
  { nombre: "Fideos Spaghetti 500g", ventas: 74, ingresos: 229.4 },
  { nombre: "Aceite Vegetal 1L", ventas: 62, ingresos: 551.8 },
];
