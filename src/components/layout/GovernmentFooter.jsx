import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Mail, Phone } from 'lucide-react';

export default function GovernmentFooter() {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-xs mt-16">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: Portal Overview */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-500 text-slate-950 flex items-center justify-center font-bold text-sm">
              IP
            </div>
            <span className="font-bold text-white text-base tracking-tight">IP-SAKTI Sahayak</span>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            National source-grounded decision support platform for Intellectual Property, Traditional Knowledge (TKDL), Biodiversity ABS compliance, and AYUSH regulatory guidance.
          </p>
          <div className="text-[11px] bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-slate-400">
            <span className="font-semibold text-amber-400">SIH 2026 Initiative:</span> Problem SIH26045
            <br />
            <span>Team Kaizzen</span>
          </div>
        </div>

        {/* Col 2: Quick Navigation */}
        <div className="space-y-3">
          <h3 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2">
            Portal Navigation
          </h3>
          <ul className="space-y-2 text-xs">
            <li><Link to="/assistant" className="hover:text-amber-400 transition-colors">› IPR Sahayak AI Search</Link></li>
            <li><Link to="/traditional-knowledge" className="hover:text-amber-400 transition-colors">› TKDL Prior Art Search</Link></li>
            <li><Link to="/regulatory-guidance" className="hover:text-amber-400 transition-colors">› Product Classification</Link></li>
            <li><Link to="/biodiversity-abs" className="hover:text-amber-400 transition-colors">› Biodiversity ABS Evaluator</Link></li>
            <li><Link to="/sources" className="hover:text-amber-400 transition-colors">› Knowledge Sources Index</Link></li>
            <li><Link to="/search" className="hover:text-amber-400 transition-colors">› Unified Document Search</Link></li>
          </ul>
        </div>

        {/* Col 3: Government Repositories */}
        <div className="space-y-3">
          <h3 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2">
            Integrated Statutory Sources
          </h3>
          <ul className="space-y-2 text-xs text-slate-400">
            <li className="flex items-center justify-between">
              <span>IP India (CGPDTM)</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </li>
            <li className="flex items-center justify-between">
              <span>CSIR TKDL Repository</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </li>
            <li className="flex items-center justify-between">
              <span>National Biodiversity Authority</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </li>
            <li className="flex items-center justify-between">
              <span>India Code Legal Portal</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </li>
            <li className="flex items-center justify-between">
              <span>FSSAI Ayush Aahar Division</span>
              <ExternalLink className="w-3 h-3 text-slate-600" />
            </li>
          </ul>
        </div>

        {/* Col 4: Contact & Disclaimer */}
        <div className="space-y-3">
          <h3 className="font-bold text-white text-xs uppercase tracking-wider text-amber-400 border-b border-slate-800 pb-2">
            Support & Notice
          </h3>
          <p className="text-[11px] text-slate-400 leading-relaxed bg-slate-900 p-2.5 rounded-lg border border-slate-800">
            Content provided is for preliminary guidance and does not replace official examination by IP India or statutory clearances.
          </p>
          <div className="space-y-1.5 text-[11px] text-slate-400 pt-1">
            <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-amber-400" /> support@ipsakti-sahayak.gov.in</p>
            <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-amber-400" /> 1800-11-AYUSH (Toll Free)</p>
          </div>
        </div>
      </div>

      {/* Tricolor Strip */}
      <div className="gov-tricolor-strip"></div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 px-4 py-4 text-center text-slate-500 text-[11px] border-t border-slate-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            © 2026 IP-SAKTI Sahayak • Smart India Hackathon 2026 Prototype
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <Link to="/about" className="hover:underline">Privacy Policy</Link>
            <span>•</span>
            <Link to="/about" className="hover:underline">Terms of Use</Link>
            <span>•</span>
            <Link to="/help" className="hover:underline">Accessibility</Link>
            <span>•</span>
            <Link to="/about" className="hover:underline">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
