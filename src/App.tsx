import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeSync } from "./theme";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import RegisterPage from "./pages/register";
import DashboardPage from "./pages/dashboard";
import ClientsPage from "./pages/clients";
import PerformancePage from "./pages/performance";
import ReceiptsPage from "./pages/receipts";
import NotificationsPage from "./pages/notifications";
import BlacklistPage from "./pages/blacklist";
import ProductsPage from "./pages/products";
import SalesPage from "./pages/sales";
import StockPage from "./pages/stock";
import HistoryPage from "./pages/history";
import ClientProfilePage from "./pages/clientProfile";

function App() {
  return (
    <BrowserRouter>
      <ThemeSync />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/clientes" element={<ClientsPage />} />
        <Route path="/clientes/:id" element={<ClientProfilePage />} />
        <Route path="/rendimiento" element={<PerformancePage />} />
        <Route path="/boletas" element={<ReceiptsPage />} />
        <Route path="/notificaciones" element={<NotificationsPage />} />
        <Route path="/lista-negra" element={<BlacklistPage />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/ventas" element={<SalesPage />} />
        <Route path="/stock" element={<StockPage />} />
        <Route path="/historial" element={<HistoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
