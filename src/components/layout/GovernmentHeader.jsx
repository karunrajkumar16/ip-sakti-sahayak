import React from 'react';
import { Shield, BookOpen, Award, ExternalLink, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GovernmentHeader({ onOpenHelpModal }) {
  return (
    <header className="gov-header px-4 py-3 border-b-2 border-slate-900 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Branding */}
        <div className="flex items-center gap-4">
          {/* Government Emblem Placeholder Icon */}
          <div className="w-14 h-14 bg-slate-900 text-amber-400 flex flex-col items-center justify-center border-2 border-amber-500 rounded-xs shadow-xs">
            <span className="text-[10px] font-bold text-center leading-tight tracking-wider text-amber-300 uppercase">
              सत्यमेव जयते
            </span>
            <Shield className="w-6 h-6 my-0.5 text-amber-400" />
            <span className="text-[8px] tracking-widest text-slate-300">GOVT</span>
          </div>

          <div>
            <div className="flex items-baseline gap-2">
              <Link to="/" className="text-2xl font-black text-slate-900 tracking-tight flex items-center gap-1 hover:text-blue-900">
                IP-SAKTI <span className="text-amber-600 font-bold text-lg">| सहायक</span>
              </Link>
              <span className="bg-slate-200 text-slate-800 text-[10px] font-bold px-1.5 py-0.5 border border-slate-400">
                PROTOTYPE — SIH 2026
              </span>
            </div>
            <p className="text-xs font-semibold text-slate-700 mt-0.5">
              Source-Grounded AI Knowledge & Regulatory Assistance Platform for Ayurveda & IPR
            </p>
            <p className="text-[11px] text-slate-500">
              Smart India Hackathon 2026 • Problem Statement SIH26045 • Team Kaizzen
            </p>
          </div>
        </div>

        {/* Right Badges / Quick Action */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-3 text-xs text-slate-600 bg-slate-50 p-2 border border-slate-300">
            <div className="flex items-center gap-1.5 border-r border-slate-300 pr-3">
              <BookOpen className="w-4 h-4 text-emerald-700" />
              <div>
                <span className="font-bold block text-slate-900 leading-tight">TKDL & IP India</span>
                <span className="text-[10px]">Official Indexing</span>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-800" />
              <div>
                <span className="font-bold block text-slate-900 leading-tight">NBA & AYUSH</span>
                <span className="text-[10px]">ABS Compliance</span>
              </div>
            </div>
          </div>

          <Link
            to="/assistant"
            className="gov-btn bg-amber-600 border-amber-700 hover:bg-amber-700 text-white text-xs px-3.5 py-2 font-bold flex items-center gap-1.5 shadow-xs"
          >
            <Search className="w-3.5 h-3.5" />
            <span>Launch Sahayak AI</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
