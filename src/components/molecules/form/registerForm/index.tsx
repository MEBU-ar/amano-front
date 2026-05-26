import { useState } from "react";
import LabelField from "@/components/atoms/labels";
import { BtnPrimary } from "@/components/atoms/btn";
import { cn } from "@/lib/utils";

type FormErrors = {
  businessName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

type RegisterFormProps = {
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

function RegisterForm({
  onSubmit,
  isLoading,
  className,
  onLoginClick,
}: RegisterFormProps) {
  const [formData, setFormData] = useState({
    businessName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validateField = (name: string, value: string): string | undefined => {
    switch (name) {
      case "businessName":
        if (!value.trim()) return "El nombre del negocio es requerido";
        if (value.length < 3)
          return "El nombre debe tener al menos 3 caracteres";
        return undefined;
      case "email":
        if (!value.trim()) return "El correo electrónico es requerido";
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return "Ingresa un correo válido";
        return undefined;
      case "password":
        if (!value) return "La contraseña es requerida";
        if (value.length < 6)
          return "La contraseña debe tener al menos 6 caracteres";
        return undefined;
      case "confirmPassword":
        if (!value) return "Confirma tu contraseña";
        if (value !== formData.password) return "Las contraseñas no coinciden";
        return undefined;
      default:
        return undefined;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Validate on change if field was touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all fields
    const newErrors: FormErrors = {
      businessName: validateField("businessName", formData.businessName),
      email: validateField("email", formData.email),
      password: validateField("password", formData.password),
      confirmPassword: validateField("confirmPassword", formData.confirmPassword),
    };

    setErrors(newErrors);
    setTouched({
      businessName: true,
      email: true,
      password: true,
      confirmPassword: true,
    });

    // Check if there are any errors
    if (Object.values(newErrors).some((error) => error)) {
      return;
    }

    // Simulate successful registration
    setSuccessMessage("¡Registro exitoso! Redirigiendo...");

    onSubmit(formData);
  };

  const hasError = (field: keyof FormErrors) => !!errors[field];

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-5", className)}>
      {successMessage && (
        <div
          className="rounded-lg bg-green-100 p-4 text-center text-green-800 dark:bg-green-900/30 dark:text-green-400"
          role="alert"
        >
          <span className="text-lg">✓</span>
          <p className="mt-1 font-medium">{successMessage}</p>
        </div>
      )}

      <LabelField
        id="businessName"
        label="Nombre del negocio"
        name="businessName"
        type="text"
        required
        autoComplete="organization"
        value={formData.businessName}
        onChange={handleChange}
        onBlur={handleBlur}
        error={hasError("businessName")}
      />
      {errors.businessName && touched.businessName && (
        <p className="-mt-4 text-sm text-red-600" role="alert">
          {errors.businessName}
        </p>
      )}

      <LabelField
        id="email"
        label="Correo electrónico"
        name="email"
        type="email"
        required
        autoComplete="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={hasError("email")}
      />
      {errors.email && touched.email && (
        <p className="-mt-4 text-sm text-red-600" role="alert">
          {errors.email}
        </p>
      )}

      <LabelField
        id="password"
        label="Contraseña"
        name="password"
        type="password"
        required
        autoComplete="new-password"
        value={formData.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={hasError("password")}
      />
      {errors.password && touched.password && (
        <p className="-mt-4 text-sm text-red-600" role="alert">
          {errors.password}
        </p>
      )}

      <LabelField
        id="confirmPassword"
        label="Confirmar contraseña"
        name="confirmPassword"
        type="password"
        required
        autoComplete="new-password"
        value={formData.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={hasError("confirmPassword")}
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="-mt-4 text-sm text-red-600" role="alert">
          {errors.confirmPassword}
        </p>
      )}

      <div className="flex justify-between text-sm">
        <button
          type="button"
          onClick={onLoginClick}
          className="cursor-pointer border-none bg-transparent p-0 font-semibold text-[var(--accent)] transition-colors hover:text-[var(--accent-hover)]"
        >
          ¿Ya tienes cuenta? Inicia sesión
        </button>
      </div>

      <BtnPrimary type="submit" disabled={isLoading}>
        {isLoading ? "Creando cuenta…" : "Crear cuenta"}
      </BtnPrimary>
    </form>
  );
}

export default RegisterForm;