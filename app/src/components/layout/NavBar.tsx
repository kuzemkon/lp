import { NavLink } from 'react-router-dom';
import { clsx } from 'clsx';

interface NavBarProps {
  activePath: string;
}

const NavBar = ({ activePath }: NavBarProps) => {
  const isPortfolio = activePath.startsWith('/portfolio');

  return (
    <header className="w-full border-b border-graphite-200 bg-[var(--surface)]">
      <div className="flex flex-wrap items-center justify-between gap-6 px-0 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-mint-500 text-white text-lg font-semibold">
            FV
          </div>
          <div className="leading-tight">
            <p className="text-base font-semibold text-graphite-700">FundView</p>
            <p className="text-sm text-graphite-400">Portfolio Intelligence</p>
          </div>
        </div>
        <nav className="flex items-center gap-6 text-sm font-medium text-graphite-400">
          <NavLink
            to="/portfolio"
            className={clsx(
              'pb-1 transition-colors',
              isPortfolio ? 'text-graphite-800 border-b-2 border-mint-500' : 'hover:text-graphite-600'
            )}
          >
            Portfolio
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
