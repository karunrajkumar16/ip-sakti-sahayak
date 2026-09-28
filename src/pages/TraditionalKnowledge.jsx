import React, { useState } from 'react';
import { BookMarked, Search, Filter, ShieldCheck, FileText, CheckCircle2, AlertTriangle, ExternalLink, X } from 'lucide-react';
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
      <div className="bg-slate-900 text-white p-4 border-b-4 border-amber-600">
        <div className="flex items-center gap-2">
          <BookMarked className="w-6 h-6 text-amber-400" />
          <h1 className="text-xl font-bold tracking-wide">
            TRADITIONAL KNOWLEDGE DIGITAL LIBRARY (TKDL) SEARCH PORTAL
          </h1>
        </div>
        <p className="text-xs text-slate-300 mt-1">
          Search documented Ayurvedic classical literature prior art to evaluate Section 3(p) patentability exclusions and defend traditional knowledge misappropriation.
        </p>
      </div>

      {/* Filter & Search Box */}
      <div className="gov-box border-t-4 border-t-amber-600">
        <div className="gov-box-header">
          <span>SEARCH TRADITIONAL KNOWLEDGE DATABASE</span>
          <span className="text-xs font-normal text-slate-600">CSIR & Ministry of AYUSH Repository</span>
        </div>

        <div className="p-4 space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="md:col-span-2">
              <label className="block font-bold text-slate-900 mb-1">
                Knowledge / Formulation / Botanical Name:
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="e.g. Turmeric, Haridra, Curcuma longa, Ashwagandha..."
                  className="w-full bg-slate-50 border border-slate-400 p-2 pr-8 text-xs focus:bg-white focus:border-slate-900 focus:outline-none"
                />
                <Search className="w-4 h-4 text-slate-500 absolute right-2.5 top-2.5" />
              </div>
            </div>

            <div>
              <label className="block font-bold text-slate-900 mb-1">
                Therapeutic Category:
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-400 p-2 text-xs focus:bg-white focus:border-slate-900 focus:outline-none"
              >
                <option value="ALL">All Categories</option>
                <option value="Vranaropana">Vranaropana (Wound Healing)</option>
                <option value="Rasayana">Rasayana (Rejuvenative / Adaptogen)</option>
                <option value="Jvarahara">Jvarahara (Antipyretic / Fever)</option>
                <option value="Medhya">Medhya (Cognitive / Nootropic)</option>
                <option value="Kaphahara">Kaphahara (Respiratory Care)</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={() => setSearchTerm('')}
                className="gov-btn gov-btn-outline w-full text-xs justify-center py-2"
              >
                Reset Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Table */}
      <div className="gov-box">
        <div className="gov-box-header">
          <span>SEARCH RESULTS ({filteredRecords.length} RECORDS FOUND)</span>
          <span className="bg-emerald-100 text-emerald-900 text-[10px] font-bold px-2 py-0.5 border border-emerald-300">
            DEFENSIVE PRIOR ART ACTIVE
          </span>
        </div>

        <div className="p-4 overflow-x-auto">
          <table className="gov-table">
            <thead>
              <tr>
                <th>Formulation / Botanical Name</th>
                <th>Sanskrit & Regional Name</th>
                <th>Traditional Therapeutic Use</th>
                <th>Classical Text Source</th>
                <th>TKDL Status</th>
                <th>IPR Prior Art Consideration</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((rec) => (
                <tr key={rec.id}>
                  <td>
                    <span className="font-bold text-slate-900 block">{rec.name}</span>
                    <span className="text-[11px] font-mono text-emerald-800 italic block">{rec.botanicalName}</span>
                    <span className="bg-slate-200 text-slate-800 text-[10px] px-1 font-mono">{rec.tkdlReference}</span>
                  </td>
                  <td>
                    <span className="font-semibold text-slate-800">{rec.sanskritName}</span>
                    <span className="text-[11px] text-slate-500 block">Region: {rec.region}</span>
                  </td>
                  <td className="max-w-xs text-xs text-slate-800 leading-relaxed">
                    {rec.traditionalUse}
                  </td>
                  <td className="text-xs font-semibold text-blue-900">
                    {rec.sourceText}
                  </td>
                  <td>
                    <span className="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 text-[10px] uppercase border border-emerald-300 block text-center">
                      {rec.documentationStatus}
                    </span>
                  </td>
                  <td className="max-w-xs text-xs bg-amber-50/60 p-2 text-amber-950 font-medium">
                    {rec.iprConsideration}
                  </td>
                  <td>
                    <button
                      onClick={() => setActiveRecordModal(rec)}
                      className="gov-btn bg-slate-900 hover:bg-slate-800 text-white text-[11px] py-1 px-2.5 whitespace-nowrap"
                    >
                      View Record
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detail Record Modal */}
      {activeRecordModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white border-2 border-slate-900 w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh]">
            <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b-2 border-amber-500">
              <div className="flex items-center gap-2">
                <BookMarked className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-sm uppercase">
                  TKDL OFFICIAL KNOWLEDGE RECORD ENTRY
                </h3>
              </div>
              <button onClick={() => setActiveRecordModal(null)} className="text-slate-300 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-4 text-xs">
              <div className="bg-amber-50 border-l-4 border-amber-600 p-3">
                <span className="bg-amber-700 text-white text-[10px] font-mono px-2 py-0.5 font-bold uppercase">
                  {activeRecordModal.tkdlReference}
                </span>
                <h4 className="text-base font-bold text-slate-900 mt-1">
                  {activeRecordModal.name}
                </h4>
                <p className="font-mono text-emerald-800 text-xs italic font-bold">
                  {activeRecordModal.botanicalName}
                </p>
              </div>

              <table className="gov-table">
                <tbody>
                  <tr>
                    <td className="w-1/3 font-bold bg-slate-100">Sanskrit Synonyms</td>
                    <td>{activeRecordModal.sanskritName}</td>
                  </tr>
                  <tr>
                    <td className="font-bold bg-slate-100">Ayurvedic Category</td>
                    <td className="font-bold text-amber-800">{activeRecordModal.category}</td>
                  </tr>
                  <tr>
                    <td className="font-bold bg-slate-100">Plant Part Utilized</td>
                    <td>{activeRecordModal.plantPart}</td>
                  </tr>
                  <tr>
                    <td className="font-bold bg-slate-100">Classical Source Text</td>
                    <td className="font-mono text-blue-900 font-bold">{activeRecordModal.sourceText}</td>
                  </tr>
                  <tr>
                    <td className="font-bold bg-slate-100">Classical Formulations</td>
                    <td>{activeRecordModal.classicalFormulations}</td>
                  </tr>
                  <tr>
                    <td className="font-bold bg-slate-100">Key Chemical Bio-actives</td>
                    <td>{activeRecordModal.keyCompounds}</td>
                  </tr>
                </tbody>
              </table>

              <div>
                <h5 className="font-bold text-slate-900 uppercase mb-1">
                  Traditional Therapeutic Mode of Administration:
                </h5>
                <p className="bg-slate-50 border border-slate-300 p-3 text-slate-800 leading-relaxed">
                  {activeRecordModal.traditionalUse}
                </p>
              </div>

              <div className="gov-alert gov-alert-warning">
                <strong className="block mb-1">DEFENSIVE IPR IMPLICATIONS (SECTION 3(p)):</strong>
                {activeRecordModal.iprConsideration}
              </div>
            </div>

            <div className="bg-slate-100 px-4 py-3 border-t border-slate-300 flex justify-end">
              <button
                onClick={() => setActiveRecordModal(null)}
                className="gov-btn bg-slate-900 text-white text-xs px-4"
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
