import React, { useState } from 'react';
import { FileCheck2, ShieldAlert, CheckCircle2, ArrowRight, Building2, AlertCircle, FileText, Info } from 'lucide-react';
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
      // Determine category based on ingredients/intended use
      const resultCategory = formData.ingredients.toLowerCase().includes('syrup') || formData.ingredients.toLowerCase().includes('ashwagandha')
        ? MOCK_CLASSIFICATION_RULES[0] // Ayurvedic Proprietary Medicine
        : MOCK_CLASSIFICATION_RULES[2]; // Ayush Aahar

      setClassificationResult(resultCategory);
      setLoading(false);
    }, 700);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 text-white p-4 border-b-4 border-amber-600">
        <div className="flex items-center gap-2">
          <FileCheck2 className="w-6 h-6 text-amber-400" />
          <h1 className="text-xl font-bold tracking-wide">
            PRODUCT CLASSIFICATION & REGULATORY GUIDANCE PORTAL
          </h1>
        </div>
        <p className="text-xs text-slate-300 mt-1">
          Classify herbal and Ayurvedic products under AYUSH Rule 158B, FSSAI Ayush Aahar, or CDSCO rules to identify licensing requirements and IPR pathways.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form Column (5 cols) */}
        <div className="lg:col-span-5">
          <div className="gov-box border-t-4 border-t-slate-900">
            <div className="gov-box-header">
              <span>ENTER PRODUCT SPECIFICATION DETAILS</span>
              <span className="text-xs font-normal text-slate-600">Formulation Matrix</span>
            </div>

            <form onSubmit={handleClassify} className="p-4 space-y-3 text-xs">
              <div>
                <label className="block font-bold text-slate-900 mb-1">
                  Product Name <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-400 p-2 text-xs focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-bold text-slate-900 mb-1">
                  Product Ingredients & Concentrations <span className="text-red-600">*</span>
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.ingredients}
                  onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-400 p-2 text-xs focus:bg-white focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-900 mb-1">
                    Dosage Form <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={formData.form}
                    onChange={(e) => setFormData({ ...formData, form: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-400 p-2 text-xs focus:bg-white focus:outline-none"
                  >
                    <option value="Syrup / Liquid Oral">Syrup / Liquid Oral</option>
                    <option value="Tablet / Capsule">Tablet / Capsule</option>
                    <option value="Churna / Powder">Churna / Powder</option>
                    <option value="Oil / Ointment">Oil / Ointment</option>
                    <option value="Herbal Extract / Resin">Herbal Extract / Resin</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1">
                    Target Market <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={formData.targetMarket}
                    onChange={(e) => setFormData({ ...formData, targetMarket: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-400 p-2 text-xs focus:bg-white focus:outline-none"
                  >
                    <option value="Domestic Only">Domestic (India)</option>
                    <option value="Export Only">Export Only</option>
                    <option value="Domestic & Export">Domestic & Export</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-900 mb-1">
                  Intended Therapeutic / Health Claim <span className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.intendedUse}
                  onChange={(e) => setFormData({ ...formData, intendedUse: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-400 p-2 text-xs focus:bg-white focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="gov-btn bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs w-full py-2.5 justify-center shadow-xs mt-2"
              >
                {loading ? 'Evaluating Regulatory Matrix...' : 'Classify Product & Generate Matrix'}
              </button>
            </form>
          </div>
        </div>

        {/* Results Column (7 cols) */}
        <div className="lg:col-span-7">
          {!classificationResult ? (
            <div className="gov-box text-center py-16 space-y-3">
              <Building2 className="w-12 h-12 text-slate-400 mx-auto" />
              <h3 className="font-bold text-slate-900 text-base">
                Product Regulatory Evaluation
              </h3>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Fill in the product specification form on the left and click "Classify Product" to view statutory licensing categories, applicable authorities, and required documentation.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Classification Result Card */}
              <div className="gov-box border-t-4 border-t-emerald-700 bg-white">
                <div className="gov-box-header bg-emerald-50">
                  <span className="text-emerald-950 font-bold">CLASSIFICATION DETERMINATION RESULT</span>
                  <span className="bg-emerald-200 text-emerald-900 text-[10px] font-bold px-2 py-0.5 border border-emerald-400">
                    PRELIMINARY GUIDANCE
                  </span>
                </div>

                <div className="p-4 space-y-4 text-xs">
                  <div className="bg-emerald-50 border border-emerald-300 p-3">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase block">Determined Category:</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                      {classificationResult.category}
                    </h3>
                    <p className="text-xs text-slate-700 mt-1">
                      <strong>Governing Act:</strong> {classificationResult.governingAct}
                    </p>
                    <p className="text-xs text-slate-700">
                      <strong>Primary Authority:</strong> {classificationResult.authority}
                    </p>
                  </div>

                  {/* 6 Structured Regulatory Steps */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-slate-900 uppercase border-b border-slate-300 pb-1 flex items-center gap-1.5">
                      <FileText className="w-4 h-4 text-amber-600" />
                      STRUCTURED REGULATORY & COMPLIANCE ROADMAP (6 STEPS)
                    </h4>

                    {/* Step 1 */}
                    <div className="bg-slate-50 border-l-4 border-blue-900 p-3">
                      <span className="font-bold text-blue-900 uppercase">1. PRODUCT CLASSIFICATION</span>
                      <p className="mt-1 text-slate-800">{classificationResult.criteria}</p>
                    </div>

                    {/* Step 2 */}
                    <div className="bg-slate-50 border-l-4 border-slate-800 p-3">
                      <span className="font-bold text-slate-900 uppercase">2. APPLICABLE REGULATIONS</span>
                      <p className="mt-1 text-slate-800">Rule 158B of Drugs & Cosmetics Rules 1945; Schedule T GMP standards; Ayush Pharmacopoeia standards.</p>
                    </div>

                    {/* Step 3 */}
                    <div className="bg-slate-50 border-l-4 border-amber-600 p-3">
                      <span className="font-bold text-amber-900 uppercase">3. REQUIRED DOCUMENTATION</span>
                      <ul className="list-disc pl-4 mt-1 space-y-0.5 text-slate-800">
                        {classificationResult.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Step 4 */}
                    <div className="bg-slate-50 border-l-4 border-emerald-700 p-3">
                      <span className="font-bold text-emerald-900 uppercase">4. MANDATORY APPROVALS</span>
                      <p className="mt-1 text-slate-800">Form 25D License from State Licensing Authority; Free Sale Certificate for exports from CDSCO.</p>
                    </div>

                    {/* Step 5 */}
                    <div className="bg-slate-50 border-l-4 border-purple-800 p-3">
                      <span className="font-bold text-purple-900 uppercase">5. INTELLECTUAL PROPERTY CONSIDERATIONS</span>
                      <p className="mt-1 text-slate-800">{classificationResult.ipConsiderations}</p>
                    </div>

                    {/* Step 6 */}
                    <div className="bg-slate-50 border-l-4 border-amber-700 p-3">
                      <span className="font-bold text-amber-950 uppercase">6. BIODIVERSITY & ABS CONSIDERATIONS</span>
                      <p className="mt-1 text-slate-800">{classificationResult.absConsiderations}</p>
                    </div>
                  </div>

                  <div className="gov-alert gov-alert-warning text-[11px] mb-0">
                    <strong>PRELIMINARY GUIDANCE LABEL:</strong> This classification is based on automated rules of the Ministry of AYUSH & FSSAI gazette notifications. Submit your final dossier to the State Licensing Authority for formal license issuance.
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
