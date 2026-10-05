import React, { useState } from 'react';
import { Leaf } from 'lucide-react';
import { ABS_RESOURCES, NBA_FORMS_EXPLANATION } from '../data/absData';

export default function ABS() {
  const [searchTerm, setSearchTerm] = useState('Ashwagandha');
  const [selectedEntity, setSelectedEntity] = useState('Indian Entity');
  const [useType, setUseType] = useState('Commercial Export');

  const filteredResources = ABS_RESOURCES.filter(
    (res) =>
      !searchTerm ||
      res.commonName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#002147] text-white p-4 border-b-4 border-amber-600 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Leaf className="w-5 h-5 text-amber-400" />
            <h1 className="text-lg font-bold tracking-wide">
              BIODIVERSITY & ACCESS AND BENEFIT SHARING (ABS) PORTAL
            </h1>
          </div>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Evaluate biological resource utilization under the Biological Diversity Act 2002 and National Biodiversity Authority guidelines.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs text-amber-400 font-bold shrink-0">
          NATIONAL BIODIVERSITY AUTHORITY (CHENNAI)
        </div>
      </div>

      {/* Evaluator Controls */}
      <div className="gov-box p-5 bg-white border-t-4 border-t-emerald-700">
        <div className="gov-box-header mb-4">
          <span>BIOLOGICAL RESOURCE EVALUATOR MATRIX</span>
          <span className="text-xs font-normal text-slate-600">BD Act 2002 Rules</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div>
            <label className="block font-bold text-slate-900 mb-1 uppercase text-[11px]">
              Biological Resource Name:
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="e.g. Ashwagandha, Red Sanders, Guduchi..."
              className="w-full bg-slate-50 border-2 border-slate-400 p-2.5 text-xs font-medium focus:bg-white focus:border-slate-900 focus:outline-none"
            />
          </div>

          <div>
            <label className="block font-bold text-slate-900 mb-1 uppercase text-[11px]">
              Applicant Legal Entity:
            </label>
            <select
              value={selectedEntity}
              onChange={(e) => setSelectedEntity(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-400 p-2.5 text-xs font-medium focus:bg-white focus:border-slate-900 focus:outline-none"
            >
              <option value="Indian Entity">Indian Entity / Resident Citizen</option>
              <option value="Foreign Entity">Foreign Entity / NRI / Foreign Equity</option>
            </select>
          </div>

          <div>
            <label className="block font-bold text-slate-900 mb-1 uppercase text-[11px]">
              Intended Purpose:
            </label>
            <select
              value={useType}
              onChange={(e) => setUseType(e.target.value)}
              className="w-full bg-slate-50 border-2 border-slate-400 p-2.5 text-xs font-medium focus:bg-white focus:border-slate-900 focus:outline-none"
            >
              <option value="Commercial Export">Commercial Export outside India</option>
              <option value="Patent Application">Filing Patent / IPR (Section 6)</option>
              <option value="Domestic Manufacturing">Domestic Indian Manufacturing</option>
              <option value="Academic Research">Academic Non-Commercial Research</option>
            </select>
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Resource Database (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="gov-box p-5 bg-white space-y-4">
            <div className="gov-box-header">
              <span>BIOLOGICAL RESOURCES MATRIX ({filteredResources.length})</span>
              <span className="badge-medium">BD ACT SEC 3, 4, 6</span>
            </div>

            <div className="space-y-4">
              {filteredResources.map((res) => (
                <div key={res.id} className="p-4 bg-slate-50 border border-slate-300 space-y-2 text-xs">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        {res.commonName} ({res.scientificName})
                      </h4>
                      <span className="text-[11px] text-slate-600">{res.partUsed}</span>
                    </div>
                    <span className="badge-medium">{res.threatStatus}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                    <div className="bg-white p-2 border border-slate-300">
                      <span className="text-slate-600 block">SBB Clearance:</span>
                      <span className="font-bold text-slate-900">{res.sbbClearanceRequired ? 'Mandatory Form I' : 'Exempt'}</span>
                    </div>
                    <div className="bg-white p-2 border border-slate-300">
                      <span className="text-slate-600 block">ABS Royalty Rate:</span>
                      <span className="font-bold text-slate-900">{res.standardRoyaltyRate}</span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-700 border-t border-slate-300 pt-2">
                    <strong>Rule Note:</strong> {res.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Guidelines (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="gov-box p-5 bg-white space-y-3">
            <div className="gov-box-header">
              <span>NBA STATUTORY FORMS & APPROVALS</span>
            </div>
            <div className="space-y-2 text-xs">
              {NBA_FORMS_EXPLANATION.map((form) => (
                <div key={form.formNumber} className="p-3 bg-slate-50 border border-slate-300 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{form.formNumber}</span>
                    <span className="text-[10px] bg-slate-200 px-1.5 py-0.5 font-mono font-bold">{form.timeframe}</span>
                  </div>
                  <p className="text-slate-700 text-[11px]">{form.purpose}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
