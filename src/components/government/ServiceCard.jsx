import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ServiceCard({ title, description, to, icon: Icon, tag = "MODULE", color = "navy" }) {
  const topBorderClass = 
    color === 'green' ? 'border-t-emerald-700' :
    color === 'saffron' ? 'border-t-amber-600' :
    'border-t-[#002147]';

  return (
    <div className={`gov-box border-t-4 ${topBorderClass} p-5 flex flex-col justify-between hover:shadow-md transition-shadow bg-white`}>
      <div>
        <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
          <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider bg-slate-100 px-2 py-0.5 border border-slate-300">
            {tag}
          </span>
          {Icon && <Icon className="w-5 h-5 text-slate-900" />}
        </div>

        <h3 className="text-sm font-bold text-slate-900 leading-snug mb-1.5 hover:text-amber-700 transition-colors">
          {title}
        </h3>

        <p className="text-xs text-slate-600 leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <Link
        to={to}
        className="gov-btn gov-btn-outline text-xs py-2 justify-between w-full font-bold group"
      >
        <span>Access Portal</span>
        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
