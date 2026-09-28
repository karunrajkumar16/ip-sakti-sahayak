import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Bot,
  BookMarked,
  FileCheck2,
  Leaf,
  Database,
  Search,
  Info,
  HelpCircle,
  LayoutDashboard
} from 'lucide-react';

export default function GovernmentNavbar() {
  const navItems = [
    { to: '/', label: 'Home', icon: Home },
    { to: '/assistant', label: 'IPR Assistant', icon: Bot },
    { to: '/traditional-knowledge', label: 'Traditional Knowledge', icon: BookMarked },
    { to: '/regulatory-guidance', label: 'Product & Regulatory', icon: FileCheck2 },
    { to: '/biodiversity-abs', label: 'Biodiversity / ABS', icon: Leaf },
    { to: '/sources', label: 'Knowledge Sources', icon: Database },
    { to: '/search', label: 'Search Portal', icon: Search },
    { to: '/about', label: 'About Sahayak', icon: Info },
    { to: '/help', label: 'Help / FAQ', icon: HelpCircle },
    { to: '/admin', label: 'Admin Dashboard', icon: LayoutDashboard }
  ];

  return (
    <nav className="gov-navbar sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex items-center overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `gov-nav-item whitespace-nowrap ${isActive ? 'active' : ''}`
              }
            >
              <Icon className="w-4 h-4 text-amber-400" />
              <span>{item.label}</span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
