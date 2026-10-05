import React from 'react';
import { Info, Cpu, ArrowDown } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#002147] text-white p-4 border-b-4 border-amber-600 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-amber-400" />
            <h1 className="text-lg font-bold tracking-wide">
              ABOUT IP-SAKTI — SAHAYAK
            </h1>
          </div>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Smart India Hackathon 2026 Prototype • Problem Statement SIH26045 • Team Kaizzen
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 px-3 py-1.5 text-xs text-amber-400 font-bold shrink-0">
          GOVT AI DECISION MATRIX
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Section 1: Overview */}
          <div className="gov-box p-6 bg-white border-t-4 border-t-[#002147]">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-300 pb-2 mb-3 uppercase">
              1. Project Vision & Objectives
            </h2>
            <div className="text-xs text-slate-800 leading-relaxed space-y-3">
              <p>
                <strong>IP-SAKTI — Sahayak</strong> is a specialized, source-grounded multilingual AI decision matrix designed to assist researchers, Ayurveda drug manufacturers, MSMEs, and patent officers in navigating Intellectual Property Rights (IPR), Traditional Knowledge Digital Library (TKDL), National Biodiversity Authority (NBA) ABS rules, and AYUSH regulations.
              </p>
              <div className="bg-amber-50 border border-amber-300 p-3 text-amber-950 font-semibold">
                <strong>SIH 2026 Problem Statement:</strong> SIH26045 — Intelligent AI assistant for Ayurveda IPR, traditional knowledge protection, and regulatory compliance.
              </div>
            </div>
          </div>

          {/* Section 2: Architectural Workflow */}
          <div className="gov-box p-6 bg-white border-t-4 border-t-emerald-700 space-y-4">
            <h2 className="text-sm font-bold text-slate-900 border-b border-slate-300 pb-2 flex items-center gap-2 uppercase">
              <Cpu className="w-4 h-4 text-emerald-800" />
              <span>2. Architectural Workflow</span>
            </h2>

            <div className="space-y-2 text-xs font-bold">
              <div className="bg-[#002147] text-white p-3 flex items-center justify-between border-l-4 border-amber-500">
                <span>1. USER QUERY INPUT (TEXT OR BHASHINI VOICE)</span>
                <span className="text-[10px] text-amber-400 font-mono">INPUT STAGE</span>
              </div>
              <div className="text-center py-0.5"><ArrowDown className="w-4 h-4 text-slate-500 mx-auto" /></div>

              <div className="bg-slate-800 text-slate-200 p-3 flex items-center justify-between border-l-4 border-blue-500">
                <span>2. LANGUAGE TRANSLATION & INTENT CLASSIFICATION</span>
                <span className="text-[10px] text-blue-300 font-mono">BHASHINI / INDIC TRANS2</span>
              </div>
              <div className="text-center py-0.5"><ArrowDown className="w-4 h-4 text-slate-500 mx-auto" /></div>

              <div className="bg-slate-800 text-slate-200 p-3 flex items-center justify-between border-l-4 border-emerald-500">
                <span>3. VECTOR EMBEDDING & STATUTORY RETRIEVAL</span>
                <span className="text-[10px] text-emerald-300 font-mono">QDRANT VECTOR DB</span>
              </div>
              <div className="text-center py-0.5"><ArrowDown className="w-4 h-4 text-slate-500 mx-auto" /></div>

              <div className="bg-slate-800 text-slate-200 p-3 flex items-center justify-between border-l-4 border-amber-500">
                <span>4. SOURCE-GROUNDED LLM GENERATION & CITATIONS</span>
                <span className="text-[10px] text-amber-300 font-mono">STATUTORY EVIDENCE MATRIX</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="gov-box gov-box-saffron p-5 bg-white space-y-3">
            <h3 className="font-bold text-slate-900 text-xs border-b border-slate-300 pb-2 uppercase">
              Team & Initiative Details
            </h3>
            <div className="space-y-2 text-xs text-slate-800">
              <p><strong>Nodal Event:</strong> Smart India Hackathon 2026</p>
              <p><strong>Problem ID:</strong> SIH26045</p>
              <p><strong>Team Name:</strong> Kaizzen</p>
              <p><strong>Ministry Partners:</strong> AYUSH & DPIIT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
