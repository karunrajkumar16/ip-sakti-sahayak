import React from 'react';
import { HelpCircle, Phone, Mail } from 'lucide-react';
import FAQ from '../components/government/FAQ';

export default function Help() {
  const faqList = [
    {
      question: 'What is IP-SAKTI Sahayak?',
      answer: 'IP-SAKTI Sahayak is an AI decision support platform developed for Smart India Hackathon 2026 (Problem Statement SIH26045). It provides multilingual, source-grounded guidance on Intellectual Property Rights (IPR), traditional Ayurvedic formulations, Access & Benefit Sharing (ABS), and AYUSH/FSSAI regulatory rules.'
    },
    {
      question: 'What can Sahayak help me with?',
      answer: 'Sahayak assists in evaluating patent eligibility under Section 3(p) TK exclusions, identifying prior art in Charaka/Sushruta and TKDL databases, classifying products into AYUSH vs FSSAI categories, calculating National Biodiversity Authority (NBA) ABS requirements, and searching Central Acts.'
    },
    {
      question: 'Can Sahayak provide binding legal advice?',
      answer: 'No. Sahayak provides preliminary, evidence-grounded information based on indexed official documents. It does not replace professional legal counsel, official examination by the Patent Office (Office of CGPDTM), or statutory approvals from the National Biodiversity Authority.'
    },
    {
      question: 'What official sources does Sahayak integrate?',
      answer: 'Sahayak integrates IP India examination manuals, Traditional Knowledge Digital Library (TKDL), India Code statutes, National Biodiversity Authority (NBA) ABS rules, AYUSH Pharmacopoeia Commission standards, and FSSAI Ayush Aahar gazette orders.'
    },
    {
      question: 'How does multilingual voice and text search work?',
      answer: 'Sahayak integrates BHASHINI ASR and IndicTrans2 NMT pipelines to support voice input and query resolution across Indian languages including Hindi, Marathi, Gujarati, Tamil, Telugu, and Bengali.'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#002147] text-white p-4 border-b-4 border-amber-600 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-amber-400" />
            <h1 className="text-lg font-bold tracking-wide">
              HELP CENTER & FREQUENTLY ASKED QUESTIONS (FAQ)
            </h1>
          </div>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Find answers to common queries about Ayurveda IPR, TKDL prior art search, NBA ABS compliance, and Sahayak portal usage.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs text-amber-400 font-bold shrink-0">
          SUPPORT & HELPDESK
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <div className="gov-box p-6 bg-white border-t-4 border-t-[#002147]">
            <h2 className="font-bold text-slate-900 text-sm border-b border-slate-300 pb-3 mb-4 uppercase">
              Frequently Asked Questions
            </h2>
            <FAQ items={faqList} />
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <div className="gov-box p-5 bg-[#002147] text-white border-t-4 border-t-amber-500 space-y-3 text-xs">
            <h3 className="font-bold text-amber-400 text-sm flex items-center gap-1.5 uppercase">
              <Phone className="w-4 h-4 text-amber-400" />
              Official Support Helpdesk
            </h3>
            <p className="text-slate-300 leading-relaxed text-[11px]">
              For technical queries regarding the SIH 2026 prototype or expert panel escalation:
            </p>
            <div className="bg-slate-900 p-3 border border-slate-700 space-y-1 text-[11px]">
              <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-amber-400" /> helpdesk@ipsakti-sahayak.gov.in</p>
              <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-amber-400" /> 1800-11-AYUSH (Toll Free)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
