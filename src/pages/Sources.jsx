import React from 'react';
import { Database, ExternalLink, ShieldCheck, CheckCircle2, FileText, Globe, Building2 } from 'lucide-react';
import { GOVERNMENT_SOURCES } from '../data/sources';

export default function Sources() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 text-white p-4 border-b-4 border-amber-600">
        <div className="flex items-center gap-2">
          <Database className="w-6 h-6 text-amber-400" />
          <h1 className="text-xl font-bold tracking-wide">
            OFFICIAL KNOWLEDGE SOURCES DIRECTORY
          </h1>
        </div>
        <p className="text-xs text-slate-300 mt-1">
          Complete index of official government databases, statutory acts repositories, and traditional knowledge libraries integrated into Sahayak's vector search pipeline.
        </p>
      </div>

      {/* Grid of Sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {GOVERNMENT_SOURCES.map((source) => (
          <div key={source.id} className="gov-box border-t-4 border-t-slate-900 bg-white flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-2 mb-3">
                <span className="bg-slate-900 text-amber-400 font-mono font-bold text-xs px-2.5 py-0.5">
                  {source.code}
                </span>
                <span className="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 text-[10px] uppercase border border-emerald-300">
                  {source.status}
                </span>
              </div>

              <h2 className="text-sm font-bold text-slate-900 leading-snug mb-1">
                {source.title}
              </h2>
              <p className="text-xs text-blue-900 font-semibold mb-3">
                {source.authority}
              </p>

              <table className="gov-table text-xs mb-3">
                <tbody>
                  <tr>
                    <td className="w-1/3 font-bold bg-slate-100">Statutory Purpose</td>
                    <td className="text-slate-800">{source.purpose}</td>
                  </tr>
                  <tr>
                    <td className="font-bold bg-slate-100">Information Indexed</td>
                    <td className="text-slate-800">{source.infoType}</td>
                  </tr>
                  <tr>
                    <td className="font-bold bg-slate-100">Legal Coverage</td>
                    <td className="text-slate-800">{source.coverage}</td>
                  </tr>
                  <tr>
                    <td className="font-bold bg-slate-100">Indexed Vectors</td>
                    <td className="font-mono font-bold text-slate-900">{source.documentCount.toLocaleString()} Records</td>
                  </tr>
                  <tr>
                    <td className="font-bold bg-slate-100">Last Synchronization</td>
                    <td className="font-mono text-slate-600">{source.lastIndexed}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono">{source.website}</span>
              <a
                href={source.website}
                target="_blank"
                rel="noopener noreferrer"
                className="gov-btn bg-slate-900 hover:bg-slate-800 text-white text-xs px-3 py-1.5 flex items-center gap-1.5"
              >
                <span>Open Source Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
