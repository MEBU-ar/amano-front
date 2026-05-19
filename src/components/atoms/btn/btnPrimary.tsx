import { cn } from "@/lib/utils";

const sizeStyles = {
  sm: "px-2 py-2 text-xs",
  md: "px-3 py-3 text-sm",
  lg: "px-4 py-4 text-base",
} as const;

type BtnPrimaryProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  size?: keyof typeof sizeStyles;
};

function BtnPrimary({
  children,
  className,
  type = "button",
  size = "md",
  disabled,
  ...props
}: BtnPrimaryProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        "w-full bg-[#a8001b] hover:bg-[#8c0017] text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#a8001b] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg",
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default BtnPrimary;
