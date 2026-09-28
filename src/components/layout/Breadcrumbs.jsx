import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const PATH_NAME_MAP = {
  'assistant': 'IPR Assistant',
  'traditional-knowledge': 'Traditional Knowledge Search',
  'regulatory-guidance': 'Product & Regulatory Guidance',
  'biodiversity-abs': 'Biodiversity & Access and Benefit Sharing (ABS)',
  'sources': 'Knowledge Sources Directory',
  'search': 'Unified Document Search Portal',
  'about': 'About IP-SAKTI Sahayak',
  'help': 'Help & FAQ',
  'admin': 'Admin & Knowledge Management'
};

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) return null; // Home page doesn't need breadcrumbs

  return (
    <div className="gov-breadcrumb">
      <div className="max-w-7xl mx-auto flex items-center gap-1.5 flex-wrap">
        <Link to="/" className="hover:underline flex items-center gap-1 text-slate-700 font-medium">
          <Home className="w-3.5 h-3.5 text-slate-600" />
          <span>Home</span>
        </Link>

        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const name = PATH_NAME_MAP[value] || value;

          return (
            <React.Fragment key={to}>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              {isLast ? (
                <span className="font-bold text-slate-900">{name}</span>
              ) : (
                <Link to={to} className="hover:underline text-slate-700 font-medium">
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
