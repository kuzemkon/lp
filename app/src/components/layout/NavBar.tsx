import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';

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
  ];

  return (
    <header className="w-full bg-[var(--surface)]">
      <div className="flex w-full flex-col items-start gap-4 px-0 pb-4 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="FundView" className="h-10 w-10" />
          <p className="text-xl font-bold leading-tight text-black">FundView</p>
        </div>
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
      </div>
    </header>
  );
};

export default NavBar;
