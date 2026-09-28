import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Volume2,
  BookOpen,
  ShieldCheck,
  FileCheck2,
  Leaf,
  Database,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Info,
  CheckCircle2,
  Building2,
  AlertCircle
} from 'lucide-react';
import ServiceCard from '../components/government/ServiceCard';
import { SAMPLE_QUESTIONS } from '../data/mockChat';

export default function Home({ onOpenVoiceModal, currentLanguage }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/assistant?q=${encodeURIComponent(query)}`);
  };

  const handleExampleClick = (questionText) => {
    navigate(`/assistant?q=${encodeURIComponent(questionText)}`);
  };

  return (
    <div className="space-y-6">
      {/* Top Official Government Announcement Banner */}
      <div className="bg-amber-50 border-2 border-amber-600 p-3.5 text-xs text-amber-950 flex items-start justify-between gap-3 shadow-2xs">
        <div className="flex items-start gap-2.5">
          <span className="bg-amber-600 text-white font-bold px-2 py-0.5 text-[10px] uppercase tracking-wider shrink-0 mt-0.5">
            GOVT NOTIFICATION
          </span>
          <div>
            <span className="font-bold">SIH 2026 Innovation Initiative:</span> IP-SAKTI Sahayak integrates Indian Patent Office (IP India) guidelines, CSIR TKDL repository, National Biodiversity Authority (NBA) rules, and AYUSH drug standards into a unified source-grounded AI decision matrix.
          </div>
        </div>
        <span className="text-[11px] font-mono text-amber-900 shrink-0 font-semibold">
          Ref: SIH26045 / Kaizzen
        </span>
      </div>

      {/* Main Government Portal Hero Assistant Section */}
      <div className="gov-box border-t-4 border-t-slate-900 bg-white p-6">
        <div className="border-b border-slate-300 pb-4 mb-5">
          <div className="inline-block bg-slate-900 text-white text-[11px] font-bold px-2.5 py-0.5 uppercase tracking-wider mb-2">
            NATIONAL DIGITAL KNOWLEDGE PORTAL
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            IP-SAKTI — Sahayak
          </h1>
          <h2 className="text-base font-bold text-amber-700 mt-0.5">
            Ayurveda IPR & Regulatory Assistance Platform
          </h2>
          <p className="text-xs text-slate-700 mt-2 max-w-4xl leading-relaxed">
            Multilingual, source-grounded assistance for Intellectual Property, traditional knowledge, biodiversity and regulatory guidance related to Ayurveda. Designed to empower researchers, Ayurveda practitioners, MSMEs, startups, and regulatory officers.
          </p>
        </div>

        {/* Assistant Query Form Box */}
        <div className="bg-slate-50 border-2 border-slate-700 p-5 shadow-xs">
          <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-1.5">
            <Search className="w-4 h-4 text-amber-600" />
            <span>ASK YOUR QUESTION ABOUT AYURVEDA, INTELLECTUAL PROPERTY OR REGULATIONS</span>
          </label>

          <form onSubmit={handleSearchSubmit} className="space-y-3">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your question here (e.g. Can this Ayurvedic formulation be patented under Section 3(p)?)"
                className="w-full bg-white border-2 border-slate-400 p-3 pr-24 text-sm text-slate-900 font-medium focus:border-slate-900 focus:outline-none placeholder-slate-400"
              />
              <button
                type="button"
                onClick={onOpenVoiceModal}
                className="absolute right-2 top-2 bg-slate-800 hover:bg-slate-900 text-amber-400 px-2.5 py-1 text-xs font-bold flex items-center gap-1 border border-slate-600"
                title="Speak query via BHASHINI Voice Input"
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>Voice</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs text-slate-600">
                <span className="font-bold text-slate-800">Supported Context:</span>
                <span className="bg-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-800">Patents Act 1970</span>
                <span className="bg-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-800">TKDL</span>
                <span className="bg-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-800">NBA ABS</span>
                <span className="bg-slate-200 px-2 py-0.5 text-[11px] font-semibold text-slate-800">AYUSH Rule 158B</span>
              </div>

              <button
                type="submit"
                className="gov-btn bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-6 py-2.5 flex items-center gap-2 shadow-xs"
              >
                <Search className="w-4 h-4 text-amber-400" />
                <span>Search Sahayak AI</span>
              </button>
            </div>
          </form>

          {/* Sample Example Questions */}
          <div className="mt-4 pt-3 border-t border-slate-300">
            <span className="text-[11px] font-bold text-slate-700 block mb-2 uppercase">
              EXAMPLE FREQUENTLY ASKED QUERIES (CLICK TO RUN DEMO):
            </span>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_QUESTIONS.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleExampleClick(q)}
                  className="bg-white hover:bg-amber-50 text-slate-800 text-xs px-2.5 py-1 border border-slate-400 text-left hover:border-amber-600 font-medium transition-colors"
                >
                  "{q}"
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Quick Services Grid */}
      <div>
        <div className="flex items-center justify-between mb-3 border-b-2 border-slate-900 pb-1.5">
          <h2 className="text-base font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2">
            <Building2 className="w-5 h-5 text-amber-700" />
            OFFICIAL QUICK SERVICES & PORTALS
          </h2>
          <span className="text-xs text-slate-600 font-medium">Select a domain module to proceed</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <ServiceCard
            title="1. IPR Assistant & Patent Search"
            description="Assess patentability under Section 3(p) TK exclusions, Section 3(e) synergistic effect claims, and trademark/GI rules."
            to="/assistant"
            icon={ShieldCheck}
            tag="PATENT & TRADEMARK"
            color="navy"
          />

          <ServiceCard
            title="2. Traditional Knowledge Search"
            description="Search Charaka, Sushruta, Astanga Hridaya and TKDL records to identify prior art and protect indigenous formulations."
            to="/traditional-knowledge"
            icon={BookOpen}
            tag="TKDL PRIOR ART"
            color="saffron"
          />

          <ServiceCard
            title="3. Product & Regulatory Guidance"
            description="Classify herbal formulations into Ayurvedic Proprietary Medicine, Classical Medicine, or FSSAI Ayush Aahar."
            to="/regulatory-guidance"
            icon={FileCheck2}
            tag="AYUSH & FSSAI"
            color="green"
          />

          <ServiceCard
            title="4. Biodiversity & ABS Compliance"
            description="Evaluate Access and Benefit Sharing (ABS) applicability under National Biodiversity Authority (NBA) rules for commercialization."
            to="/biodiversity-abs"
            icon={Leaf}
            tag="NBA BIODIVERSITY"
            color="navy"
          />

          <ServiceCard
            title="5. Knowledge Sources Directory"
            description="Explore full indexed statutory databases including India Code, IP India examination guidelines, WIPO treaties, and PCIM&H."
            to="/sources"
            icon={Database}
            tag="STATUTORY SOURCES"
            color="saffron"
          />

          <ServiceCard
            title="6. Unified Legal Document Search"
            description="Cross-search legal acts, gazette notifications, Supreme Court/IPAB precedents, and regulatory checklists."
            to="/search"
            icon={Search}
            tag="SEARCH REPOSITORY"
            color="green"
          />
        </div>
      </div>

      {/* Official Architecture & System Metrics Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* System Statistics Table */}
        <div className="gov-box lg:col-span-2">
          <div className="gov-box-header">
            <span>OFFICIAL SYSTEM STATUS & KNOWLEDGE REPOSITORY COVERAGE</span>
            <span className="bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 font-bold border border-emerald-300">LIVE PROTOTYPE</span>
          </div>
          <div className="p-4">
            <table className="gov-table">
              <thead>
                <tr>
                  <th>Knowledge Repository</th>
                  <th>Governing Authority</th>
                  <th>Documents / Records</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">IP India Patent & Trademark Registry</td>
                  <td>DPIIT, Ministry of Commerce</td>
                  <td className="font-mono">428,500 Inventions</td>
                  <td><span className="badge-high">INDEXED</span></td>
                </tr>
                <tr>
                  <td className="font-bold">Traditional Knowledge Digital Library (TKDL)</td>
                  <td>CSIR & Ministry of AYUSH</td>
                  <td className="font-mono">412,000 Formulations</td>
                  <td><span className="badge-high">INDEXED</span></td>
                </tr>
                <tr>
                  <td className="font-bold">India Code Central Acts & Notifications</td>
                  <td>Ministry of Law & Justice</td>
                  <td className="font-mono">185,000 Acts/Rules</td>
                  <td><span className="badge-high">INDEXED</span></td>
                </tr>
                <tr>
                  <td className="font-bold">NBA Access & Benefit Sharing Database</td>
                  <td>National Biodiversity Authority</td>
                  <td className="font-mono">34,200 Approvals</td>
                  <td><span className="badge-high">INDEXED</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="gov-box gov-box-saffron flex flex-col justify-between">
          <div className="gov-box-header">
            <span>MANDATORY LEGAL DISCLAIMER</span>
            <AlertCircle className="w-4 h-4 text-amber-700" />
          </div>
          <div className="p-4 text-xs text-slate-800 leading-relaxed space-y-2">
            <p>
              Sahayak is an AI decision support tool developed under <strong>Smart India Hackathon 2026</strong>. It provides source-grounded preliminary information based on available government databases.
            </p>
            <p className="bg-amber-50 p-2.5 border border-amber-300 font-semibold text-[11px] text-amber-950">
              Output does not replace professional legal counsel, official patent office examination, or statutory clearances from NBA / AYUSH.
            </p>
          </div>
          <div className="p-4 pt-0">
            <a href="#/about" className="gov-btn gov-btn-outline w-full text-xs justify-center">
              Read Complete Disclaimer & Architecture
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
