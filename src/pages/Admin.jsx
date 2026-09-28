import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Database, FileText, Activity, AlertTriangle, CheckCircle2, UserCheck, RefreshCw } from 'lucide-react';
import { expertService } from '../services/expertService';
import { GOVERNMENT_SOURCES } from '../data/sources';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'sources' | 'escalations' | 'logs'
  const [escalations, setEscalations] = useState([]);

  useEffect(() => {
    expertService.getAllEscalations().then(data => setEscalations(data));
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-slate-900 text-white p-4 border-b-4 border-amber-600 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-6 h-6 text-amber-400" />
            <h1 className="text-xl font-bold tracking-wide">
              ADMINISTRATIVE & KNOWLEDGE MANAGEMENT DASHBOARD
            </h1>
          </div>
          <p className="text-xs text-slate-300 mt-0.5">
            System status monitoring, vector index synchronization, query logs, and expert escalation management.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-emerald-900 text-emerald-300 font-mono text-xs px-2.5 py-1 border border-emerald-500 flex items-center gap-1 font-bold">
            <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            SYSTEM NORMAL (100% UPTIME)
          </span>
        </div>
      </div>

      {/* Admin Tab Bar */}
      <div className="bg-slate-800 text-white flex overflow-x-auto border-b-2 border-slate-900 text-xs">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2.5 font-bold uppercase ${activeTab === 'overview' ? 'bg-slate-900 text-amber-400 border-b-2 border-amber-500' : 'text-slate-300 hover:text-white'}`}
        >
          System Metrics
        </button>
        <button
          onClick={() => setActiveTab('sources')}
          className={`px-4 py-2.5 font-bold uppercase ${activeTab === 'sources' ? 'bg-slate-900 text-amber-400 border-b-2 border-amber-500' : 'text-slate-300 hover:text-white'}`}
        >
          Knowledge Sources ({GOVERNMENT_SOURCES.length})
        </button>
        <button
          onClick={() => setActiveTab('escalations')}
          className={`px-4 py-2.5 font-bold uppercase ${activeTab === 'escalations' ? 'bg-slate-900 text-amber-400 border-b-2 border-amber-500' : 'text-slate-300 hover:text-white'}`}
        >
          Expert Escalation Queue ({escalations.length})
        </button>
        <button
          onClick={() => setActiveTab('logs')}
          className={`px-4 py-2.5 font-bold uppercase ${activeTab === 'logs' ? 'bg-slate-900 text-amber-400 border-b-2 border-amber-500' : 'text-slate-300 hover:text-white'}`}
        >
          Vector Query Audit Logs
        </button>
      </div>

      {/* Main Tab View */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          {/* Key Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div className="bg-white border border-slate-300 border-t-4 border-t-slate-900 p-4">
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Total Documents Indexed</span>
              <span className="text-xl font-bold font-mono text-slate-900 mt-1 block">1,845,200</span>
              <span className="text-[10px] text-emerald-700 font-bold">Qdrant Vector DB</span>
            </div>

            <div className="bg-white border border-slate-300 border-t-4 border-t-amber-600 p-4">
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Knowledge Repositories</span>
              <span className="text-xl font-bold font-mono text-amber-700 mt-1 block">8 Active</span>
              <span className="text-[10px] text-slate-600 font-bold">IP India, TKDL, NBA...</span>
            </div>

            <div className="bg-white border border-slate-300 border-t-4 border-t-blue-800 p-4">
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Queries Handled Today</span>
              <span className="text-xl font-bold font-mono text-blue-900 mt-1 block">1,420</span>
              <span className="text-[10px] text-emerald-700 font-bold">+12% vs Yesterday</span>
            </div>

            <div className="bg-white border border-slate-300 border-t-4 border-t-amber-700 p-4">
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Low Confidence Queries</span>
              <span className="text-xl font-bold font-mono text-amber-800 mt-1 block">38</span>
              <span className="text-[10px] text-amber-700 font-bold">2.6% of total</span>
            </div>

            <div className="bg-white border border-slate-300 border-t-4 border-t-red-700 p-4">
              <span className="text-[10px] font-bold text-slate-500 uppercase block">Pending Expert Escalations</span>
              <span className="text-xl font-bold font-mono text-red-800 mt-1 block">{escalations.length}</span>
              <span className="text-[10px] text-red-700 font-bold">Action Required</span>
            </div>
          </div>

          {/* System Status Table */}
          <div className="gov-box">
            <div className="gov-box-header">
              <span>SYSTEM INFRASTRUCTURE STATUS</span>
            </div>
            <div className="p-4">
              <table className="gov-table">
                <thead>
                  <tr>
                    <th>Component</th>
                    <th>Technology</th>
                    <th>Latency / Load</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="font-bold">FastAPI API Gateway</td>
                    <td>Python 3.11 Uvicorn</td>
                    <td className="font-mono">42ms</td>
                    <td><span className="badge-high">OPERATIONAL</span></td>
                  </tr>
                  <tr>
                    <td className="font-bold">Qdrant Vector Engine</td>
                    <td>Vector HNSW Index</td>
                    <td className="font-mono">85ms (RAG retrieval)</td>
                    <td><span className="badge-high">OPERATIONAL</span></td>
                  </tr>
                  <tr>
                    <td className="font-bold">BHASHINI Speech & Translation API</td>
                    <td>IndicTrans2 / ASR</td>
                    <td className="font-mono">180ms</td>
                    <td><span className="badge-high">OPERATIONAL</span></td>
                  </tr>
                  <tr>
                    <td className="font-bold">LLM Synthesis Engine</td>
                    <td>Llama 3.1 / GPT-4o-mini</td>
                    <td className="font-mono">1.2s avg response</td>
                    <td><span className="badge-high">OPERATIONAL</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'sources' && (
        <div className="gov-box">
          <div className="gov-box-header">
            <span>CONNECTED GOVERNMENT KNOWLEDGE SOURCES</span>
          </div>
          <div className="p-4">
            <table className="gov-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Source Title</th>
                  <th>Authority</th>
                  <th>Records</th>
                  <th>Last Sync</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {GOVERNMENT_SOURCES.map((s) => (
                  <tr key={s.id}>
                    <td className="font-mono font-bold">{s.code}</td>
                    <td className="font-bold text-slate-900">{s.title}</td>
                    <td>{s.authority}</td>
                    <td className="font-mono">{s.documentCount.toLocaleString()}</td>
                    <td className="font-mono text-slate-600">{s.lastIndexed}</td>
                    <td><span className="badge-high">{s.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'escalations' && (
        <div className="gov-box">
          <div className="gov-box-header">
            <span>PENDING EXPERT ESCALATION REQUESTS QUEUE</span>
          </div>
          <div className="p-4">
            <table className="gov-table">
              <thead>
                <tr>
                  <th>Ref Number</th>
                  <th>Applicant Name</th>
                  <th>Category</th>
                  <th>Submitted At</th>
                  <th>Assigned Panel</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {escalations.map((esc) => (
                  <tr key={esc.referenceNumber}>
                    <td className="font-mono font-bold text-amber-700">{esc.referenceNumber}</td>
                    <td>
                      <span className="font-bold block text-slate-900">{esc.name}</span>
                      <span className="text-[10px] text-slate-500">{esc.email}</span>
                    </td>
                    <td className="font-semibold text-blue-900">{esc.category}</td>
                    <td className="font-mono text-xs">{esc.submittedAt}</td>
                    <td className="text-xs text-slate-800">{esc.assignedTo}</td>
                    <td><span className="badge-medium">{esc.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'logs' && (
        <div className="gov-box">
          <div className="gov-box-header">
            <span>RECENT RAG VECTOR QUERY AUDIT LOGS</span>
          </div>
          <div className="p-4 font-mono text-xs space-y-2 bg-slate-900 text-slate-200">
            <p>[2026-09-28 10:14:02] QUERY_EXEC: "Section 3(p) Ayurvedic formulation patentability" | RAG_FOUND: 3 docs | CONFIDENCE: HIGH (0.94)</p>
            <p>[2026-09-28 10:22:15] QUERY_EXEC: "Ashwagandha export ABS NBA form III clearance" | RAG_FOUND: 2 docs | CONFIDENCE: HIGH (0.91)</p>
            <p>[2026-09-28 10:35:40] QUERY_EXEC: "Proprietary nano curcumin liposome claim" | RAG_FOUND: 1 doc | CONFIDENCE: MEDIUM (0.72)</p>
            <p>[2026-09-28 10:48:11] QUERY_EXEC: "Custom secret herbal extraction process" | RAG_FOUND: 0 docs | CONFIDENCE: LOW (0.35) -&gt; ESCALATED</p>
          </div>
        </div>
      )}
    </div>
  );
}
