import { cn } from "@/lib/utils";

const sizeStyles = {
  sm: { box: "size-8", text: "text-lg" },
  md: { box: "size-12", text: "text-2xl" },
  lg: { box: "size-14", text: "text-3xl" },
} as const;

type AppLogoProps = {
  letter?: string;
  size?: keyof typeof sizeStyles;
  centered?: boolean;
  className?: string;
};

function AppLogo({
  letter = "A",
  size = "md",
  centered = true,
  className,
}: AppLogoProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-xl bg-[#a8001b] shadow-[0_4px_12px_rgba(168,0,27,0.3)]",
        centered && "mx-auto",
        sizeStyles[size].box,
        className
      )}
    >
      <span className={cn("font-black text-white", sizeStyles[size].text)}>
        {letter}
      </span>
    </div>
  );
}

export default AppLogo;
