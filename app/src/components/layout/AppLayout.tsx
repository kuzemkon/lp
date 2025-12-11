import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';

const AppLayout = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--canvas)' }}>
      <div className="w-full border-b border-graphite-200 bg-[var(--surface)]">
        <div className="mx-auto w-full max-w-7xl px-6 pt-6">
          <NavBar activePath={pathname} />
        </div>
      </div>
      <div className="mx-auto flex min-h-[calc(100vh-120px)] w-full max-w-7xl flex-col px-6 pb-16 pt-10">
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default AppLayout;
