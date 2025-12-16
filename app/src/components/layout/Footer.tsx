import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-graphite-100 bg-[var(--surface)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-graphite-500 md:flex-row md:items-center md:justify-between">
      <p className="text-xs">© {currentYear} Verax. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-4 text-xs font-medium">
          <Link to="/legal/privacy" className="hover:text-graphite-700">
            Privacy Policy
          </Link>
          <Link to="/legal/terms" className="hover:text-graphite-700">
            Terms of Use
          </Link>
          <a href="mailto:legal@verax.com" className="hover:text-graphite-700">
            legal@verax.com
          </a>
        </div>
        <p className="text-xs">
          Fund performance data is provided for informational purposes only and does not constitute investment advice.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
