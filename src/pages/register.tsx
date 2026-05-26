import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Register } from "@/components/organism";
import { cn } from "@/lib/utils";

export default function RegisterPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(_data: {
    businessName: string;
    email: string;
    password: string;
    confirmPassword: string;
  }) {
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Redirect to login after successful registration
      navigate("/", { replace: true });
    }, 1000);
  }

  function handleLoginClick() {
    navigate("/", { replace: true });
  }

  return (
    <div
      className={cn(
        "flex min-h-dvh w-full flex-col items-center justify-center bg-[var(--bg-page)] px-4 py-12 sm:px-6 lg:px-8"
      )}
    >
      <Register
        onSubmit={handleSubmit}
        isLoading={isLoading}
        onLoginClick={handleLoginClick}
      />
    </div>
  );
}