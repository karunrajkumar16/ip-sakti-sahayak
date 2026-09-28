import React from 'react';
import { Info, Cpu, Database, Languages, ShieldCheck, HelpCircle, ArrowDown, CheckCircle2, Layers } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 text-white p-4 border-b-4 border-amber-600">
        <div className="flex items-center gap-2">
          <Info className="w-6 h-6 text-amber-400" />
          <h1 className="text-xl font-bold tracking-wide">
            ABOUT IP-SAKTI — SAHAYAK
          </h1>
        </div>
        <p className="text-xs text-slate-300 mt-1">
          Smart India Hackathon 2026 Prototype • Problem Statement SIH26045 • Team Kaizzen
        </p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Section 1: Overview */}
          <div className="gov-box border-t-4 border-t-slate-900">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-300 pb-2 mb-3">
              1. PROJECT OVERVIEW & GOALS
            </h2>
            <div className="text-xs text-slate-800 leading-relaxed space-y-3">
              <p>
                <strong>IP-SAKTI — Sahayak</strong> is a specialized, source-grounded multilingual AI decision matrix designed to assist researchers, Ayurveda drug manufacturers, MSMEs, and patent officers in navigating the complex intersection of Intellectual Property Rights (IPR), Traditional Knowledge Digital Library (TKDL), National Biodiversity Authority (NBA) Access & Benefit Sharing (ABS) regulations, and AYUSH drug standards.
              </p>
              <div className="bg-amber-50 border-l-4 border-amber-600 p-3 text-amber-950 font-semibold">
                <strong>SIH 2026 Problem Statement:</strong> SIH26045 — Developing an intelligent AI assistant for Ayurveda IPR, traditional knowledge protection, and regulatory compliance.
              </div>
            </div>
          </div>

          {/* Section 2: Architectural Workflow */}
          <div className="gov-box border-t-4 border-t-emerald-700">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-300 pb-2 mb-4 flex items-center gap-2">
              <Cpu className="w-5 h-5 text-emerald-800" />
              2. ARCHITECTURAL WORKFLOW (USER QUERY TO VERIFIED GUIDANCE)
            </h2>

            {/* Workflow Diagram Step Boxes */}
            <div className="space-y-2 text-xs">
              <div className="bg-slate-900 text-white p-3 font-bold flex items-center justify-between border-l-4 border-amber-500">
                <span>1. USER QUERY INPUT</span>
                <span className="text-[10px] text-amber-400 font-mono">Text or BHASHINI Voice</span>
              </div>
              <div className="text-center py-0.5"><ArrowDown className="w-4 h-4 text-slate-500 mx-auto" /></div>

              <div className="bg-slate-800 text-slate-200 p-3 font-bold flex items-center justify-between border-l-4 border-blue-500">
                <span>2. LANGUAGE TRANSLATION & INTENT CLASSIFICATION</span>
                <span className="text-[10px] text-blue-300 font-mono">BHASHINI / IndicTrans2</span>
              </div>
              <div className="text-center py-0.5"><ArrowDown className="w-4 h-4 text-slate-500 mx-auto" /></div>

              <div className="bg-slate-800 text-slate-200 p-3 font-bold flex items-center justify-between border-l-4 border-emerald-500">
                <span>3. VECTOR EMBEDDING & KNOWLEDGE RETRIEVAL</span>
                <span className="text-[10px] text-emerald-300 font-mono">Qdrant / ChromaDB + LangChain</span>
              </div>
              <div className="text-center py-0.5"><ArrowDown className="w-4 h-4 text-slate-500 mx-auto" /></div>

              <div className="bg-slate-800 text-slate-200 p-3 font-bold flex items-center justify-between border-l-4 border-purple-500">
                <span>4. STATUTORY RE-RANKING & CONTEXT ASSEMBLY</span>
                <span className="text-[10px] text-purple-300 font-mono">Patents Act, TKDL, NBA Rules</span>
              </div>
              <div className="text-center py-0.5"><ArrowDown className="w-4 h-4 text-slate-500 mx-auto" /></div>

              <div className="bg-slate-800 text-slate-200 p-3 font-bold flex items-center justify-between border-l-4 border-amber-500">
                <span>5. LLM RESPONSE GENERATION WITH CITATIONS</span>
                <span className="text-[10px] text-amber-300 font-mono">Llama 3.1 / GPT-4o-mini</span>
              </div>
              <div className="text-center py-0.5"><ArrowDown className="w-4 h-4 text-slate-500 mx-auto" /></div>

              <div className="bg-slate-800 text-slate-200 p-3 font-bold flex items-center justify-between border-l-4 border-emerald-500">
                <span>6. SOURCE VALIDATION & CONFIDENCE EVALUATION</span>
                <span className="text-[10px] text-emerald-300 font-mono">HIGH / MEDIUM / LOW Score</span>
              </div>
              <div className="text-center py-0.5"><ArrowDown className="w-4 h-4 text-slate-500 mx-auto" /></div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-emerald-100 border-2 border-emerald-600 p-3 text-center">
                  <span className="font-bold text-emerald-900 block">HIGH CONFIDENCE</span>
                  <span className="text-[11px] text-emerald-800">Delivered directly to citizen with citations</span>
                </div>
                <div className="bg-red-100 border-2 border-red-600 p-3 text-center">
                  <span className="font-bold text-red-950 block">LOW CONFIDENCE</span>
                  <span className="text-[11px] text-red-900">Escalated to Human Expert Panel</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="gov-box border-t-4 border-t-amber-600">
            <div className="gov-box-header">
              <span>FUTURE PRODUCTION TECH STACK</span>
            </div>
            <div className="p-4 space-y-2 text-xs">
              <table className="gov-table text-xs">
                <tbody>
                  <tr><td className="font-bold bg-slate-100">Frontend</td><td>React, Vite, Tailwind CSS</td></tr>
                  <tr><td className="font-bold bg-slate-100">Backend API</td><td>FastAPI (Python 3.11)</td></tr>
                  <tr><td className="font-bold bg-slate-100">AI / RAG</td><td>LangChain, Qdrant Vector DB</td></tr>
                  <tr><td className="font-bold bg-slate-100">Multilingual</td><td>BHASHINI, IndicTrans2</td></tr>
                  <tr><td className="font-bold bg-slate-100">Database</td><td>PostgreSQL, Redis Cache</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="gov-box bg-slate-900 text-white p-4 space-y-2 text-xs">
            <h3 className="font-bold text-amber-400 text-sm">TEAM DETAILS</h3>
            <p><strong>Team Name:</strong> Kaizzen</p>
            <p><strong>Event:</strong> Smart India Hackathon 2026</p>
            <p><strong>Category:</strong> Software / AI / Legal Tech</p>
            <p><strong>Problem Code:</strong> SIH26045</p>
          </div>
        </div>
      </div>
    </div>
  );
}
