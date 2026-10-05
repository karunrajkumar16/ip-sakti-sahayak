import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const PATH_NAME_MAP = {
  'assistant': 'IPR Assistant',
  'traditional-knowledge': 'Traditional Knowledge Search',
  'regulatory-guidance': 'Product & Regulatory Guidance',
  'biodiversity-abs': 'Biodiversity & ABS',
  'sources': 'Knowledge Sources Directory',
  'search': 'Unified Search Portal',
  'about': 'About',
  'help': 'Help & FAQ',
  'admin': 'Admin Dashboard'
};

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null;

  return (
    <div className="gov-breadcrumb py-2 bg-white/60 border-b border-slate-200/80 backdrop-blur-xs">
      <div className="max-w-7xl mx-auto px-4 flex items-center gap-1.5 flex-wrap text-xs">
        <Link to="/" className="hover:text-amber-600 flex items-center gap-1 text-slate-500 font-medium transition-colors">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const name = PATH_NAME_MAP[value] || value;

          return (
            <React.Fragment key={to}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
              {isLast ? (
                <span className="font-semibold text-slate-800">{name}</span>
              ) : (
                <Link to={to} className="hover:text-amber-600 text-slate-500 font-medium transition-colors">
                  {name}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
