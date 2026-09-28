import React, { useState } from 'react';
import { Search, Filter, FileText, ExternalLink, ShieldCheck, CheckCircle2, X } from 'lucide-react';
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
      <div className="bg-slate-900 text-white p-4 border-b-4 border-amber-600">
        <div className="flex items-center gap-2">
          <Search className="w-6 h-6 text-amber-400" />
          <h1 className="text-xl font-bold tracking-wide">
            UNIFIED GOVERNMENT DOCUMENT & LEGAL REPOSITORY SEARCH
          </h1>
        </div>
        <p className="text-xs text-slate-300 mt-1">
          Search across Patents Act 1970, Biological Diversity Act 2002, TKDL indexes, AYUSH notifications, and FSSAI Ayush Aahar gazette orders.
        </p>
      </div>

      {/* Filter Box */}
      <div className="gov-box border-t-4 border-t-slate-900">
        <div className="gov-box-header">
          <span>DOCUMENT SEARCH & FILTER MATRIX</span>
        </div>

        <div className="p-4 space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
            <div className="md:col-span-2">
              <label className="block font-bold text-slate-900 mb-1">Search Term / Act / Section:</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g. Section 3(p), Biological Diversity, Synergism, FSSAI..."
                className="w-full bg-slate-50 border border-slate-400 p-2 text-xs focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-900 mb-1">Document Category:</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-slate-50 border border-slate-400 p-2 text-xs focus:bg-white focus:outline-none"
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
              <label className="block font-bold text-slate-900 mb-1">Issuing Authority:</label>
              <select
                value={selectedAuthority}
                onChange={(e) => setSelectedAuthority(e.target.value)}
                className="w-full bg-slate-50 border border-slate-400 p-2 text-xs focus:bg-white focus:outline-none"
              >
                <option value="ALL">All Authorities</option>
                <option value="Ministry of Law">Ministry of Law & Justice</option>
                <option value="Environment">MoEFCC / Biodiversity Authority</option>
                <option value="CGPDTM">IP India (Office of CGPDTM)</option>
                <option value="AYUSH">Ministry of AYUSH</option>
                <option value="FSSAI">FSSAI</option>
                <option value="WIPO">WIPO</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Document Results List */}
      <div className="gov-box">
        <div className="gov-box-header">
          <span>SEARCH RESULTS ({filteredDocs.length} DOCUMENTS RETRIEVED)</span>
        </div>

        <div className="p-4 space-y-3">
          {filteredDocs.map((doc) => (
            <div key={doc.id} className="bg-slate-50 border border-slate-300 p-4 space-y-2 hover:bg-blue-50/30 transition-colors">
              <div className="flex items-start justify-between gap-2 border-b border-slate-200 pb-2">
                <div>
                  <span className="bg-slate-900 text-amber-400 font-mono font-bold text-[10px] px-2 py-0.5 uppercase">
                    {doc.source}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1">{doc.title}</h3>
                </div>
                <span className="bg-blue-100 text-blue-900 font-bold px-2 py-0.5 text-[10px] border border-blue-300 whitespace-nowrap">
                  {doc.category}
                </span>
              </div>

              <div className="text-xs space-y-1 text-slate-700">
                <p><strong>Authority:</strong> {doc.authority}</p>
                <p className="font-mono text-blue-900 font-bold"><strong>Relevant Provision:</strong> {doc.section}</p>
                <p className="bg-white p-2 border border-slate-200 italic">"{doc.summary}"</p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-mono">Enactment/Issue Date: {doc.date}</span>
                <button
                  onClick={() => setActiveDocModal(doc)}
                  className="gov-btn bg-slate-900 hover:bg-slate-800 text-white text-xs px-3 py-1"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Document Detail Modal */}
      {activeDocModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white border-2 border-slate-900 w-full max-w-xl shadow-2xl flex flex-col">
            <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b-2 border-amber-500">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <h3 className="font-bold text-sm uppercase">LEGAL DOCUMENT SPECIFICATION</h3>
              </div>
              <button onClick={() => setActiveDocModal(null)} className="text-slate-300 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4 text-xs">
              <h4 className="text-base font-bold text-slate-900">{activeDocModal.title}</h4>
              <table className="gov-table">
                <tbody>
                  <tr><td className="w-1/3 font-bold bg-slate-100">Authority</td><td>{activeDocModal.authority}</td></tr>
                  <tr><td className="font-bold bg-slate-100">Category</td><td>{activeDocModal.category}</td></tr>
                  <tr><td className="font-bold bg-slate-100">Section / Rule</td><td className="font-mono font-bold text-blue-900">{activeDocModal.section}</td></tr>
                  <tr><td className="font-bold bg-slate-100">Source System</td><td>{activeDocModal.source}</td></tr>
                  <tr><td className="font-bold bg-slate-100">Date</td><td>{activeDocModal.date}</td></tr>
                </tbody>
              </table>

              <div className="bg-amber-50 p-3 border border-amber-300 text-slate-900 leading-relaxed font-mono">
                {activeDocModal.summary}
              </div>
            </div>

            <div className="bg-slate-100 px-4 py-3 border-t border-slate-300 flex items-center justify-between">
              <button onClick={() => setActiveDocModal(null)} className="gov-btn gov-btn-outline text-xs">
                Close
              </button>
              <a href={activeDocModal.url} target="_blank" rel="noopener noreferrer" className="gov-btn bg-blue-900 text-white text-xs flex items-center gap-1">
                <span>Open Repository URL</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
