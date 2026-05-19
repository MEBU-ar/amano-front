import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "@/components/organism";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const navigate = useNavigate();
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = (formData.get("email") as string) ?? "";
    const password = (formData.get("password") as string) ?? "";

    if (!email.trim() || !password) {
      setError("Introduce email y contraseña");
      return;
    }

    setIsLoading(true);
    // Sin auth real: con cualquier email y contraseña redirige al dashboard
    setTimeout(() => {
      setIsLoading(false);
      navigate("/dashboard", { replace: true });
    }, 500);
  }

  return (
    <div
      className={cn(
        "flex min-h-dvh w-full flex-col items-center justify-center relative"
      )}
      style={{
        background: '#fdebed',
        margin: 0,
        padding: 0
      }}
    >
      {/* CÍRCULOS ANIMADOS - FONDO */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        {/* CÍRCULOS GRANDES */}
        <div
          className="absolute rounded-full"
          style={{
            width: '280px',
            height: '280px',
            backgroundColor: '#e63946',
            opacity: 0.2,
            left: '2%',
            top: '8%',
            animation: 'flotar1 5s ease-in-out infinite'
          }}
        ></div>
        <div
          className="absolute rounded-full"
          style={{
            width: '250px',
            height: '250px',
            backgroundColor: '#e63946',
            opacity: 0.15,
            right: '3%',
            top: '12%',
            animation: 'flotar2 6s ease-in-out infinite'
          }}
        ></div>
        <div
          className="absolute rounded-full"
          style={{
            width: '220px',
            height: '220px',
            backgroundColor: '#e63946',
            opacity: 0.18,
            left: '5%',
            bottom: '5%',
            animation: 'flotar3 5.5s ease-in-out infinite'
          }}
        ></div>
        <div
          className="absolute rounded-full"
          style={{
            width: '240px',
            height: '240px',
            backgroundColor: '#e63946',
            opacity: 0.12,
            right: '5%',
            bottom: '8%',
            animation: 'flotar4 6.5s ease-in-out infinite'
          }}
        ></div>

        {/* CÍRCULOS MEDIANOS */}
        <div
          className="absolute rounded-full"
          style={{
            width: '130px',
            height: '130px',
            backgroundColor: '#e63946',
            opacity: 0.25,
            left: '35%',
            top: '5%',
            animation: 'flotar5 4.5s ease-in-out infinite'
          }}
        ></div>
        <div
          className="absolute rounded-full"
          style={{
            width: '110px',
            height: '110px',
            backgroundColor: '#e63946',
            opacity: 0.3,
            right: '28%',
            top: '25%',
            animation: 'flotar6 5s ease-in-out infinite'
          }}
        ></div>
        <div
          className="absolute rounded-full"
          style={{
            width: '140px',
            height: '140px',
            backgroundColor: '#e63946',
            opacity: 0.22,
            left: '15%',
            bottom: '30%',
            animation: 'flotar7 5.5s ease-in-out infinite'
          }}
        ></div>
        <div
          className="absolute rounded-full"
          style={{
            width: '120px',
            height: '120px',
            backgroundColor: '#e63946',
            opacity: 0.28,
            right: '20%',
            bottom: '28%',
            animation: 'flotar8 4.5s ease-in-out infinite'
          }}
        ></div>
      </div>

      <style>{`
        @keyframes flotar1 {
          0%, 100% { transform: translate(0vw, 0vh) scale(1); }
          50% { transform: translate(3vw, -6vh) scale(1.03); }
        }
        @keyframes flotar2 {
          0%, 100% { transform: translate(0vw, 0vh) scale(1); }
          50% { transform: translate(-3vw, 5vh) scale(0.97); }
        }
        @keyframes flotar3 {
          0%, 100% { transform: translate(0vw, 0vh) scale(1); }
          50% { transform: translate(0vw, -7vh) scale(1.04); }
        }
        @keyframes flotar4 {
          0%, 100% { transform: translate(0vw, 0vh) scale(1); }
          50% { transform: translate(-4vw, 0vh) scale(0.96); }
        }
        @keyframes flotar5 {
          0%, 100% { transform: translate(0vw, 0vh) scale(1); }
          50% { transform: translate(4vw, 4vh) scale(1.05); }
        }
        @keyframes flotar6 {
          0%, 100% { transform: translate(0vw, 0vh) scale(1); }
          50% { transform: translate(-3vw, -4vh) scale(0.95); }
        }
        @keyframes flotar7 {
          0%, 100% { transform: translate(0vw, 0vh) scale(1); }
          50% { transform: translate(4vw, 0vh) scale(1.03); }
        }
        @keyframes flotar8 {
          0%, 100% { transform: translate(0vw, 0vh) scale(1); }
          50% { transform: translate(0vw, 5vh) scale(0.97); }
        }
      `}</style>

      <Login onSubmit={handleSubmit} error={error} isLoading={isLoading} />
    </div>
  );
}
