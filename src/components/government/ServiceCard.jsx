import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ title, description, to, icon: Icon, tag = "OFFICIAL SERVICE", color = "navy" }) {
  const topBorderClass = color === 'green' ? 'border-t-emerald-700' : color === 'saffron' ? 'border-t-amber-600' : 'border-t-slate-900';

  return (
    <div className={`bg-white border border-slate-300 border-t-4 ${topBorderClass} p-4 flex flex-col justify-between hover:shadow-md transition-shadow`}>
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wide bg-slate-100 px-1.5 py-0.5 border border-slate-300">
            {tag}
          </span>
          {Icon && <Icon className="w-5 h-5 text-slate-800" />}
        </div>
        <h3 className="text-sm font-bold text-slate-900 leading-tight mb-1.5">
          {title}
        </h3>
        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <Link
        to={to}
        className="gov-btn gov-btn-outline text-xs py-1.5 justify-between w-full font-semibold group"
      >
        <span>Access Portal</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
      </Link>
    </div>
  );
}
