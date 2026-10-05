import React, { useState } from 'react';
import { Search, ExternalLink, X } from 'lucide-react';
import { MOCK_GOVERNMENT_DOCUMENTS } from '../data/documents';

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedAuthority, setSelectedAuthority] = useState('ALL');
  const [activeDocModal, setActiveDocModal] = useState(null);

  const filteredDocs = MOCK_GOVERNMENT_DOCUMENTS.filter((doc) => {
    const matchesQuery =
      !searchTerm ||
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.section.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory = selectedCategory === 'ALL' || doc.category === selectedCategory;
    const matchesAuth = selectedAuthority === 'ALL' || doc.authority.includes(selectedAuthority);

    return matchesQuery && matchesCategory && matchesAuth;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#002147] text-white p-4 border-b-4 border-amber-600 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-amber-400" />
            <h1 className="text-lg font-bold tracking-wide">
              UNIFIED DOCUMENT & LEGAL REPOSITORY SEARCH
            </h1>
          </div>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Search across Patents Act 1970, Biological Diversity Act 2002, TKDL indexes, AYUSH notifications, and FSSAI gazette orders.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs text-amber-400 font-bold shrink-0">
          STATUTORY DATABASE INDEX
        </div>
      </div>

      {/* Filter Box */}
      <div className="gov-box p-5 bg-white border-t-4 border-t-[#002147]">
        <div className="gov-box-header mb-4">
          <span>DOCUMENT SEARCH & FILTER MATRIX</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs">
          <div className="md:col-span-2">
            <label className="block font-bold text-slate-900 mb-1 uppercase text-[11px]">Search Keywords / Act / Section:</label>
            <div className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g. Section 3(p), Biological Diversity, Synergism, FSSAI..."
                className="w-full bg-slate-50 border-2 border-slate-400 p-2.5 pr-8 text-xs font-medium focus:bg-white focus:border-slate-900 focus:outline-none"
              />
              <Search className="w-4 h-4 text-slate-500 absolute right-3 top-3" />
            </div>
          </div>

          <div>
            <label className="block font-bold text-slate-900 mb-1 uppercase text-[11px]">Document Category:</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-400 p-2.5 text-xs font-medium focus:bg-white focus:border-slate-900 focus:outline-none"
            >
              <option value="ALL">All Categories</option>
              <option value="Statute / Central Act">Statute / Central Act</option>
              <option value="Official Examination Guidelines">Official Examination Guidelines</option>
              <option value="Statutory Rules">Statutory Rules</option>
              <option value="Notification / Regulation">Notification / Regulation</option>
              <option value="International Treaty">International Treaty</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-900 mb-1 uppercase text-[11px]">Issuing Authority:</label>
            <select
              value={selectedAuthority}
              onChange={(e) => setSelectedAuthority(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-400 p-2.5 text-xs font-medium focus:bg-white focus:border-slate-900 focus:outline-none"
            >
              <option value="ALL">All Authorities</option>
              <option value="Ministry of Law">Ministry of Law & Justice</option>
              <option value="Environment">MoEFCC / Biodiversity Authority</option>
              <option value="CGPDTM">IP India (CGPDTM)</option>
              <option value="AYUSH">Ministry of AYUSH</option>
              <option value="FSSAI">FSSAI</option>
            </select>
          </div>
        </div>
      </div>

      {/* Document Results List */}
      <div className="gov-box p-5 bg-white space-y-4">
        <div className="gov-box-header">
          <span>RETRIEVED DOCUMENTS ({filteredDocs.length})</span>
        </div>

        <div className="space-y-3">
          {filteredDocs.length === 0 ? (
            <div className="text-center py-10 text-slate-400 text-xs">
              No documents matched your query criteria.
            </div>
          ) : (
            filteredDocs.map((doc) => (
              <div key={doc.id} className="p-4 bg-slate-50 border border-slate-300 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="bg-[#002147] text-amber-400 font-mono font-bold text-[10px] px-2 py-0.5">
                    {doc.category}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">{doc.effectiveDate}</span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm">
                  {doc.title}
                </h3>
                <p className="text-slate-600 text-[11px]">
                  <strong>Authority:</strong> {doc.authority} • <strong>Section:</strong> {doc.section}
                </p>

                <p className="text-slate-800 leading-relaxed text-xs">
                  {doc.summary}
                </p>

                <div className="pt-2 flex items-center justify-between border-t border-slate-300">
                  <span className="text-[10px] text-slate-500 font-mono">{doc.filename}</span>
                  <button
                    onClick={() => setActiveDocModal(doc)}
                    className="text-xs font-bold text-amber-700 hover:text-amber-900 underline flex items-center gap-1"
                  >
                    <span>View Full Text</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Doc Modal */}
      {activeDocModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full p-6 border-2 border-slate-900 space-y-4 shadow-xl">
            <div className="flex items-start justify-between border-b border-slate-300 pb-3">
              <div>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 border border-amber-300">
                  {activeDocModal.category}
                </span>
                <h3 className="text-lg font-black text-slate-900 mt-1">
                  {activeDocModal.title}
                </h3>
                <p className="text-xs text-slate-600">{activeDocModal.authority} • Section {activeDocModal.section}</p>
              </div>
              <button
                onClick={() => setActiveDocModal(null)}
                className="text-slate-500 hover:text-slate-800 p-1"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs text-slate-800">
              <div className="p-3 bg-slate-50 border border-slate-300">
                <span className="font-bold text-slate-900 block mb-1">Official Document Summary:</span>
                <p>{activeDocModal.summary}</p>
              </div>

              <div>
                <span className="font-bold text-slate-900 block mb-1">Key Statutory Provisions:</span>
                <p className="text-slate-700 leading-relaxed">{activeDocModal.fullTextExcerpt || activeDocModal.summary}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-300 flex justify-end">
              <button
                onClick={() => setActiveDocModal(null)}
                className="gov-btn gov-btn-outline text-xs px-4 py-2 font-bold"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
