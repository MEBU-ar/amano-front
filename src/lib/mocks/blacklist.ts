export type ClienteBloqueado = {
  id: string;
  nombre: string;
  dni: string;
  motivo: string;
  fechaBloqueo: string;
  boletasPendientes: number;
  deudaTotal: number;
};

export const MOCK_LISTA_NEGRA: ClienteBloqueado[] = [
  { id: "BN-001", nombre: "Rosa Mendoza", dni: "78901234", motivo: "Boletas vencidas sin pago después de 30 días", fechaBloqueo: "10/03/2025", boletasPendientes: 2, deudaTotal: 156 },
  { id: "BN-002", nombre: "Félix Gutiérrez", dni: "80123456", motivo: "Devuelve productos en mal estado frecuentemente", fechaBloqueo: "28/02/2025", boletasPendientes: 1, deudaTotal: 89 },
  { id: "BN-003", nombre: "Gabriela Huamán", dni: "81234567", motivo: "Comportamiento agresivo con personal del negocio", fechaBloqueo: "15/01/2025", boletasPendientes: 0, deudaTotal: 0 },
];
