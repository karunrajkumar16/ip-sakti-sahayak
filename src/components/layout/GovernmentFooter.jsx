import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ExternalLink, Mail, Phone, MapPin } from 'lucide-react';

export default function GovernmentFooter() {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t-4 border-amber-600 text-xs mt-12">
      {/* Top Footer Section */}
      <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Col 1: Portal Overview */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 bg-amber-600 text-slate-900 flex items-center justify-center font-bold text-sm">
              IP
            </div>
            <span className="font-bold text-white text-base">IP-SAKTI — Sahayak</span>
          </div>
          <p className="text-slate-400 text-xs mb-3 leading-relaxed">
            Source-grounded AI decision support platform for Intellectual Property, Traditional Knowledge Digital Library (TKDL), Biodiversity ABS compliance and AYUSH regulatory guidance.
          </p>
          <div className="text-[11px] bg-slate-800 p-2 border border-slate-700 text-slate-300">
            <span className="font-bold text-amber-400">SIH 2026 Prototype:</span> Problem SIH26045
            <br />
            <span className="font-semibold">Team Kaizzen</span>
          </div>
        </div>

        {/* Col 2: Quick Navigation */}
        <div>
          <h3 className="font-bold text-white text-sm uppercase tracking-wide border-b border-slate-700 pb-2 mb-3 text-amber-400">
            Important Portal Links
          </h3>
          <ul className="space-y-1.5 text-xs">
            <li><Link to="/assistant" className="hover:text-amber-300 flex items-center gap-1">› IPR Sahayak AI Assistant</Link></li>
            <li><Link to="/traditional-knowledge" className="hover:text-amber-300 flex items-center gap-1">› TKDL Search & Prior Art</Link></li>
            <li><Link to="/regulatory-guidance" className="hover:text-amber-300 flex items-center gap-1">› AYUSH Product Classification</Link></li>
            <li><Link to="/biodiversity-abs" className="hover:text-amber-300 flex items-center gap-1">› NBA Access & Benefit Sharing</Link></li>
            <li><Link to="/sources" className="hover:text-amber-300 flex items-center gap-1">› Knowledge Sources Index</Link></li>
            <li><Link to="/search" className="hover:text-amber-300 flex items-center gap-1">› Unified Document Search</Link></li>
            <li><Link to="/admin" className="hover:text-amber-300 flex items-center gap-1">› Knowledge Management Dashboard</Link></li>
          </ul>
        </div>

        {/* Col 3: Government Repositories */}
        <div>
          <h3 className="font-bold text-white text-sm uppercase tracking-wide border-b border-slate-700 pb-2 mb-3 text-amber-400">
            Official Sources Integrated
          </h3>
          <ul className="space-y-1.5 text-xs text-slate-400">
            <li className="flex items-center justify-between">
              <span>IP India (Patents & Trademarks)</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </li>
            <li className="flex items-center justify-between">
              <span>TKDL (CSIR & AYUSH)</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </li>
            <li className="flex items-center justify-between">
              <span>National Biodiversity Authority</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </li>
            <li className="flex items-center justify-between">
              <span>India Code Legal Portal</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </li>
            <li className="flex items-center justify-between">
              <span>Pharmacopoeia Commission (PCIM&H)</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </li>
            <li className="flex items-center justify-between">
              <span>FSSAI (Ayush Aahar Division)</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </li>
          </ul>
        </div>

        {/* Col 4: Mandatory Disclaimer & Contact */}
        <div>
          <h3 className="font-bold text-white text-sm uppercase tracking-wide border-b border-slate-700 pb-2 mb-3 text-amber-400">
            Legal Disclaimer & Help
          </h3>
          <p className="text-[11px] text-slate-400 leading-normal mb-3 bg-slate-950 p-2 border border-slate-800">
            <strong>IMPORTANT:</strong> Content provided through this prototype is for informational and preliminary guidance purposes only. It does not constitute binding legal opinion or substitute official consultation with qualified patent agents or regulatory authorities.
          </p>
          <div className="space-y-1 text-[11px] text-slate-400">
            <p className="flex items-center gap-1.5"><Mail className="w-3 h-3 text-amber-400" /> support@ipsakti-sahayak.gov.in</p>
            <p className="flex items-center gap-1.5"><Phone className="w-3 h-3 text-amber-400" /> 1800-11-AYUSH (Toll Free)</p>
            <p className="flex items-center gap-1.5"><MapPin className="w-3 h-3 text-amber-400" /> SIH 2026 Nodal Center, India</p>
          </div>
        </div>
      </div>

      {/* Tricolor divider */}
      <div className="gov-tricolor-strip"></div>

      {/* Bottom Bar */}
      <div className="bg-slate-950 px-4 py-4 text-center text-slate-400 text-[11px] border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
          <div>
            © 2026 IP-SAKTI Sahayak. Designed for <strong>Smart India Hackathon 2026</strong> | Team <strong>Kaizzen</strong>
          </div>
          <div className="flex items-center gap-4 text-slate-400 text-[11px]">
            <Link to="/about" className="hover:underline">Privacy Policy</Link>
            <span>|</span>
            <Link to="/about" className="hover:underline">Terms of Use</Link>
            <span>|</span>
            <Link to="/help" className="hover:underline">Accessibility Statement</Link>
            <span>|</span>
            <Link to="/about" className="hover:underline">Disclaimer</Link>
            <span>|</span>
            <Link to="/sources" className="hover:underline">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
