import React, { useState } from 'react';
import { X, Upload, CheckCircle2, ShieldAlert, FileText, Send } from 'lucide-react';
import { expertService } from '../../services/expertService';
import { SUPPORTED_LANGUAGES } from '../../services/languageService';

export default function ExpertEscalationForm({ initialQuery = '', onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    category: 'IPR & Patent Eligibility',
    description: initialQuery || '',
    preferredLanguage: 'English',
    acceptedTerms: false
  });

  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submittedResult, setSubmittedResult] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.acceptedTerms) {
      alert('Please check the confirmation box before submitting.');
      return;
    }
    setLoading(true);
    try {
      const res = await expertService.submitEscalation({
        ...formData,
        attachedFiles: files.map(f => f.name)
      });
      setSubmittedResult(res);
    } catch (err) {
      alert('Error submitting request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white border-2 border-slate-900 w-full max-w-2xl shadow-2xl flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="bg-slate-900 text-white px-4 py-3 flex items-center justify-between border-b-2 border-amber-500">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-amber-400" />
            <h3 className="font-bold text-sm uppercase tracking-wide">
              OFFICIAL EXPERT ESCALATION REQUEST
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white p-1 rounded hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs">
          {submittedResult ? (
            <div className="space-y-4 text-center py-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto border-2 border-emerald-500">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-slate-900">
                  Request Submitted Successfully
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Your query has been forwarded to the Expert Panel of CGPDTM Patent Office and Ministry of AYUSH.
                </p>
              </div>

              <div className="bg-slate-100 border-2 border-slate-700 p-4 max-w-md mx-auto text-left space-y-2">
                <div className="flex justify-between border-b border-slate-300 pb-1">
                  <span className="font-bold text-slate-600">Reference Number:</span>
                  <span className="font-mono font-bold text-amber-700 text-sm">
                    {submittedResult.referenceNumber}
                  </span>
                </div>
                <div className="flex justify-between border-b border-slate-300 pb-1">
                  <span className="font-bold text-slate-600">Status:</span>
                  <span className="bg-amber-100 text-amber-900 font-bold px-2 py-0.5 text-[10px] border border-amber-400">
                    Submitted for Review
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold text-slate-600">Assigned Panel:</span>
                  <span className="font-semibold text-slate-800">Traditional Knowledge Cell</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-500 max-w-md mx-auto">
                You will receive confirmation via email and SMS within 2 business days. Please save your reference number for tracking.
              </p>

              <button
                onClick={onClose}
                className="gov-btn bg-slate-900 hover:bg-slate-800 text-white px-6 py-2"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="gov-alert gov-alert-warning text-[11px]">
                <strong>REQUEST HUMAN EXPERT ASSISTANCE:</strong> Use this form if the AI assistant response was marked low confidence, or if your query involves novel patent claims, proprietary Ayurvedic formulations, or international ABS export clearances.
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-900 mb-1">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Kumar"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 p-2 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1">
                    Email Address / Mobile Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. rajesh@ayushresearch.in or +91 9876543210"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 p-2 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-900 mb-1">
                    Query Category <span className="text-red-600">*</span>
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 p-2 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  >
                    <option value="IPR & Patent Eligibility">IPR & Patent Eligibility (Sec 3(p) / 3(e))</option>
                    <option value="TKDL Prior Art Verification">TKDL Prior Art Verification</option>
                    <option value="AYUSH Regulatory & Licensing">AYUSH Regulatory & Licensing (Rule 158B)</option>
                    <option value="Biodiversity & ABS Approval">Biodiversity & Access Benefit Sharing (NBA)</option>
                    <option value="FSSAI Ayush Aahar Classification">FSSAI Ayush Aahar Classification</option>
                    <option value="International Export Compliance">International Export Compliance (WIPO/FDA)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1">
                    Preferred Communication Language
                  </label>
                  <select
                    value={formData.preferredLanguage}
                    onChange={(e) => setFormData({ ...formData, preferredLanguage: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 p-2 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                  >
                    {SUPPORTED_LANGUAGES.map((l) => (
                      <option key={l.code} value={l.name}>
                        {l.name} ({l.native})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-900 mb-1">
                  Detailed Query Description <span className="text-red-600">*</span>
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your Ayurvedic formulation, extract ratios, biological resource sourcing, or specific legal query in detail..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 p-2 text-xs focus:ring-1 focus:ring-amber-500 focus:outline-none"
                />
              </div>

              {/* Upload Section */}
              <div className="bg-slate-50 border border-dashed border-slate-400 p-3 text-center">
                <Upload className="w-5 h-5 text-slate-500 mx-auto mb-1" />
                <label className="cursor-pointer font-bold text-blue-900 hover:underline text-xs">
                  Click to Upload Supporting Documents (PDF, DOCX, JPG, PNG)
                  <input
                    type="file"
                    multiple
                    accept=".pdf,.docx,.jpg,.png"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <p className="text-[10px] text-slate-500 mt-0.5">
                  Max file size: 10MB each (Formulation lab reports, provisional claims, etc.)
                </p>
                {files.length > 0 && (
                  <div className="mt-2 text-left bg-white p-2 border border-slate-300">
                    <span className="font-bold text-[11px] block mb-1 text-slate-700">Attached Files:</span>
                    {files.map((f, i) => (
                      <span key={i} className="inline-flex items-center gap-1 bg-slate-100 text-slate-800 text-[10px] font-mono px-2 py-0.5 mr-1 border border-slate-300">
                        <FileText className="w-3 h-3 text-blue-700" />
                        {f.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Checkbox confirmation */}
              <div className="flex items-start gap-2 bg-slate-100 p-2.5 border border-slate-300">
                <input
                  type="checkbox"
                  id="confirm-terms"
                  required
                  checked={formData.acceptedTerms}
                  onChange={(e) => setFormData({ ...formData, acceptedTerms: e.target.checked })}
                  className="mt-0.5 focus:ring-amber-500 h-4 w-4 text-amber-600 border-slate-300 rounded"
                />
                <label htmlFor="confirm-terms" className="text-[11px] text-slate-800 leading-normal font-medium">
                  I understand that this request may require review by a qualified expert panel from CGPDTM or Ministry of AYUSH, and that information submitted will be processed in accordance with official confidentiality guidelines.
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex items-center justify-end gap-3 pt-2 border-t border-slate-200">
                <button
                  type="button"
                  onClick={onClose}
                  className="gov-btn gov-btn-outline text-xs"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="gov-btn bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-5 py-2 flex items-center gap-1.5 shadow-xs"
                >
                  {loading ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Request</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
