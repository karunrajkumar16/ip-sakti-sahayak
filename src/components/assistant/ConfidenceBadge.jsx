import React from 'react';
import { CheckCircle2, AlertTriangle, XCircle } from 'lucide-react';

export default function ConfidenceBadge({ level, reason, onEscalate }) {
  if (level === 'HIGH') {
    return (
      <div className="bg-emerald-50 border-l-4 border-emerald-600 p-3 my-3 text-xs text-emerald-900 flex items-start justify-between gap-3">
        <div className="flex items-start gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-emerald-800 text-xs tracking-wide uppercase">
                HIGH CONFIDENCE
              </span>
              <span className="bg-emerald-200 text-emerald-800 text-[10px] font-bold px-1.5 py-0.2 rounded border border-emerald-400">
                Official Sources Verified
              </span>
            </div>
            <p className="mt-1 text-emerald-800 text-xs leading-relaxed">
              {reason || "Answer supported by relevant official sources including Patents Act 1970 and TKDL databases."}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (level === 'MEDIUM') {
    return (
      <div className="bg-amber-50 border-l-4 border-amber-500 p-3 my-3 text-xs text-amber-900 flex items-start justify-between gap-3">
        <div className="flex items-start gap-2">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-amber-900 text-xs tracking-wide uppercase">
                MODERATE CONFIDENCE
              </span>
              <span className="bg-amber-200 text-amber-900 text-[10px] font-bold px-1.5 py-0.2 rounded border border-amber-400">
                Verification Recommended
              </span>
            </div>
            <p className="mt-1 text-amber-800 text-xs leading-relaxed">
              {reason || "Moderate confidence — additional verification or prior art search may be required."}
            </p>
          </div>
        </div>
        {onEscalate && (
          <button
            onClick={onEscalate}
            className="gov-btn bg-amber-600 hover:bg-amber-700 text-white text-[11px] px-2.5 py-1 whitespace-nowrap self-center"
          >
            Consult Expert
          </button>
        )}
      </div>
    );
  }

  // LOW CONFIDENCE
  return (
    <div className="bg-red-50 border-l-4 border-red-600 p-3 my-3 text-xs text-red-950 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
      <div className="flex items-start gap-2">
        <XCircle className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
        <div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-red-900 text-xs tracking-wide uppercase">
              LOW CONFIDENCE
            </span>
            <span className="bg-red-200 text-red-900 text-[10px] font-bold px-1.5 py-0.2 rounded border border-red-400">
              Insufficient Evidence
            </span>
          </div>
          <p className="mt-1 text-red-800 text-xs leading-relaxed">
            {reason || "Low confidence — insufficient supporting evidence in indexed legal repositories. Human expert evaluation required."}
          </p>
        </div>
      </div>

      {onEscalate && (
        <button
          onClick={onEscalate}
          className="gov-btn bg-red-700 hover:bg-red-800 text-white text-xs px-3 py-1.5 font-bold whitespace-nowrap shadow-xs"
        >
          Escalate to Expert
        </button>
      )}
    </div>
  );
}
