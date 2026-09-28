import React from 'react';
import { X, ExternalLink, ShieldCheck, FileText, Calendar, Building, Info } from 'lucide-react';

export default function SourcePanel({ source, onClose }) {
  if (!source) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/60 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white border-2 border-slate-900 w-full max-w-2xl shadow-xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b-2 border-amber-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-sm tracking-wide">
              OFFICIAL GOVERNMENT SOURCE EVIDENCE RECORD
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          <div className="bg-slate-50 border border-slate-300 p-3 flex items-start justify-between gap-3">
            <div>
              <span className="bg-blue-900 text-white font-mono font-bold text-[10px] px-2 py-0.5 uppercase">
                {source.sourceName}
              </span>
              <h4 className="text-sm font-bold text-slate-900 mt-1">
                {source.documentTitle}
              </h4>
            </div>
            <span className="bg-emerald-100 text-emerald-900 font-bold px-2 py-1 text-[11px] border border-emerald-300 whitespace-nowrap">
              VERIFIED OFFICIAL
            </span>
          </div>

          <table className="gov-table">
            <tbody>
              <tr>
                <td className="w-1/3 font-bold bg-slate-100">Authority / Ministry</td>
                <td className="font-semibold text-slate-800">{source.authority}</td>
              </tr>
              <tr>
                <td className="font-bold bg-slate-100">Document Type</td>
                <td>{source.type || 'Statutory / Legal Prior Art Document'}</td>
              </tr>
              <tr>
                <td className="font-bold bg-slate-100">Relevant Provision / Section</td>
                <td className="font-mono font-bold text-blue-900">{source.section}</td>
              </tr>
              <tr>
                <td className="font-bold bg-slate-100">Last Vector Index Date</td>
                <td>{source.indexedDate}</td>
              </tr>
              <tr>
                <td className="font-bold bg-slate-100">Repository Citation URL</td>
                <td className="font-mono text-blue-700 underline break-all">
                  {source.citationUrl}
                </td>
              </tr>
            </tbody>
          </table>

          {/* Snippet / Citation Text */}
          <div>
            <h5 className="font-bold text-slate-900 uppercase text-[11px] mb-1.5 flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-amber-600" />
              Retrieved Official Excerpt / Statutory Text:
            </h5>
            <div className="bg-amber-50/60 border-l-4 border-amber-600 p-3 text-slate-800 font-mono text-xs leading-relaxed">
              "{source.snippet || 'The statutory provision excludes inventions that constitute traditional knowledge or mere aggregations of known properties of traditional Ayurvedic components.'}"
            </div>
          </div>

          <div className="gov-alert gov-alert-warning text-[11px]">
            <strong className="block mb-0.5">Verification Integrity Notice:</strong>
            This record was retrieved directly from the vector index of {source.authority}. Click below to inspect the live government repository entry.
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-4 py-3 border-t border-slate-300 flex items-center justify-between">
          <button onClick={onClose} className="gov-btn gov-btn-outline text-xs">
            Close Panel
          </button>

          <a
            href={source.citationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="gov-btn bg-blue-900 hover:bg-blue-800 text-white text-xs flex items-center gap-1.5"
          >
            <span>Open Official Portal Entry</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
