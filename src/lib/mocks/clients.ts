export type Cliente = {
  id: string;
  nombre: string;
  dni: string;
  telefono: string;
  email: string;
  categoria: "Frecuente" | "Nuevo" | "Ocasional";
  totalGastado: number;
  totalCompras: number;
  ultimaCompra: string;
};

export const MOCK_CLIENTES: Cliente[] = [
  { id: "CLI-001", nombre: "María García", dni: "72345678", telefono: "987 654 321", email: "maria.garcia@mail.com", categoria: "Frecuente", totalGastado: 2450, totalCompras: 18, ultimaCompra: "15/03/2025" },
  { id: "CLI-002", nombre: "Juan Pérez", dni: "73456789", telefono: "987 123 456", email: "juan.perez@mail.com", categoria: "Frecuente", totalGastado: 1820, totalCompras: 12, ultimaCompra: "12/03/2025" },
  { id: "CLI-003", nombre: "Ana López", dni: "74567890", telefono: "976 543 210", email: "ana.lopez@mail.com", categoria: "Frecuente", totalGastado: 3100, totalCompras: 24, ultimaCompra: "10/03/2025" },
  { id: "CLI-004", nombre: "Carlos Ramírez", dni: "75678901", telefono: "965 432 109", email: "carlos.r@mail.com", categoria: "Nuevo", totalGastado: 320, totalCompras: 3, ultimaCompra: "14/03/2025" },
  { id: "CLI-005", nombre: "Lucía Torres", dni: "76789012", telefono: "954 321 098", email: "lucia.t@mail.com", categoria: "Ocasional", totalGastado: 890, totalCompras: 6, ultimaCompra: "05/03/2025" },
  { id: "CLI-006", nombre: "Pedro Sánchez", dni: "77890123", telefono: "943 210 987", email: "pedro.s@mail.com", categoria: "Frecuente", totalGastado: 4200, totalCompras: 30, ultimaCompra: "16/03/2025" },
  { id: "CLI-007", nombre: "Rosa Mendoza", dni: "78901234", telefono: "932 109 876", email: "rosa.m@mail.com", categoria: "Ocasional", totalGastado: 560, totalCompras: 4, ultimaCompra: "01/03/2025" },
  { id: "CLI-008", nombre: "Diego Vargas", dni: "79012345", telefono: "921 098 765", email: "diego.v@mail.com", categoria: "Nuevo", totalGastado: 150, totalCompras: 1, ultimaCompra: "16/03/2025" },
];
