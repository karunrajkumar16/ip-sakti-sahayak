import React, { useState } from 'react';
import { FileCheck2, CheckCircle2 } from 'lucide-react';
import { MOCK_CLASSIFICATION_RULES, REGULATORY_AUTHORITIES } from '../data/regulations';

export default function RegulatoryGuidance() {
  const [formData, setFormData] = useState({
    productName: 'AyurImmune Polyherbal Syrup',
    description: 'Immune enhancing herbal oral syrup for seasonal respiratory wellness',
    ingredients: 'Ashwagandha (200mg), Guduchi (150mg), Pippali (100mg), Tulsi (50mg), Honey (q.s.)',
    intendedUse: 'General immunity enhancement and health maintenance',
    form: 'Syrup / Liquid Oral',
    targetMarket: 'Domestic & Export',
    country: 'India & European Union'
  });

  const [classificationResult, setClassificationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClassify = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const resultCategory = formData.ingredients.toLowerCase().includes('syrup') || formData.ingredients.toLowerCase().includes('ashwagandha')
        ? MOCK_CLASSIFICATION_RULES[0]
        : MOCK_CLASSIFICATION_RULES[2];

      setClassificationResult(resultCategory);
      setLoading(false);
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#002147] text-white p-4 border-b-4 border-amber-600 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <FileCheck2 className="w-5 h-5 text-amber-400" />
            <h1 className="text-lg font-bold tracking-wide">
              PRODUCT CLASSIFICATION & REGULATORY GUIDANCE PORTAL
            </h1>
          </div>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Classify herbal products under AYUSH Rule 158B, FSSAI Ayush Aahar, or CDSCO rules for licensing and IPR pathways.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs text-amber-400 font-bold shrink-0">
          AYUSH RULE 158B & FSSAI COMPLIANT
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form Column (5 cols) */}
        <div className="lg:col-span-5">
          <div className="gov-box p-5 bg-white border-t-4 border-t-[#002147]">
            <div className="gov-box-header mb-4">
              <span>ENTER PRODUCT SPECIFICATIONS</span>
              <span className="text-xs font-normal text-slate-600">Formulation Data</span>
            </div>

            <form onSubmit={handleClassify} className="space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-900 mb-1">
                  Product Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  className="w-full bg-slate-50 border-2 border-slate-400 p-2.5 text-xs font-medium focus:bg-white focus:border-slate-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-900 mb-1">
                  Ingredients & Concentrations <span className="text-red-600">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.ingredients}
                  onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                  className="w-full bg-slate-50 border-2 border-slate-400 p-2.5 text-xs font-medium focus:bg-white focus:border-slate-900 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-900 mb-1">
                    Dosage Form
                  </label>
                  <select
                    value={formData.form}
                    onChange={(e) => setFormData({ ...formData, form: e.target.value })}
                    className="w-full bg-slate-50 border-2 border-slate-400 p-2.5 text-xs font-medium focus:bg-white focus:border-slate-900 focus:outline-none"
                  >
                    <option value="Syrup / Liquid Oral">Syrup / Liquid Oral</option>
                    <option value="Tablet / Capsule">Tablet / Capsule</option>
                    <option value="Churna / Powder">Churna / Powder</option>
                    <option value="Oil / Ointment">Oil / Ointment</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1">
                    Target Market
                  </label>
                  <select
                    value={formData.targetMarket}
                    onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                    className="w-full bg-slate-50 border-2 border-slate-400 p-2.5 text-xs font-medium focus:bg-white focus:border-slate-900 focus:outline-none"
                  >
                    <option value="Domestic & Export">Domestic & Export</option>
                    <option value="Domestic India Only">Domestic India Only</option>
                    <option value="Export Only">Export Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-900 mb-1">
                  Intended Therapeutic Claim / Use
                </label>
                <input
                  type="text"
                  value={formData.intendedUse}
                  onChange={(e) => setFormData({ ...formData, intendedUse: e.target.value })}
                  className="w-full bg-slate-50 border-2 border-slate-400 p-2.5 text-xs font-medium focus:bg-white focus:border-slate-900 focus:outline-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="gov-btn bg-[#002147] hover:bg-[#0d3b66] text-amber-400 w-full text-xs py-2.5 justify-center font-bold"
                >
                  {loading ? 'Evaluating Regulatory Matrix...' : 'Run Product Classification'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Results Column (7 cols) */}
        <div className="lg:col-span-7 space-y-4">
          {classificationResult ? (
            <div className="gov-box p-5 bg-white border-t-4 border-t-emerald-700 space-y-4">
              <div className="gov-box-header">
                <div>
                  <span className="text-[10px] font-bold text-amber-800 bg-amber-100 px-2 py-0.5 border border-amber-300">
                    CLASSIFICATION RESULT
                  </span>
                  <h3 className="text-base font-black text-slate-900 mt-1">
                    {classificationResult.categoryName}
                  </h3>
                </div>
                <span className="badge-high">
                  {classificationResult.governingAct}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-slate-50 border border-slate-300 space-y-1">
                  <span className="font-bold text-slate-900 block">Licensing Authority:</span>
                  <p className="text-slate-700">{classificationResult.licensingAuthority}</p>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-300 space-y-1">
                  <span className="font-bold text-slate-900 block">Mandatory Data Required:</span>
                  <p className="text-slate-700">{classificationResult.safetyTrialRequirements}</p>
                </div>
              </div>

              <div className="p-4 bg-amber-50 border border-amber-300 text-xs space-y-1">
                <span className="font-bold text-amber-950 block uppercase">IPR & Patent Exclusions Pathway:</span>
                <p className="text-amber-900 font-medium leading-relaxed">{classificationResult.iprPathway}</p>
              </div>

              <div className="border-t border-slate-300 pt-3">
                <span className="font-bold text-slate-900 text-xs block mb-2 uppercase">Required Statutory Checklists:</span>
                <ul className="space-y-1 text-xs text-slate-700">
                  {classificationResult.checklistItems?.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="gov-box p-12 text-center bg-white space-y-3">
              <FileCheck2 className="w-10 h-10 text-slate-400 mx-auto" />
              <h3 className="font-bold text-slate-900 text-sm">Regulatory Classification Matrix Ready</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Submit product details on the left to evaluate licensing requirements under State Licensing Authorities & FSSAI.
              </p>
            </div>
          )}

          {/* Authorities Overview */}
          <div className="gov-box p-4 bg-white">
            <h4 className="font-bold text-slate-900 text-xs mb-3 uppercase">Statutory Regulatory Authorities</h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              {REGULATORY_AUTHORITIES.slice(0, 4).map((auth) => (
                <div key={auth.code} className="bg-slate-50 p-2.5 border border-slate-300">
                  <span className="font-bold text-slate-900 block">{auth.code}</span>
                  <span className="text-slate-600 text-[11px] line-clamp-1">{auth.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
