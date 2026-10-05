import React from 'react';
import { Database, ExternalLink } from 'lucide-react';
import { GOVERNMENT_SOURCES } from '../data/sources';

export default function Sources() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#002147] text-white p-4 border-b-4 border-amber-600 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-amber-400" />
            <h1 className="text-lg font-bold tracking-wide">
              OFFICIAL KNOWLEDGE SOURCES DIRECTORY
            </h1>
          </div>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Official government databases, statutory act repositories, and traditional knowledge libraries integrated into Sahayak's vector search index.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs text-amber-400 font-bold shrink-0">
          STATUTORY DATA REPOSITORIES
        </div>
      </div>

      {/* Grid of Sources */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {GOVERNMENT_SOURCES.map((source) => (
          <div key={source.id} className="gov-box border-t-4 border-t-[#002147] p-5 bg-white flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-slate-200 pb-2 mb-3">
                <span className="bg-[#002147] text-amber-400 font-mono font-bold text-xs px-2.5 py-0.5">
                  {source.code}
                </span>
                <span className="badge-high">
                  {source.status}
                </span>
              </div>

              <h2 className="text-sm font-bold text-slate-900 leading-snug mb-1">
                {source.title}
              </h2>
              <p className="text-xs text-amber-700 font-bold mb-3">
                {source.authority}
              </p>

              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-slate-50 border border-slate-300">
                  <span className="font-bold text-slate-900 block text-[11px] uppercase">Statutory Purpose:</span>
                  <span className="text-slate-700 leading-relaxed text-[11px]">{source.purpose}</span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                  <div className="bg-slate-50 p-2 border border-slate-300">
                    <span className="text-slate-600 block">Records Indexed:</span>
                    <span className="font-mono font-bold text-slate-900">{source.documentCount.toLocaleString()}</span>
                  </div>
                  <div className="bg-slate-50 p-2 border border-slate-300">
                    <span className="text-slate-600 block">Last Synced:</span>
                    <span className="font-mono text-slate-700">{source.lastIndexed}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-200 flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono truncate max-w-[200px]">{source.website}</span>
              <a
                href={source.website}
                target="_blank"
                rel="noopener noreferrer"
                className="gov-btn bg-[#002147] hover:bg-[#0d3b66] text-white text-xs px-3.5 py-1.5 font-bold flex items-center gap-1.5"
              >
                <span>Visit Portal</span>
                <ExternalLink className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
