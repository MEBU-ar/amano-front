import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

type LoginProps = {
  className?: string;
};

function Login({ className }: LoginProps) {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !password) {
      setError("Por favor, introduce tu correo y contraseña");
      return;
    }

    setIsLoading(true);
    // Simulación de login exitoso
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard", { replace: true });
    }, 1000);
  }

  return (
    <div className={cn("w-full relative", className)} style={{ margin: 0, padding: 0, zIndex: 1 }}>
      {/* CABECERA ROJA COMPLETA CON OLA INFERIOR */}
      <div className="absolute top-0 left-0 w-full z-0" style={{ height: '50vh', background: 'linear-gradient(to bottom, #a8000b, #c4001f, #e63946, #ff6b6b)' }}>
        {/* OLA SUAVE COMO BORDE INFERIOR */}
        <div className="absolute bottom-0 left-0 w-full" style={{ lineHeight: 0 }}>
          <svg viewBox="0 0 1440 120" className="w-full" style={{ display: 'block', height: '80px' }} preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#ff6b6b"
              d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,40 1440,60 L1440,120 L0,120 Z">
            </path>
          </svg>
        </div>

        {/* TÍTULO Y LOGO DENTRO DE LA CABECERA */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
          {/* Logo */}
          <div className="logo-login" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '20px' }}>
            <div className="logo-doc" style={{ position: 'relative', width: '120px', height: '140px', background: '#ffffff', border: '2px solid #a8001b', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }}>
              <div className="logo-lines" style={{ position: 'absolute', top: '20px', left: '15px', right: '15px' }}>
                <span style={{ display: 'block', height: '4px', background: '#a8001b', opacity: 0.3, marginBottom: '6px', borderRadius: '2px' }}></span>
                <span style={{ display: 'block', height: '4px', background: '#a8001b', opacity: 0.3, marginBottom: '6px', borderRadius: '2px' }}></span>
                <span style={{ display: 'block', height: '4px', background: '#a8001b', opacity: 0.3, marginBottom: '6px', borderRadius: '2px' }}></span>
              </div>
              <div className="logo-a" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '70px', fontWeight: 'bold', color: '#a8000b', textShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>A</div>
              <div className="logo-money" style={{ position: 'absolute', bottom: '10px', right: '15px', fontSize: '20px', color: '#a8000b', fontWeight: 'bold' }}>$</div>
            </div>
          </div>

          {/* Título */}
          <div className="text-center">
            <h1 className="titulo" style={{
              color: '#ffffff',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              letterSpacing: '1px',
              textShadow: '8px 8px 0 rgba(0,0,0,0.2)',
              fontSize: '56px',
              lineHeight: 1.1,
              animation: 'flotar 3s ease-in-out infinite'
            }}>INICIAR SESIÓN</h1>
          </div>
        </div>
      </div>

      {/* ESPACIO PARA COMPENSAR LA CABECERA */}
      <div style={{ height: '55vh' }}></div>

      {/* FORMULARIO CENTRADO */}
      <div className="relative z-10 sm:mx-auto sm:w-full sm:max-w-md px-4 pb-12">
        {/* Recuadro Glassmorphism */}
        <div style={{
          background: 'transparent',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderRadius: '25px',
          border: '2px solid #a8001b',
          padding: '32px 24px'
        }}>
          {/* Formulario sin contenedor */}
          <div className="space-y-8 w-full">
          {/* Campo de Gmail */}
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium mb-3" style={{ color: '#a8001b' }}>
              Correo electrónico
            </label>
            <div className="relative">
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-6 py-4 text-lg focus:outline-none transition-all duration-300"
                style={{ borderRadius: '50px', border: '2px solid #a8001b', background: 'transparent', color: '#1a1a1a' }}
                placeholder="tu@email.com"
              />
            </div>
          </div>

          {/* Campo de Contraseña */}
          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium mb-3" style={{ color: '#a8001b' }}>
              Contraseña
            </label>
            <div className="relative">
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-6 py-4 text-lg focus:outline-none transition-all duration-300"
                style={{ borderRadius: '50px', border: '2px solid #a8001b', background: 'transparent', color: '#1a1a1a' }}
                placeholder="••••••••••••"
              />
            </div>
          </div>

          {/* Mensaje de error */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/30 px-4 py-3 rounded-lg">
              <p className="text-sm" style={{ color: '#FF0000', fontWeight: 300 }}>{error}</p>
            </div>
          )}

          {/* Enlaces secundarios */}
          <div className="flex justify-between text-sm">
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="cursor-pointer border-none bg-transparent p-0 font-semibold text-[#a8001b] transition-colors hover:text-[#8c0017]"
            >
              Crear cuenta
            </button>
            <button
              type="button"
              className="cursor-pointer border-none bg-transparent p-0 transition-colors hover:text-[#cc0000]"
              style={{ color: '#FF0000', fontWeight: 300 }}
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {/* Botón de login */}
          <button
            type="button"
            disabled={isLoading}
            onClick={handleSubmit}
            className="ingresar-btn w-full bg-[#a8001b] text-white font-semibold py-4 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a8001b] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Iniciando sesión...</span>
              </div>
            ) : (
              "INGRESAR"
            )}
          </button>
        </div>
        </div>

        {/* Decoración inferior */}
        <div className="mt-12 text-center">
          <p className="text-xs" style={{ color: '#FF0000' }}>
            Seguro y confiable • Sin tarifas ocultas • Soporte 24/7
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&family=Quicksand:wght@700&display=swap');
        
        @keyframes flotar {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .logo-doc::before {
          content: "";
          position: absolute;
          top: -3px;
          right: -3px;
          width: 35px;
          height: 35px;
          background: #e10600;
          clip-path: polygon(0 0, 100% 0, 100% 100%);
          border-top-right-radius: 8px;
        }
        #email::placeholder {
          color: #a8001b !important;
          opacity: 0.6;
        }
        #password::placeholder {
          color: #a8001b !important;
          opacity: 0.6;
        }
        .ingresar-btn {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .ingresar-btn:hover {
          transform: translateY(-3px);
          background-color: #c4001f;
          box-shadow: 0 8px 20px rgba(168, 0, 27, 0.3);
        }
        .ingresar-btn:active {
          transform: scale(0.96);
        }
        .ingresar-btn::after {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: 0.5s;
        }
        .ingresar-btn:hover::after {
          left: 100%;
        }
      `}</style>
    </div>
  );
}

export default Login;
