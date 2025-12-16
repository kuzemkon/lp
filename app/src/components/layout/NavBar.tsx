import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { BellIcon } from '@radix-ui/react-icons';
import { useAuth } from '../../auth/AuthProvider';
import useCurrentUserProfile from '../../hooks/useCurrentUserProfile';

interface NavBarProps {
  activePath: string;
}

const NavBar = ({ activePath }: NavBarProps) => {
  const navItems = [
    {
      label: 'Dashboard',
      to: '/',
      isActive:
        activePath === '/' ||
        activePath.startsWith('/portfolio') ||
        activePath.startsWith('/metrics'),
    },
    {
      label: 'Funds',
      to: '/funds',
      isActive: activePath === '/funds' || /^\/funds\/(?!$)/.test(activePath),
    },
    {
      label: 'Insights',
      to: '/insights',
      isActive: activePath.startsWith('/insights'),
    },
    {
      label: 'Reports',
      to: '/reports',
      isActive: activePath.startsWith('/reports'),
    },
  ];

  const { logout } = useAuth();
  const { profile } = useCurrentUserProfile();
  const firstInitial = profile?.firstName?.charAt(0);
  const lastInitial = profile?.lastName?.charAt(0);
  const initials = (firstInitial || lastInitial)
    ? `${(firstInitial ?? lastInitial ?? 'V').toUpperCase()}${(lastInitial ?? firstInitial ?? 'X').toUpperCase()}`
    : 'VX';

  return (
    <header className="w-full bg-[var(--surface)]">
      <div className="flex w-full flex-col items-start gap-4 px-0 pb-4 sm:flex-row sm:items-center sm:gap-6">
        <NavLink to="/" className="flex items-center gap-3 no-underline">
          <img src="/logo.png" alt="Verax" className="h-10 w-10" />
          <p className="text-xl font-bold leading-tight text-black">Verax</p>
        </NavLink>
        <div className="flex w-full items-center justify-between gap-4">
          <nav className="flex items-center gap-6 text-left text-base font-medium text-graphite-400 sm:ml-1.5 lg:ml-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={clsx(
                  'no-underline transition-colors',
                  item.isActive ? 'font-bold text-mint-500' : 'hover:text-graphite-600'
                )}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center text-base text-graphite-600 hover:text-graphite-800"
              >
                <BellIcon width={18} height={18} />
              </button>
            </DropdownMenu.Trigger>
              <DropdownMenu.Content
                className="w-64 rounded-md border border-graphite-100 bg-white p-3 text-sm text-graphite-600 shadow-lg"
                align="end"
              >
                <p className="text-sm text-graphite-500">No notifications yet.</p>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
            <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-mint-100 text-sm font-semibold uppercase text-mint-700"
              >
                {initials}
              </button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content
              className="w-56 rounded-md border border-graphite-100 bg-white p-3 text-sm text-graphite-600 shadow-lg"
              align="end"
            >
              <div className="mb-3">
                <p className="font-semibold text-graphite-800">
                  {[profile?.firstName, profile?.lastName].filter(Boolean).join(' ') || 'Signed in user'}
                </p>
                <p className="text-xs text-graphite-400">{profile?.email ?? '—'}</p>
              </div>
              <DropdownMenu.Item
                className="cursor-pointer rounded px-2 py-1 font-semibold text-rose-600 outline-none hover:bg-rose-50"
                onSelect={(event) => {
                  event.preventDefault();
                  logout();
                }}
              >
                Sign out
              </DropdownMenu.Item>
            </DropdownMenu.Content>
          </DropdownMenu.Root>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
