import { Bell, Sun, Moon, User, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import type { UserMenuOption } from "@/components/molecules/userMenu";
import SearchBar from "@/components/molecules/searchBar";
import UserMenu from "@/components/molecules/userMenu";
import { BtnIcon } from "@/components/atoms/btn";
import { useThemeStore } from "@/theme";

type HeaderProps = {
  userName?: string;
  userMenuOptions?: UserMenuOption[];
  onNotificationClick?: () => void;
  onLogout?: () => void;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  className?: string;
};

function Header({
  userName = "Usuario",
  userMenuOptions,
  onNotificationClick,
  onLogout,
  searchPlaceholder,
  onSearch,
  className,
}: HeaderProps) {
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const theme = useThemeStore((s) => s.theme);

  const resolvedOptions: UserMenuOption[] =
    userMenuOptions ?? [
      { icon: User, label: "Mi perfil" },
      { icon: Settings, label: "Configuración" },
      { icon: LogOut, label: "Cerrar sesión", variant: "danger", onClick: onLogout },
    ];

  return (
    <header
      className={cn(
        "flex shrink-0 items-center justify-between gap-4 border-b border-[var(--border)] bg-[var(--card-bg)] px-4 py-2.5",
        className
      )}
    >
      <SearchBar placeholder={searchPlaceholder} onSearch={onSearch} />

      <div className="flex items-center gap-1">
        <BtnIcon
          type="button"
          variant="ghost"
          size="md"
          rounded="lg"
          onClick={onNotificationClick}
          aria-label="Notificaciones"
          className="!border-0 !bg-transparent text-[var(--text-muted)] hover:!bg-transparent hover:text-[var(--accent)]"
        >
          <Bell className="size-5" />
        </BtnIcon>
        <BtnIcon
          type="button"
          variant="ghost"
          size="md"
          rounded="lg"
          onClick={toggleTheme}
          aria-label="Cambiar tema"
          className="!border-0 !bg-transparent text-[var(--text-muted)] hover:!bg-transparent hover:text-[var(--accent)]"
        >
          {theme === 'dark' ? <Moon className="size-5" /> : <Sun className="size-5" />}
        </BtnIcon>
        <UserMenu userName={userName} options={resolvedOptions} />
      </div>
    </header>
  );
}

export default Header;
