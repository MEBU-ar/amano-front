export type Producto = {
  id: string;
  nombre: string;
  categoria: string;
  precio: number;
  stock: number;
  stockMinimo: number;
  ventasMes: number;
};

export const MOCK_PRODUCTOS: Producto[] = [
  { id: "PROD-001", nombre: "Arroz Extra 1kg", categoria: "Abarrotes", precio: 4.5, stock: 48, stockMinimo: 10, ventasMes: 85 },
  { id: "PROD-002", nombre: "Aceite Vegetal 1L", categoria: "Abarrotes", precio: 8.9, stock: 22, stockMinimo: 8, ventasMes: 62 },
  { id: "PROD-003", nombre: "Leche Evaporada 400g", categoria: "Lácteos", precio: 4.2, stock: 36, stockMinimo: 12, ventasMes: 128 },
  { id: "PROD-004", nombre: "Fideos Spaghetti 500g", categoria: "Abarrotes", precio: 3.1, stock: 55, stockMinimo: 15, ventasMes: 74 },
  { id: "PROD-005", nombre: "Azúcar Rubia 1kg", categoria: "Abarrotes", precio: 3.8, stock: 5, stockMinimo: 10, ventasMes: 45 },
  { id: "PROD-006", nombre: "Café Instantáneo 250g", categoria: "Abarrotes", precio: 12.5, stock: 18, stockMinimo: 5, ventasMes: 30 },
  { id: "PROD-007", nombre: "Detergente 500g", categoria: "Limpieza", precio: 6.8, stock: 3, stockMinimo: 8, ventasMes: 22 },
  { id: "PROD-008", nombre: "Jabón de Tocador", categoria: "Limpieza", precio: 3.5, stock: 40, stockMinimo: 10, ventasMes: 38 },
  { id: "PROD-009", nombre: "Pollo Entero 1kg", categoria: "Carnes", precio: 11.9, stock: 12, stockMinimo: 5, ventasMes: 56 },
  { id: "PROD-010", nombre: "Pan Francés x6", categoria: "Panadería", precio: 3.0, stock: 30, stockMinimo: 20, ventasMes: 95 },
];
