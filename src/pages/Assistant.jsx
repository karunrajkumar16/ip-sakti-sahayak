import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  Send,
  Volume2,
  ShieldCheck,
  FileText,
  HelpCircle,
  RefreshCw,
  Search,
  BookOpen,
  Scale,
  ExternalLink
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

  // Run query if passed via URL
  useEffect(() => {
    if (initialQuery && conversations.length === 0) {
      handleQuerySubmit(initialQuery);
    }
  }, [initialQuery]);

  const handleQuerySubmit = async (queryText) => {
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
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleQuerySubmit(inputQuery);
  };

  const handleEscalateTrigger = (query) => {
    setEscalationInitialQuery(query);
    setShowExpertEscalation(true);
  };

  // Extract all retrieved sources across conversations for the Right Side Evidence Panel
  const allRetrievedSources = conversations.flatMap(c => c.botResponse?.sources || []);

  return (
    <div className="space-y-6">
      {/* Title Header */}
      <div className="bg-slate-900 text-white p-4 border-b-4 border-amber-600 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-amber-400" />
            <h1 className="text-xl font-bold tracking-wide">
              INTELLECTUAL PROPERTY RIGHTS ASSISTANT
            </h1>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            Ask questions about patents, Section 3(p) exclusions, trademarks, copyright, trade secrets and related Ayurvedic IP matters.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="font-bold text-slate-300">Jurisdiction:</span>
          <select
            value={selectedJurisdiction}
            onChange={(e) => setSelectedJurisdiction(e.target.value)}
            className="bg-slate-800 text-amber-300 font-bold border border-slate-600 px-2 py-1 text-xs focus:outline-none"
          >
            <option value="India">🇮🇳 India (IP India / Patents Act 1970)</option>
            <option value="WIPO">🌐 International (WIPO / PCT Framework)</option>
            <option value="USA">🇺🇸 USA (USPTO / DSHEA Compliance)</option>
            <option value="EU">🇪🇺 Europe (EPO / THMPD Rules)</option>
          </select>
        </div>
      </div>

      {/* Main Split Grid: LEFT = Conversation Area, RIGHT = Sources & Evidence */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* LEFT / MAIN: Conversation Area (8 cols) */}
        <div className="lg:col-span-8 space-y-4">
          {/* Conversation History */}
          <div className="min-h-[400px]">
            {conversations.length === 0 && !loading && (
              <div className="gov-box text-center py-12 space-y-3">
                <Scale className="w-12 h-12 text-slate-400 mx-auto" />
                <h3 className="font-bold text-slate-900 text-base">
                  Ready to Assist with Ayurvedic IPR Queries
                </h3>
                <p className="text-xs text-slate-600 max-w-md mx-auto">
                  Type your formulation details or legal question below. Sahayak will search IP India Patent Guidelines, TKDL prior art, and India Code statutes.
                </p>

                <div className="pt-4 flex flex-wrap justify-center gap-2 max-w-lg mx-auto">
                  <button
                    onClick={() => handleQuerySubmit("Can this Ayurvedic formulation be patented?")}
                    className="bg-slate-100 hover:bg-slate-200 border border-slate-300 px-3 py-1.5 text-xs text-slate-800 font-medium text-left"
                  >
                    "Can this Ayurvedic formulation be patented?"
                  </button>
                  <button
                    onClick={() => handleQuerySubmit("Is Ashwagandha and Guduchi stress formulation already in TKDL?")}
                    className="bg-slate-100 hover:bg-slate-200 border border-slate-300 px-3 py-1.5 text-xs text-slate-800 font-medium text-left"
                  >
                    "Is Ashwagandha and Guduchi stress formulation already in TKDL?"
                  </button>
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
              <div className="gov-box border-2 border-slate-700 p-6 text-center space-y-3">
                <RefreshCw className="w-8 h-8 text-amber-600 animate-spin mx-auto" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">
                    SEARCHING OFFICIAL KNOWLEDGE SOURCES & STATUTES...
                  </h4>
                  <p className="text-xs text-slate-500 mt-1">
                    Connecting to Qdrant Vector Index • IP India Guidelines • TKDL Formulations • India Code
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Input Box Bar */}
          <div className="gov-box border-t-4 border-t-slate-900">
            <form onSubmit={handleFormSubmit} className="space-y-3">
              <label className="block text-xs font-bold text-slate-900 uppercase">
                ENTER YOUR IPR OR LEGAL REGULATORY QUESTION:
              </label>

              <div className="relative">
                <textarea
                  rows={3}
                  value={inputQuery}
                  onChange={(e) => setInputQuery(e.target.value)}
                  placeholder="e.g. What are the requirements to prove synergistic effect under Section 3(e) for a polyherbal formulation?"
                  className="w-full bg-slate-50 border-2 border-slate-400 p-3 text-xs text-slate-900 focus:bg-white focus:border-slate-900 focus:outline-none"
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

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setConversations([])}
                    className="text-xs text-slate-500 hover:text-slate-800 underline px-2"
                  >
                    Clear History
                  </button>

                  <button
                    type="submit"
                    disabled={loading || !inputQuery.trim()}
                    className="gov-btn bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-5 py-2 shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Question</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/* RIGHT: Sources & Evidence Panel (4 cols) */}
        <div className="lg:col-span-4 space-y-4">
          <div className="gov-box gov-box-green">
            <div className="gov-box-header">
              <span className="flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-800" />
                SOURCES & EVIDENCE PANEL
              </span>
              <span className="bg-emerald-100 text-emerald-900 font-mono text-[10px] font-bold px-1.5">
                {allRetrievedSources.length} CITATIONS
              </span>
            </div>

            <div className="p-3 text-xs space-y-3 max-h-[600px] overflow-y-auto">
              {allRetrievedSources.length === 0 ? (
                <div className="text-slate-500 text-center py-8 text-xs">
                  <FileText className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <p>No query executed yet.</p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    Retrieved statutory sources and TKDL citations will appear here in document view format.
                  </p>
                </div>
              ) : (
                allRetrievedSources.map((src, i) => (
                  <div key={i} className="bg-slate-50 border border-slate-300 p-3 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="bg-slate-900 text-amber-400 font-mono font-bold text-[10px] px-1.5 py-0.5">
                        {src.sourceName}
                      </span>
                      <span className="text-[10px] text-slate-500">{src.indexedDate}</span>
                    </div>

                    <h5 className="font-bold text-slate-900 text-xs mt-1">
                      {src.documentTitle}
                    </h5>
                    <p className="text-slate-600 text-[11px]">
                      <strong>Authority:</strong> {src.authority}
                    </p>
                    <p className="text-blue-900 font-mono text-[11px]">
                      <strong>Provision:</strong> {src.section}
                    </p>

                    <button
                      onClick={() => setActiveSourceModal(src)}
                      className="mt-2 text-[11px] font-bold text-amber-700 hover:text-amber-900 underline flex items-center gap-1"
                    >
                      <span>View Full Source Record</span>
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* Quick Expert Escalation Trigger Box */}
          <div className="gov-box bg-amber-50/50 border-amber-300 p-4 text-xs space-y-2">
            <h4 className="font-bold text-amber-950 uppercase text-xs flex items-center gap-1.5">
              <HelpCircle className="w-4 h-4 text-amber-700" />
              REQUIRE FORMAL LEGAL OPINION?
            </h4>
            <p className="text-amber-900 text-[11px] leading-relaxed">
              If your formulation contains complex novelty aspects or low AI confidence, submit your query to the official Patent Office Expert Panel.
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
