import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeSync } from "./theme";
import LoginPage from "./pages/login";
import SignupPage from "./pages/signup";
import DashboardPage from "./pages/dashboard";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ThemeSync />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
