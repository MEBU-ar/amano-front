import AppLogo from "@/components/atoms/logo";
import RegisterForm from "@/components/molecules/form/registerForm";
import { cn } from "@/lib/utils";

type RegisterProps = {
  onSubmit: (data: {
    businessName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) => void;
  isLoading?: boolean;
  className?: string;
  onLoginClick?: () => void;
};

function Register({ onSubmit, isLoading, className, onLoginClick }: RegisterProps) {
  return (
    <div className={cn("w-full", className)}>
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <AppLogo letter="A" size="md" />
        <h2 className="mt-6 text-center text-2xl font-bold leading-9 tracking-tight text-[var(--text)]">
          Crear cuenta
        </h2>
        <p className="mt-2 text-center text-sm text-[var(--text-muted)]">
          Registra tu negocio para comenzar
        </p>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
        <div className="rounded-lg bg-[var(--card-bg)] px-6 py-12 shadow-[var(--shadow)] sm:px-12">
          <RegisterForm
            onSubmit={onSubmit}
            isLoading={isLoading}
            onLoginClick={onLoginClick}
          />
        </div>
      </div>
    </div>
  );
}

export default Register;