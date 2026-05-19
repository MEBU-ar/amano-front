import LabelField from "@/components/atoms/labels";
import { BtnPrimary } from "@/components/atoms/btn";
import { cn } from "@/lib/utils";

type LoginFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error?: string | null;
  isLoading?: boolean;
  className?: string;
};

function LoginForm({ onSubmit, error, isLoading, className }: LoginFormProps) {
  return (
    <form onSubmit={onSubmit} className={cn("space-y-6", className)}>
      <LabelField
        id="email"
        label="Correo electrónico"
        name="email"
        type="email"
        required
        autoComplete="email"
        error={!!error}
      />

      <LabelField
        id="password"
        label="Contraseña"
        name="password"
        type="password"
        required
        autoComplete="current-password"
        error={!!error}
      />

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          <p className="text-sm">{error}</p>
        </div>
      )}

      <div className="flex justify-between text-sm">
        <button
          type="button"
          className="cursor-pointer border-none bg-transparent p-0 font-semibold text-[#a8001b] transition-colors hover:text-[#8c0017]"
        >
          Crear cuenta
        </button>
        <button
          type="button"
          className="cursor-pointer border-none bg-transparent p-0 font-semibold text-gray-600 transition-colors hover:text-[#a8001b]"
        >
          ¿Olvidaste tu contraseña?
        </button>
      </div>

      <BtnPrimary type="submit" disabled={isLoading}>
        {isLoading ? "Iniciando sesión…" : "Iniciar sesión"}
      </BtnPrimary>
    </form>
  );
}

export default LoginForm;
