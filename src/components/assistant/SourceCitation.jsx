import React from 'react';
import { ExternalLink, FileText, ShieldCheck, BookOpen } from 'lucide-react';

export default function SourceCitation({ index, source, onViewSource }) {
  return (
    <div className="bg-slate-50 border border-slate-300 p-3 mb-2 text-xs flex flex-col justify-between hover:bg-blue-50/40 transition-colors">
      <div>
        <div className="flex items-center justify-between gap-2 mb-1">
          <div className="flex items-center gap-1.5 font-bold text-slate-900">
            <span className="w-5 h-5 bg-slate-800 text-amber-400 flex items-center justify-center text-[11px] font-mono">
              0{index + 1}
            </span>
            <span className="text-slate-900 font-bold text-xs">{source.sourceName}</span>
          </div>
          <span className="bg-blue-100 text-blue-900 font-semibold px-1.5 py-0.5 text-[10px] border border-blue-300">
            Official Source
          </span>
        </div>

        <p className="font-semibold text-slate-800 text-[12px] leading-tight mt-1 line-clamp-2">
          {source.documentTitle}
        </p>

        <div className="text-[11px] text-slate-600 mt-1 space-y-0.5">
          <p><strong>Authority:</strong> {source.authority}</p>
          <p><strong>Section:</strong> {source.section}</p>
          <p className="text-slate-500 text-[10px]">Indexed: {source.indexedDate}</p>
        </div>
      </div>

      <button
        onClick={() => onViewSource(source)}
        className="mt-2.5 gov-btn gov-btn-outline w-full text-[11px] py-1 justify-center"
      >
        <FileText className="w-3 h-3 text-slate-600" />
        <span>View Source Metadata</span>
      </button>
    </div>
  );
}
