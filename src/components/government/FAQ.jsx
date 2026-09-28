import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="space-y-2">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className="border border-slate-300 bg-white">
            <button
              onClick={() => toggle(idx)}
              className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 flex items-center justify-between gap-2 text-xs font-bold text-slate-900 border-b border-slate-200"
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-600 shrink-0" />
                <span>{item.question}</span>
              </div>
              {isOpen ? <ChevronUp className="w-4 h-4 text-slate-600" /> : <ChevronDown className="w-4 h-4 text-slate-600" />}
            </button>
            {isOpen && (
              <div className="p-4 text-xs text-slate-700 leading-relaxed bg-white prose prose-slate max-w-none">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
