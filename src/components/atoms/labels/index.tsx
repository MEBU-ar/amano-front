import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type LabelFieldProps = React.ComponentProps<"input"> & {
  id: string;
  label: string;
  labelClassName?: string;
  error?: boolean;
};

const LabelField = forwardRef<HTMLInputElement, LabelFieldProps>(
  ({ id, label, labelClassName, error = false, className, ...props }, ref) => (
    <div>
      <label
        htmlFor={id}
        className={cn(
          "block text-sm font-medium text-gray-700 mb-2",
          labelClassName
        )}
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          ref={ref}
          id={id}
          className={cn(
            "w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#a8001b] focus:border-transparent transition-all duration-200 text-gray-900 placeholder-gray-500",
            error && "border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
      </div>
    </div>
  )
);

LabelField.displayName = "LabelField";

export default LabelField;
