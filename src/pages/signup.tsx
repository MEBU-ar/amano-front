import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignupPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const firstName = (formData.get("firstName") as string) ?? "";
    const lastName = (formData.get("lastName") as string) ?? "";
    const email = (formData.get("email") as string) ?? "";
    const password = (formData.get("password") as string) ?? "";

    if (!firstName.trim() || !lastName.trim() || !email.trim() || !password) {
      setError("Por favor, completa todos los campos");
      return;
    }

    if (!agreeTerms) {
      setError("Debes aceptar los términos y condiciones");
      return;
    }

    setIsLoading(true);
    // Simulación de registro exitoso
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard", { replace: true });
    }, 1000);
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-white to-white relative overflow-hidden">
      {/* Fondo decorativo orgánico */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#a8001b]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute top-20 right-0 w-80 h-80 bg-[#a8001b]/10 rounded-full blur-2xl transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#a8001b]/5 rounded-full blur-3xl transform -translate-y-1/3"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#a8001b]/3 rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          {/* Encabezado */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-[#a8001b] rounded-2xl shadow-lg mb-4">
              <span className="text-white text-2xl font-bold">A</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Crea tu cuenta</h1>
            <p className="text-gray-600">Gestiona tus boletas y facturas fácilmente</p>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nombre y Apellido */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a8001b] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Apellido
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a8001b] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                    placeholder="Tu apellido"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Correo electrónico
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a8001b] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="tu@email.com"
                />
              </div>

              {/* Contraseña */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a8001b] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500"
                  placeholder="••••••••"
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-4">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => setAgreeTerms(e.target.checked)}
                    className="w-4 h-4 text-[#a8001b] bg-gray-100 border-gray-300 rounded focus:ring-[#a8001b] focus:ring-2"
                  />
                  <span className="text-sm text-gray-700">
                    Acepto los <a href="#" className="text-[#a8001b] hover:text-[#8c0017] font-medium">términos y condiciones</a>
                  </span>
                </label>
                
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-[#a8001b] bg-gray-100 border-gray-300 rounded focus:ring-[#a8001b] focus:ring-2"
                  />
                  <span className="text-sm text-gray-700">Recordar mi cuenta</span>
                </label>
              </div>

              {/* Mensaje de error */}
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  <p className="text-sm">{error}</p>
                </div>
              )}

              {/* Botón de registro */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#a8001b] hover:bg-[#8c0017] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#a8001b] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Creando cuenta...</span>
                  </div>
                ) : (
                  "Registrarse"
                )}
              </button>
            </form>

            {/* Enlace de login */}
            <div className="mt-6 text-center">
              <span className="text-sm text-gray-600">¿Ya tienes una cuenta? </span>
              <button
                onClick={() => navigate("/")}
                className="text-[#a8001b] hover:text-[#8c0017] font-medium text-sm transition-colors"
              >
                Iniciar sesión
              </button>
            </div>
          </div>

          {/* Decoración inferior */}
          <div className="mt-8 text-center">
            <p className="text-xs text-gray-500">
              Seguro y confiable • Sin tarifas ocultas • Soporte 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}