import React, { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Send,
  Volume2,
  ShieldCheck,
  FileText,
  HelpCircle,
  RefreshCw,
  BookOpen,
  Scale,
  ExternalLink,
  ArrowRight
} from 'lucide-react';
import ChatMessage from '../components/assistant/ChatMessage';
import SourcePanel from '../components/assistant/SourcePanel';
import ExpertEscalationForm from '../components/assistant/ExpertEscalationForm';
import { ragService } from '../services/ragService';

export default function Assistant({ onOpenVoiceModal, currentLanguage }) {
  const [searchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [conversations, setConversations] = useState([]);
  const [inputQuery, setInputQuery] = useState(initialQuery);
  const [loading, setLoading] = useState(false);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState('India');

  // Modal States
  const [activeSourceModal, setActiveSourceModal] = useState(null);
  const [showExpertEscalation, setShowExpertEscalation] = useState(false);
  const [escalationInitialQuery, setEscalationInitialQuery] = useState('');

  const handleQuerySubmit = useCallback(async (queryText) => {
    if (!queryText.trim()) return;
    setLoading(true);

    try {
      const result = await ragService.queryAssistant({
        question: queryText,
        language: currentLanguage,
        jurisdiction: selectedJurisdiction
      });

      setConversations(prev => [...prev, result]);
      setInputQuery('');
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [currentLanguage, selectedJurisdiction]);

  const hasRunInitialRef = React.useRef(false);

  // Run query if passed via URL
  useEffect(() => {
    if (initialQuery && !hasRunInitialRef.current) {
      hasRunInitialRef.current = true;
      handleQuerySubmit(initialQuery);
    }
  }, [initialQuery, handleQuerySubmit]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleQuerySubmit(inputQuery);
  };

  const handleEscalateTrigger = (query) => {
    setEscalationInitialQuery(query);
    setShowExpertEscalation(true);
  };

  const allRetrievedSources = conversations.flatMap(c => c.botResponse?.sources || []);

  const QUICK_SCENARIOS = [
    { title: "Section 3(p) Patent Exclusions", text: "Can this Ayurvedic formulation be patented under Section 3(p) of the Patents Act?" },
    { title: "TKDL Prior Art Check", text: "Is Ashwagandha and Guduchi stress relief formulation already recorded in TKDL?" },
    { title: "AYUSH Rule 158B Licensing", text: "What are the regulatory licensing steps for Ayurvedic Proprietary Medicine under Rule 158B?" },
    { title: "NBA ABS Royalty Export Rate", text: "What is the NBA Access and Benefit Sharing (ABS) royalty rate for exporting commercial herbs?" }
  ];

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="bg-[#002147] text-white p-4 border-b-4 border-amber-600 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <h1 className="text-lg font-bold tracking-wide">
              INTELLECTUAL PROPERTY & REGULATORY SAHAYAK AI
            </h1>
          </div>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            Click any instant scenario below or type your question to receive source-grounded statutory decision support.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs bg-slate-900 border border-slate-700 px-3 py-1.5 font-bold">
          <span className="text-slate-300">Jurisdiction:</span>
          <select
            value={selectedJurisdiction}
            onChange={(e) => setSelectedJurisdiction(e.target.value)}
            className="bg-slate-900 text-amber-400 font-bold text-xs border border-slate-700 px-2 py-0.5 focus:outline-none"
          >
            <option value="India">India (Patents Act 1970)</option>
            <option value="WIPO">International (WIPO Framework)</option>
            <option value="USA">USA (USPTO / DSHEA)</option>
            <option value="EU">Europe (EPO / THMPD)</option>
          </select>
        </div>
      </div>

      {/* 1-Tap Quick Scenario Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {QUICK_SCENARIOS.map((sc, i) => (
          <button
            key={i}
            onClick={() => handleQuerySubmit(sc.text)}
            className="p-4 bg-white border-2 border-slate-300 hover:border-[#002147] text-left transition-all group flex flex-col justify-between"
          >
            <div>
              <div className="text-[10px] font-bold text-amber-800 bg-amber-100 px-1.5 py-0.5 inline-block mb-1 border border-amber-300 uppercase">
                1-CLICK SCENARIO
              </div>
              <div className="text-xs font-bold text-slate-900 group-hover:text-[#002147] transition-colors">
                {sc.title}
              </div>
            </div>
            <div className="mt-3 text-[11px] text-slate-600 flex items-center justify-between font-bold">
              <span>Run Scenario</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-700 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        ))}
      </div>

      {/* Main Split Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT: Conversation Area */}
        <div className="lg:col-span-8 space-y-4">
          <div className="min-h-[380px]">
            {conversations.length === 0 && !loading && (
              <div className="gov-box p-8 text-center space-y-3 bg-white">
                <Scale className="w-10 h-10 text-slate-400 mx-auto" />
                <div>
                  <h3 className="font-bold text-slate-900 text-base">
                    Sahayak AI Assistant Ready
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 max-w-md mx-auto leading-relaxed">
                    Click any 1-click option above, use the voice assistant, or type your question below.
                  </p>
                </div>
              </div>
            )}

            {conversations.map((msg) => (
              <ChatMessage
                key={msg.id}
                message={msg}
                onViewSource={(src) => setActiveSourceModal(src)}
                onEscalate={() => handleEscalateTrigger(msg.userMessage.text)}
              />
            ))}

            {loading && (
              <div className="gov-box border-2 border-slate-700 p-8 text-center space-y-3 bg-white">
                <RefreshCw className="w-8 h-8 text-amber-600 animate-spin mx-auto" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm uppercase">
                    Retrieving statutory citations & TKDL records...
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Connecting to IP India Guidelines • CSIR TKDL • India Code
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Search Box Bar */}
          <div className="gov-box border-t-4 border-t-[#002147] p-4 bg-white">
            <form onSubmit={handleFormSubmit} className="space-y-3">
              <label className="block text-xs font-bold text-slate-900 uppercase">
                ENTER YOUR IPR OR LEGAL REGULATORY QUESTION:
              </label>

              <div className="relative">
                <textarea
                  rows={3}
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder="Ask a question or click a 1-tap option above..."
                  className="w-full bg-slate-50 border-2 border-slate-400 p-3 text-xs text-slate-900 font-medium focus:bg-white focus:border-slate-900 focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={onOpenVoiceModal}
                  className="gov-btn gov-btn-outline text-xs"
                >
                  <Volume2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>BHASHINI Voice Input</span>
                </button>

                <div className="flex items-center gap-3">
                  {conversations.length > 0 && (
                    <button
                      type="button"
                      onClick={() => setConversations([])}
                      className="text-xs text-slate-500 hover:text-slate-800 underline font-medium"
                    >
                      Clear History
                    </button>
                  )}

                  <button
                    type="submit"
                    disabled={loading || !inputQuery.trim()}
                    className="gov-btn bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-6 py-2.5 shadow-xs disabled:opacity-50"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Question</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT: Sources & Evidence Panel */}
        <div className="lg:col-span-4 space-y-4">
          <div className="gov-box gov-box-green">
            <div className="gov-box-header">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-800" />
                STATUTORY EVIDENCE CITATIONS
              </span>
              <span className="badge-high">
                {allRetrievedSources.length} CITATIONS
              </span>
            </div>

            <div className="p-3 text-xs space-y-3 max-h-[500px] overflow-y-auto">
              {allRetrievedSources.length === 0 ? (
                <div className="text-slate-500 text-center py-10 text-xs">
                  <FileText className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p>No active citations yet.</p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Citations will appear automatically as queries run.
                  </p>
                </div>
              ) : (
                allRetrievedSources.map((src, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-300 p-3 text-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="bg-[#002147] text-amber-400 font-mono font-bold text-[10px] px-1.5 py-0.5">
                        {src.sourceName}
                      </span>
                      <span className="text-[10px] text-slate-500">{src.indexedDate}</span>
                    </div>

                    <h5 className="font-bold text-slate-900 text-xs mt-1">
                      {src.documentTitle}
                    </h5>
                    <p className="text-slate-600 text-[11px]">
                      {src.authority} • <span className="text-slate-900 font-mono">{src.section}</span>
                    </p>

                    <button
                      onClick={() => setActiveSourceModal(src)}
                      className="mt-2 text-[11px] font-bold text-amber-700 hover:text-amber-900 underline flex items-center gap-1"
                    >
                      <span>View Full Record</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Expert Escalation Box */}
          <div className="gov-box gov-box-saffron bg-amber-50/50 p-4 text-xs space-y-2">
            <h4 className="font-bold text-amber-950 uppercase text-xs flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-amber-700" />
              REQUIRE FORMAL LEGAL OPINION?
            </h4>
            <p className="text-amber-900 text-[11px] leading-relaxed">
              Submit your formulation details directly to the Patent Office Expert Panel.
            </p>
            <button
              onClick={() => handleEscalateTrigger(inputQuery)}
              className="gov-btn gov-btn-saffron w-full text-xs py-2 justify-center font-bold"
            >
              Request Expert Escalation
            </button>
          </div>
        </div>
      </div>

      {/* Modals */}
      {activeSourceModal && (
        <SourcePanel
          source={activeSourceModal}
          onClose={() => setActiveSourceModal(null)}
        />
      )}

      {showExpertEscalation && (
        <ExpertEscalationForm
          initialQuery={escalationInitialQuery}
          onClose={() => setShowExpertEscalation(false)}
        />
      )}
    </div>
  );
}
