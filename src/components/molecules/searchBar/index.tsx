import { useState, useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { BtnIcon } from "@/components/atoms/btn";
import { cn } from "@/lib/utils";

type SearchBarProps = {
  placeholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
};

function SearchBar({
  placeholder = "What are you looking for?",
  onSearch,
  className,
}: SearchBarProps) {
  const [expanded, setExpanded] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (expanded) inputRef.current?.focus();
  }, [expanded]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "flex items-center overflow-hidden rounded-full bg-[var(--input-bg)] transition-[width] duration-500 ease-in-out",
        expanded ? "w-72 sm:w-80 md:w-96" : "w-10",
        className
      )}
    >
      <BtnIcon
        type="button"
        variant="ghost"
        size="md"
        rounded="lg"
        onClick={() => setExpanded((e) => !e)}
        className="size-10 shrink-0 rounded-full !border-0 !bg-transparent text-[var(--text-muted)] hover:!bg-transparent hover:text-[var(--accent)]"
      >
        <Search className="size-4" />
      </BtnIcon>
      <input
        ref={inputRef}
        type="search"
        placeholder={placeholder}
        className={cn(
          "min-w-0 flex-1 border-0 bg-transparent py-2.5 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-0 transition-opacity duration-500 ease-in-out",
          expanded ? "px-3 opacity-100" : "overflow-hidden px-0 opacity-0"
        )}
        onBlur={(e) => {
          if (
            expanded &&
            !containerRef.current?.contains(e.relatedTarget as Node)
          ) {
            setExpanded(false);
          }
        }}
        onKeyDown={(e) => {
          if (e.key === "Escape") setExpanded(false);
        }}
        onChange={(e) => onSearch?.(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
