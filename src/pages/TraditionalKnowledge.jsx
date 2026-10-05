import React, { useState } from 'react';
import { BookMarked, Search, ExternalLink, X } from 'lucide-react';
import { TRADITIONAL_KNOWLEDGE_RECORDS } from '../data/knowledge';

export default function TraditionalKnowledge() {
  const [searchTerm, setSearchTerm] = useState('Turmeric');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeRecordModal, setActiveRecordModal] = useState(null);

  const filteredRecords = TRADITIONAL_KNOWLEDGE_RECORDS.filter((rec) => {
    const matchesTerm =
      !searchTerm ||
      rec.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.botanicalName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.sanskritName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      rec.traditionalUse.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'ALL' || rec.category.includes(selectedCategory);

    return matchesTerm && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="bg-[#002147] text-white p-4 border-b-4 border-amber-600 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <BookMarked className="w-5 h-5 text-amber-400" />
            <h1 className="text-lg font-bold tracking-wide">
              TRADITIONAL KNOWLEDGE DIGITAL LIBRARY (TKDL) PORTAL
            </h1>
          </div>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Search documented Ayurvedic classical literature to evaluate Section 3(p) patentability exclusions and defensive prior art.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs text-amber-400 font-bold shrink-0">
          CSIR & AYUSH REPOSITORY
        </div>
      </div>

      {/* Filter & Search Box */}
      <div className="gov-box p-5 bg-white border-t-4 border-t-amber-600">
        <div className="gov-box-header mb-4">
          <span>SEARCH TRADITIONAL KNOWLEDGE REPOSITORY</span>
          <span className="text-xs font-normal text-slate-600">CSIR TKDL Database</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="md:col-span-2">
            <label className="block font-bold text-slate-900 mb-1 uppercase text-[11px]">
              Formulation / Botanical / Sanskrit Name:
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g. Turmeric, Haridra, Curcuma longa, Ashwagandha..."
                className="w-full bg-slate-50 border-2 border-slate-400 p-2.5 pr-8 text-xs font-medium focus:bg-white focus:border-slate-900 focus:outline-none"
              />
              <Search className="w-4 h-4 text-slate-500 absolute right-3 top-3" />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-900 mb-1 uppercase text-[11px]">
              Therapeutic Category:
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-400 p-2.5 text-xs font-medium focus:bg-white focus:border-slate-900 focus:outline-none"
            >
              <option value="ALL">All Therapeutic Categories</option>
              <option value="Vranaropana">Vranaropana (Wound Healing)</option>
              <option value="Rasayana">Rasayana (Rejuvenative)</option>
              <option value="Jvarahara">Jvarahara (Antipyretic)</option>
              <option value="Medhya">Medhya (Cognitive / Nootropic)</option>
              <option value="Kaphahara">Kaphahara (Respiratory Care)</option>
            </select>
          </div>

          <div className="flex items-end">
            <button
              onClick={() => setSearchTerm('')}
              className="gov-btn gov-btn-outline w-full text-xs justify-center py-2.5 font-bold"
            >
              Reset Filters
            </button>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="gov-box bg-white">
        <div className="gov-box-header">
          <span>TKDL RECORDS FOUND ({filteredRecords.length})</span>
          <span className="badge-high">DEFENSIVE PRIOR ART ACTIVE</span>
        </div>

        <div className="overflow-x-auto">
          <table className="gov-table">
            <thead>
              <tr>
                <th>TK Record Code</th>
                <th>Traditional / Botanical Name</th>
                <th>Sanskrit Term</th>
                <th>Classical Text Reference</th>
                <th>Therapeutic Category</th>
                <th>Patent Exclusions Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.length === 0 ? (
                <tr>
                  <td colSpan={7} className="text-center py-8 text-slate-400">
                    No matching traditional knowledge records found.
                  </td>
                </tr>
              ) : (
                filteredRecords.map((rec) => (
                  <tr key={rec.id}>
                    <td className="font-mono text-xs font-bold text-slate-900">{rec.id}</td>
                    <td>
                      <div className="font-bold text-slate-900">{rec.name}</div>
                      <div className="text-[11px] text-slate-500 italic">{rec.botanicalName}</div>
                    </td>
                    <td className="font-bold text-amber-800">{rec.sanskritName}</td>
                    <td className="text-xs text-slate-700">{rec.classicalText}</td>
                    <td>
                      <span className="bg-slate-200 text-slate-800 text-[11px] font-bold px-2 py-0.5">
                        {rec.category}
                      </span>
                    </td>
                    <td>
                      <span className="badge-high">SECTION 3(P) PROTECTED</span>
                    </td>
                    <td>
                      <button
                        onClick={() => setActiveRecordModal(rec)}
                        className="text-xs font-bold text-amber-700 hover:text-amber-900 underline inline-flex items-center gap-1"
                      >
                        <span>View Record</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Record Modal */}
      {activeRecordModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full p-6 border-2 border-slate-900 space-y-4 shadow-xl">
            <div className="flex items-start justify-between border-b border-slate-300 pb-3">
              <div>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 border border-amber-300">
                  {activeRecordModal.id}
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-1">
                  {activeRecordModal.name} ({activeRecordModal.sanskritName})
                </h3>
                <p className="text-xs text-slate-600 italic">{activeRecordModal.botanicalName}</p>
              </div>
              <button
                onClick={() => setActiveRecordModal(null)}
                className="text-slate-500 hover:text-slate-800 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-800">
              <div className="p-3 bg-slate-50 border border-slate-300">
                <span className="font-bold text-slate-900 block mb-1">Classical Source Citation:</span>
                <p>{activeRecordModal.classicalText} • Sloka Ref: {activeRecordModal.slokaReference}</p>
              </div>

              <div>
                <span className="font-bold text-slate-900 block mb-1">Traditional Indications & Use:</span>
                <p>{activeRecordModal.traditionalUse}</p>
              </div>

              <div>
                <span className="font-bold text-slate-900 block mb-1">Section 3(p) Patent Exclusions Impact:</span>
                <p className="text-emerald-900 bg-emerald-50 p-2.5 border border-emerald-300 font-semibold">
                  {activeRecordModal.defensivePriorArtImpact}
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-300 flex justify-end">
              <button
                onClick={() => setActiveRecordModal(null)}
                className="gov-btn gov-btn-outline text-xs px-4 py-2 font-bold"
              >
                Close Record
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
