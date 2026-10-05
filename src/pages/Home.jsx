import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Volume2,
  BookOpen,
  ShieldCheck,
  FileCheck2,
  Leaf,
  ArrowRight,
  Building2,
  AlertCircle
} from 'lucide-react';
import ServiceCard from '../components/government/ServiceCard';

export default function Home({ onOpenVoiceModal }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/assistant?q=${encodeURIComponent(query)}`);
  };

  const handleScenarioClick = (scenarioText) => {
    navigate(`/assistant?q=${encodeURIComponent(scenarioText)}`);
  };

  const DIRECT_ACTIONS = [
    {
      title: "1. IPR & Patentability Assistant",
      desc: "Check Section 3(p) TK exclusions, Section 3(e) synergism proof, and patent guidelines.",
      to: "/assistant",
      icon: ShieldCheck,
      tag: "IP INDIA / DPIIT",
      color: "navy",
      query: "Can this Ayurvedic formulation be patented under Section 3(p)?"
    },
    {
      title: "2. Traditional Knowledge (TKDL) Search",
      desc: "Search Charaka, Sushruta, Astanga Hridaya & CSIR TKDL prior art repository.",
      to: "/traditional-knowledge",
      icon: BookOpen,
      tag: "CSIR & AYUSH",
      color: "saffron",
      query: "Is Ashwagandha and Guduchi stress formulation already in TKDL?"
    },
    {
      title: "3. AYUSH & FSSAI Product Licensing",
      desc: "Classify products into Classical Medicine, Proprietary Ayurveda, or Ayush Aahar.",
      to: "/regulatory-guidance",
      icon: FileCheck2,
      tag: "RULE 158B & FSSAI",
      color: "green",
      query: "What are the licensing requirements for Ayurvedic Proprietary Medicine under Rule 158B?"
    },
    {
      title: "4. Biodiversity & ABS Compliance",
      desc: "Calculate Access and Benefit Sharing (ABS) rates under National Biodiversity Authority.",
      to: "/biodiversity-abs",
      icon: Leaf,
      tag: "NBA BIODIVERSITY",
      color: "navy",
      query: "What is the NBA Access and Benefit Sharing royalty rate for exporting commercial herbs?"
    }
  ];

  const PRESET_SCENARIOS = [
    { title: "Ashwagandha Syrup Patentability", text: "Can an Ashwagandha syrup formulation be patented under Section 3(p)?" },
    { title: "Charaka Samhita Haridra Prior Art", text: "What is the recorded traditional use of Haridra in Charaka Samhita?" },
    { title: "Ayurvedic Proprietary Medicine License", text: "What are the licensing steps for Ayurvedic Proprietary Medicine under Rule 158B?" },
    { title: "NBA Biological Resource Export Rate", text: "What is the NBA ABS royalty rate for commercial export of medicinal plants?" }
  ];

  return (
    <div className="space-y-6">
      {/* Official Government Notification Banner */}
      <div className="bg-amber-50 border-2 border-amber-600 p-3.5 text-xs text-amber-950 flex items-start justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <span className="bg-amber-600 text-white font-bold px-2 py-0.5 text-[10px] uppercase tracking-wider shrink-0 mt-0.5">
            GOVT NOTIFICATION
          </span>
          <div>
            <span className="font-bold">SIH 2026 Innovation Portal:</span> IP-SAKTI Sahayak integrates Indian Patent Office (IP India) guidelines, CSIR TKDL repository, National Biodiversity Authority (NBA) rules, and AYUSH drug standards into a single decision matrix.
          </div>
        </div>
        <span className="text-[11px] font-mono text-amber-900 shrink-0 font-semibold hidden sm:inline">
          Ref: SIH26045 / Kaizzen
        </span>
      </div>

      {/* Main Government Portal Hero Assistant Box (Sharp Border-t-4) */}
      <div className="gov-box border-t-4 border-t-[#002147] bg-white p-6">
        <div className="border-b border-slate-300 pb-4 mb-5">
          <div className="inline-block bg-[#002147] text-white text-[11px] font-bold px-3 py-1 uppercase tracking-wider mb-2">
            NATIONAL DIGITAL KNOWLEDGE PORTAL
          </div>
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            IP-SAKTI — Sahayak (आईपी-शक्ति सहायक)
          </h1>
          <h2 className="text-sm font-bold text-amber-700 mt-1">
            Ayurveda IPR, Traditional Knowledge & Regulatory Assistance Platform
          </h2>
          <p className="text-xs text-slate-700 mt-2 max-w-4xl leading-relaxed">
            Source-grounded decision support for Intellectual Property, traditional Ayurvedic formulations, Access & Benefit Sharing (ABS), and AYUSH drug regulations.
          </p>
        </div>

        {/* Search Query Form (Sharp Inputs) */}
        <div className="bg-slate-50 border-2 border-slate-700 p-5">
          <label className="block text-xs font-bold text-slate-900 uppercase tracking-wide mb-2 flex items-center gap-1.5">
            <Search className="w-4 h-4 text-amber-600" />
            <span>ASK YOUR QUESTION OR CLICK A 1-TAP OPTION BELOW</span>
          </label>

          <form onSubmit={handleSearchSubmit} className="space-y-3">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type your question here (e.g., Can this Ayurvedic syrup formulation be patented under Section 3(p)?)"
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
                className="gov-btn bg-[#002147] hover:bg-[#0d3b66] text-white font-bold text-xs px-6 py-2.5 shadow-xs"
              >
                <Search className="w-4 h-4 text-amber-400" />
                <span>Search Sahayak AI</span>
              </button>
            </div>
          </form>

          {/* 1-Tap Preset Scenario Buttons */}
          <div className="mt-4 pt-3 border-t border-slate-300">
            <span className="text-[11px] font-bold text-slate-700 block mb-2 uppercase">
              1-CLICK PRESET SCENARIOS (NO TYPING REQUIRED):
            </span>
            <div className="flex flex-wrap gap-2">
              {PRESET_SCENARIOS.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleScenarioClick(item.text)}
                  className="bg-white hover:bg-amber-50 text-slate-800 text-xs px-3 py-1.5 border border-slate-400 text-left hover:border-amber-600 font-bold transition-colors flex items-center gap-1.5"
                >
                  <span>"{item.title}"</span>
                  <ArrowRight className="w-3 h-3 text-amber-600" />
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
          <span className="text-xs text-slate-600 font-medium">Select a module to proceed</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {DIRECT_ACTIONS.map((srv, index) => (
            <ServiceCard
              key={index}
              title={srv.title}
              description={srv.desc}
              to={srv.to}
              icon={srv.icon}
              tag={srv.tag}
              color={srv.color}
            />
          ))}
        </div>
      </div>

      {/* Knowledge Coverage Table & Disclaimer */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Coverage Table */}
        <div className="gov-box lg:col-span-8">
          <div className="gov-box-header">
            <span>OFFICIAL SYSTEM STATUS & KNOWLEDGE COVERAGE</span>
            <span className="badge-high">LIVE INDEXED</span>
          </div>
          <div className="p-4">
            <table className="gov-table">
              <thead>
                <tr>
                  <th>Knowledge Repository</th>
                  <th>Governing Authority</th>
                  <th>Indexed Records</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-bold">IP India Patent & Trademark Registry</td>
                  <td>DPIIT, Ministry of Commerce</td>
                  <td className="font-mono font-bold">428,500 Inventions</td>
                  <td><span className="badge-high">INDEXED</span></td>
                </tr>
                <tr>
                  <td className="font-bold">Traditional Knowledge Digital Library (TKDL)</td>
                  <td>CSIR & Ministry of AYUSH</td>
                  <td className="font-mono font-bold">412,000 Formulations</td>
                  <td><span className="badge-high">INDEXED</span></td>
                </tr>
                <tr>
                  <td className="font-bold">India Code Central Acts & Notifications</td>
                  <td>Ministry of Law & Justice</td>
                  <td className="font-mono font-bold">185,000 Acts/Rules</td>
                  <td><span className="badge-high">INDEXED</span></td>
                </tr>
                <tr>
                  <td className="font-bold">NBA Access & Benefit Sharing Database</td>
                  <td>National Biodiversity Authority</td>
                  <td className="font-mono font-bold">34,200 Approvals</td>
                  <td><span className="badge-high">INDEXED</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="gov-box gov-box-saffron lg:col-span-4 flex flex-col justify-between">
          <div>
            <div className="gov-box-header">
              <span>STATUTORY LEGAL DISCLAIMER</span>
              <AlertCircle className="w-4 h-4 text-amber-700" />
            </div>
            <div className="p-4 text-xs text-slate-800 leading-relaxed space-y-2">
              <p>
                Sahayak is an AI decision support tool developed under <strong>Smart India Hackathon 2026</strong>. It provides source-grounded preliminary information based on official government databases.
              </p>
              <p className="bg-amber-50 p-2.5 border border-amber-300 font-semibold text-[11px] text-amber-950">
                Outputs do not replace formal patent examination by IP India or official clearances from NBA / AYUSH.
              </p>
            </div>
          </div>
          <div className="p-4 pt-0">
            <a href="#/about" className="gov-btn gov-btn-outline w-full text-xs justify-center font-bold">
              Read Legal Framework & Architecture
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
