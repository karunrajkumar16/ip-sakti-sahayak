import React from 'react';
import { User, ShieldAlert, Bot, FileText, CheckSquare, ExternalLink, HelpCircle } from 'lucide-react';
import ConfidenceBadge from './ConfidenceBadge';
import SourceCitation from './SourceCitation';

export default function ChatMessage({ message, onViewSource, onEscalate }) {
  const { userMessage, botResponse } = message;

  return (
    <div className="space-y-6 mb-8">
      {/* User Query Block */}
      <div className="bg-slate-100 border-l-4 border-slate-700 p-4 border border-slate-300">
        <div className="flex items-center justify-between text-xs text-slate-600 mb-2 border-b border-slate-200 pb-1.5">
          <div className="flex items-center gap-2 font-bold text-slate-900">
            <User className="w-4 h-4 text-slate-700" />
            <span>CITIZEN / RESEARCHER QUERY</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded text-[10px] font-mono">
              {userMessage.jurisdiction || 'India'}
            </span>
            <span className="text-slate-500 text-[11px]">{userMessage.timestamp}</span>
          </div>
        </div>
        <p className="text-sm font-semibold text-slate-900 leading-relaxed">
          "{userMessage.text}"
        </p>
      </div>

      {/* Assistant Response Block - Institutional Government Document Layout */}
      {botResponse && (
        <div className="bg-white border-2 border-slate-800 shadow-sm">
          {/* Response Title Header */}
          <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between border-b-2 border-amber-500">
            <div className="flex items-center gap-2">
              <Bot className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-xs uppercase tracking-wider">
                SAHAYAK SOURCE-GROUNDED GUIDANCE RESPONSE
              </span>
            </div>
            <span className="text-[10px] text-slate-300 bg-slate-800 px-2 py-0.5 border border-slate-700">
              Ref ID: {message.id}
            </span>
          </div>

          <div className="p-5 text-xs">
            {/* Confidence Level Badge */}
            <ConfidenceBadge
              level={botResponse.confidence}
              reason={botResponse.confidenceReason}
              onEscalate={onEscalate}
            />

            {/* Answer Text */}
            <div className="prose prose-slate max-w-none text-xs text-slate-900 leading-relaxed space-y-3 font-normal whitespace-pre-line border-b border-slate-200 pb-4">
              {botResponse.text}
            </div>

            {/* Relevant Statutory Provisions */}
            {botResponse.relevantProvisions && botResponse.relevantProvisions.length > 0 && (
              <div className="mt-4 bg-slate-50 p-3 border border-slate-200">
                <h4 className="font-bold text-slate-900 uppercase text-[11px] mb-1.5 flex items-center gap-1.5">
                  <CheckSquare className="w-3.5 h-3.5 text-blue-900" />
                  RELEVANT STATUTORY PROVISIONS & STATUTES
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {botResponse.relevantProvisions.map((prov, i) => (
                    <span key={i} className="bg-blue-100 text-blue-900 font-mono text-[11px] font-bold px-2 py-0.5 border border-blue-300">
                      {prov}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Recommendations */}
            {botResponse.recommendations && botResponse.recommendations.length > 0 && (
              <div className="mt-3 bg-emerald-50/50 p-3 border border-emerald-200">
                <h4 className="font-bold text-emerald-950 uppercase text-[11px] mb-1">
                  RECOMMENDED NEXT STEPS FOR APPLICANT:
                </h4>
                <ul className="list-disc pl-4 space-y-1 text-[11px] text-emerald-900">
                  {botResponse.recommendations.map((rec, i) => (
                    <li key={i}>{rec}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Citations Grid */}
            {botResponse.sources && botResponse.sources.length > 0 && (
              <div className="mt-4">
                <h4 className="font-bold text-slate-900 uppercase text-[11px] mb-2 border-b border-slate-300 pb-1">
                  OFFICIAL RETRIEVED SOURCES ({botResponse.sources.length})
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {botResponse.sources.map((src, i) => (
                    <SourceCitation
                      key={src.id || i}
                      index={i}
                      source={src}
                      onViewSource={onViewSource}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Mandatory Statutory Legal Disclaimer */}
            <div className="mt-5 gov-alert gov-alert-warning flex items-start gap-2 text-[11px] mb-0">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <strong>IMPORTANT NOTICE & LEGAL DISCLAIMER:</strong>
                <p className="mt-0.5 leading-normal">
                  Information provided is for preliminary guidance only based on indexed official sources. It does not constitute binding legal opinion. For complex or low-confidence matters, consult the appropriate authority (Office of CGPDTM / National Biodiversity Authority) or a qualified patent agent.
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
              <button
                onClick={onEscalate}
                className="gov-btn gov-btn-saffron text-xs py-1.5"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Request Expert Review for this Query</span>
              </button>

              <span className="text-[11px] text-slate-500 font-mono">
                Engine: LangChain + Qdrant Vector RAG
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
