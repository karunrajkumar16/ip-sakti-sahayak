import React, { useState } from 'react';
import { Leaf, ShieldAlert, FileText, ExternalLink, CheckCircle2, Building, AlertCircle } from 'lucide-react';
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
      <div className="bg-slate-900 text-white p-4 border-b-4 border-amber-600">
        <div className="flex items-center gap-2">
          <Leaf className="w-6 h-6 text-amber-400" />
          <h1 className="text-xl font-bold tracking-wide">
            BIODIVERSITY & ACCESS AND BENEFIT SHARING (ABS) PORTAL
          </h1>
        </div>
        <p className="text-xs text-slate-300 mt-1">
          Evaluate biological resource utilization under the Biological Diversity Act 2002 and National Biodiversity Authority (NBA) benefit sharing guidelines.
        </p>
      </div>

      {/* Calculator / Search Box */}
      <div className="gov-box border-t-4 border-t-emerald-700">
        <div className="gov-box-header">
          <span>ABS APPLICABILITY EVALUATOR & BIOLOGICAL RESOURCE DATABASE</span>
          <span className="text-xs font-normal text-slate-600">National Biodiversity Authority (Chennai)</span>
        </div>

        <div className="p-4 space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block font-bold text-slate-900 mb-1">
                Biological Resource Name:
              </label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="e.g. Ashwagandha, Red Sanders, Guduchi..."
                className="w-full bg-slate-50 border border-slate-400 p-2 text-xs focus:bg-white focus:outline-none"
              />
            </div>

            <div>
              <label className="block font-bold text-slate-900 mb-1">
                Applicant Legal Status:
              </label>
              <select
                value={selectedEntity}
                onChange={(e) => setSelectedEntity(e.target.value)}
                className="w-full bg-slate-50 border border-slate-400 p-2 text-xs focus:bg-white focus:outline-none"
              >
                <option value="Indian Entity">Indian Entity / Resident Citizen</option>
                <option value="Foreign Entity">Foreign Entity / NRI / Entity with Foreign Equity</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-900 mb-1">
                Intended Utilization Purpose:
              </label>
              <select
                value={useType}
                onChange={(e) => setUseType(e.target.value)}
                className="w-full bg-slate-50 border border-slate-400 p-2 text-xs focus:bg-white focus:outline-none"
              >
                <option value="Commercial Export">Commercial Export outside India</option>
                <option value="Patent Application">Filing Patent / IPR Application (Section 6)</option>
                <option value="Domestic Manufacturing">Domestic Indian Manufacturing</option>
                <option value="Academic Research">Academic Non-Commercial Research</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* ABS Evaluation Results */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Resource Database (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          <div className="gov-box">
            <div className="gov-box-header">
              <span>BIOLOGICAL RESOURCE ABS EVALUATION MATRIX</span>
              <span className="bg-amber-100 text-amber-900 text-[10px] font-bold px-2 py-0.5 border border-amber-300">
                {filteredResources.length} RESOURCES EVALUATED
              </span>
            </div>

            <div className="p-4 space-y-4 text-xs">
              {filteredResources.map((res) => (
                <div key={res.id} className="bg-slate-50 border border-slate-300 p-4 space-y-2">
                  <div className="flex items-start justify-between gap-2 border-b border-slate-200 pb-2">
                    <div>
                      <h3 className="text-sm font-bold text-slate-900">{res.commonName}</h3>
                      <p className="text-xs font-mono text-emerald-800 italic font-bold">{res.scientificName}</p>
                    </div>
                    <span className="bg-emerald-900 text-white font-mono font-bold text-[10px] px-2 py-0.5 uppercase">
                      {res.absApplicability}
                    </span>
                  </div>

                  <table className="gov-table text-xs">
                    <tbody>
                      <tr>
                        <td className="w-1/3 font-bold bg-slate-100">State / Regional Sourcing</td>
                        <td>{res.stateSourced}</td>
                      </tr>
                      <tr>
                        <td className="font-bold bg-slate-100">Conservation Status</td>
                        <td>{res.conservationStatus}</td>
                      </tr>
                      <tr>
                        <td className="font-bold bg-slate-100">Mandatory NBA Form</td>
                        <td className="font-mono text-blue-900 font-bold">{res.nbaFormRequired}</td>
                      </tr>
                      <tr>
                        <td className="font-bold bg-slate-100">ABS Benefit Sharing Levy</td>
                        <td className="font-bold text-amber-800">{res.benefitSharingRate}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="bg-amber-50 p-2.5 border border-amber-300 text-[11px] text-amber-950">
                    <strong>NBA Guidance:</strong> {res.guideline}
                  </div>

                  <div className="pt-1 flex justify-end">
                    <a
                      href="https://nbaindia.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gov-btn gov-btn-outline text-[11px] py-1"
                    >
                      <span>View Official NBA Gazette Notice</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* NBA Statutory Forms Guide (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="gov-box border-t-4 border-t-slate-900">
            <div className="gov-box-header">
              <span>NBA STATUTORY APPROVAL FORMS (SECTION 3, 4, 6)</span>
            </div>

            <div className="p-4 space-y-3 text-xs">
              {NBA_FORMS_EXPLANATION.map((f, i) => (
                <div key={i} className="bg-slate-50 border border-slate-300 p-3 space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="bg-slate-900 text-amber-400 font-mono font-bold px-2 py-0.5 text-xs">
                      {f.form}
                    </span>
                    <span className="text-[10px] text-slate-500 font-bold">Mandatory Approval</span>
                  </div>
                  <h4 className="font-bold text-slate-900 text-xs mt-1">{f.title}</h4>
                  <p className="text-[11px] text-slate-700"><strong>Applicable Applicant:</strong> {f.applicant}</p>
                  <p className="text-[11px] text-emerald-900 bg-emerald-50 p-1 border border-emerald-200">
                    <strong>Statutory Purpose:</strong> {f.purpose}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
