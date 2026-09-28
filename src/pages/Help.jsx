import React from 'react';
import { HelpCircle, FileText, Phone, Mail, ShieldAlert } from 'lucide-react';
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
      answer: 'Sahayak integrates BHASHINI ASR (Automatic Speech Recognition) and IndicTrans2 NMT (Neural Machine Translation) pipelines to support voice input and query resolution across 11 Indian languages including Hindi, Marathi, Gujarati, Tamil, Telugu, and Bengali.'
    },
    {
      question: 'What is Retrieval-Augmented Generation (RAG)?',
      answer: 'RAG is an AI architecture that retrieves relevant statutory clauses and TKDL records from a vector database (Qdrant/ChromaDB) before sending them to the Large Language Model (LLM). This ensures every answer is grounded in real, verifiable government documents rather than generated assumptions.'
    },
    {
      question: 'What is Traditional Knowledge (TK) under Indian Patent Law?',
      answer: 'Traditional Knowledge refers to indigenous knowledge, innovations, and practices of traditional communities. Under Section 3(p) of the Indian Patents Act, 1970, an invention which in effect is traditional knowledge or an aggregation of known properties of known components is not patentable.'
    },
    {
      question: 'What is Access and Benefit Sharing (ABS)?',
      answer: 'ABS is a framework under the Biological Diversity Act 2002 and Nagoya Protocol mandating that commercial or research users of Indian biological resources share benefits (royalties) with local Biodiversity Management Committees (BMCs) and indigenous guardians.'
    },
    {
      question: 'When should I escalate a query to a human expert?',
      answer: 'You should escalate to an expert if the AI assistant response returns LOW CONFIDENCE, or if your query involves a novel patent application, commercial international export contracts, or complex bio-assay synergism proof.'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 text-white p-4 border-b-4 border-amber-600">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-amber-400" />
          <h1 className="text-xl font-bold tracking-wide">
            HELP CENTER & FREQUENTLY ASKED QUESTIONS (FAQ)
          </h1>
        </div>
        <p className="text-xs text-slate-300 mt-1">
          Find answers to common questions about Ayurveda IPR, TKDL prior art search, NBA ABS compliance, and Sahayak portal usage.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8">
          <div className="gov-box border-t-4 border-t-slate-900">
            <div className="gov-box-header">
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <div className="p-4">
              <FAQ items={faqList} />
            </div>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-4">
          <div className="gov-box bg-slate-900 text-white p-4 space-y-3 text-xs">
            <h3 className="font-bold text-amber-400 text-sm flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-amber-400" />
              OFFICIAL HELP DESK
            </h3>
            <p className="text-slate-300 leading-relaxed">
              For technical queries regarding the SIH 2026 prototype or expert panel escalation:
            </p>
            <div className="bg-slate-800 p-2.5 border border-slate-700 space-y-1 text-[11px]">
              <p><strong>Email:</strong> helpdesk@ipsakti-sahayak.gov.in</p>
              <p><strong>Toll Free:</strong> 1800-11-AYUSH (29874)</p>
              <p><strong>Nodal Team:</strong> Kaizzen (SIH 2026)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
