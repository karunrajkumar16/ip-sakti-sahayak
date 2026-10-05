import React from 'react';
import { Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GovernmentHeader() {
  return (
    <header className="gov-header py-3.5 px-4 bg-white border-b-4 border-[#002147]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left: Official GOI Emblem & Ministry Branding */}
        <div className="flex items-center gap-4">
          {/* Satyameva Jayate Lion Capital Emblem SVG */}
          <div className="flex flex-col items-center justify-center p-1 bg-amber-50/50 border border-amber-300 shrink-0">
            <svg viewBox="0 0 100 110" className="w-11 h-14 text-amber-900" fill="currentColor">
              <path d="M50 5 L68 25 L62 32 L62 70 L72 76 L72 84 L28 84 L28 76 L38 70 L38 32 L32 25 Z" fill="#78350f" />
              <circle cx="50" cy="50" r="11" fill="#ffffff" stroke="#78350f" strokeWidth="2" />
              <path d="M50 39 L50 61 M39 50 L61 50 M42 42 L58 58 M42 58 L58 42" stroke="#78350f" strokeWidth="1.5" />
              <rect x="22" y="86" width="56" height="7" rx="0" fill="#78350f" />
              <text x="50" y="103" fontSize="9" fontWeight="bold" textAnchor="middle" fill="#78350f">सत्यमेव जयते</text>
            </svg>
          </div>

          <div>
            <div className="text-[11px] font-bold text-slate-900 tracking-wide uppercase">
              भारत सरकार | GOVERNMENT OF INDIA
            </div>
            <div className="text-xs font-bold text-amber-700">
              आयुष मंत्रालय एवं वाणिज्य और उद्योग मंत्रालय (DPIIT)
            </div>

            <div className="mt-1 flex items-baseline gap-2">
              <Link to="/" className="text-2xl font-black text-slate-900 tracking-tight hover:text-amber-700 transition-colors">
                IP-SAKTI <span className="text-amber-600 font-bold">| सहायक</span>
              </Link>
              <span className="bg-slate-200 text-slate-800 text-[10px] font-bold px-2 py-0.5 border border-slate-400">
                OFFICIAL PORTAL
              </span>
            </div>

            <p className="text-xs font-semibold text-slate-700 mt-0.5">
              National Digital Knowledge & Regulatory Assistance Platform for Ayurveda & IPR
            </p>
          </div>
        </div>

        {/* Right: Sharp Action Button */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:flex flex-col text-right border-r border-slate-300 pr-4">
            <span className="text-xs font-bold text-slate-900">DPIIT • CSIR TKDL • NBA</span>
            <span className="text-[11px] text-slate-600">Source-Grounded AI Matrix</span>
          </div>

          <Link
            to="/assistant"
            className="gov-btn bg-amber-600 hover:bg-amber-700 border-amber-700 text-white text-xs px-4 py-2.5 font-bold shadow-xs flex items-center gap-2"
          >
            <Search className="w-4 h-4 text-white" />
            <span>Launch Sahayak AI</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
