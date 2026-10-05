import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Activity } from 'lucide-react';
import { expertService } from '../services/expertService';
import { GOVERNMENT_SOURCES } from '../data/sources';

export default function Admin() {
  const [activeTab, setActiveTab] = useState('overview');
  const [escalations, setEscalations] = useState([]);

  useEffect(() => {
    expertService.getAllEscalations().then(data => setEscalations(data));
  }, []);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-[#002147] text-white p-4 border-b-4 border-amber-600 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-amber-400" />
            <h1 className="text-lg font-bold tracking-wide">
              ADMINISTRATIVE & SYSTEM METRICS DASHBOARD
            </h1>
          </div>
          <p className="text-xs text-slate-300 mt-1 max-w-xl">
            System status monitoring, vector index synchronization, query audit logs, and expert escalation management.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="bg-emerald-950 text-emerald-300 font-mono text-xs px-3 py-1.5 border border-emerald-500 flex items-center gap-1.5 font-bold">
            <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
            <span>SYSTEM NORMAL (100% UPTIME)</span>
          </span>
        </div>
      </div>

      {/* Admin Tab Bar */}
      <div className="bg-slate-900 text-white flex overflow-x-auto border-b-2 border-slate-900 text-xs">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-2.5 font-bold uppercase ${activeTab === 'overview' ? 'bg-[#002147] text-amber-400 border-b-2 border-amber-500' : 'text-slate-300 hover:text-white'}`}
        >
          System Overview
        </button>
        <button
          onClick={() => setActiveTab('sources')}
          className={`px-4 py-2.5 font-bold uppercase ${activeTab === 'sources' ? 'bg-[#002147] text-amber-400 border-b-2 border-amber-500' : 'text-slate-300 hover:text-white'}`}
        >
          Knowledge Sources ({GOVERNMENT_SOURCES.length})
        </button>
        <button
          onClick={() => setActiveTab('escalations')}
          className={`px-4 py-2.5 font-bold uppercase ${activeTab === 'escalations' ? 'bg-[#002147] text-amber-400 border-b-2 border-amber-500' : 'text-slate-300 hover:text-white'}`}
        >
          Expert Escalation Queue ({escalations.length})
        </button>
      </div>

      {/* Main Tab View */}
      {activeTab === 'overview' && (
        <div className="space-y-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="gov-box border-t-4 border-t-[#002147] p-4 bg-white">
              <span className="text-[11px] font-bold text-slate-600 uppercase block">Total Documents Indexed</span>
              <span className="text-2xl font-black font-mono text-slate-900 mt-1 block">1,845,200</span>
              <span className="text-[11px] text-emerald-800 font-bold">Vector Index Synced</span>
            </div>

            <div className="gov-box border-t-4 border-t-amber-600 p-4 bg-white">
              <span className="text-[11px] font-bold text-slate-600 uppercase block">Knowledge Repositories</span>
              <span className="text-2xl font-black font-mono text-amber-700 mt-1 block">8 Active</span>
              <span className="text-[11px] text-slate-600">IP India, TKDL, NBA</span>
            </div>

            <div className="gov-box border-t-4 border-t-blue-800 p-4 bg-white">
              <span className="text-[11px] font-bold text-slate-600 uppercase block">Queries Processed Today</span>
              <span className="text-2xl font-black font-mono text-blue-900 mt-1 block">1,420</span>
              <span className="text-[11px] text-emerald-800 font-bold">+12% vs yesterday</span>
            </div>

            <div className="gov-box border-t-4 border-t-red-700 p-4 bg-white">
              <span className="text-[11px] font-bold text-slate-600 uppercase block">Pending Escalations</span>
              <span className="text-2xl font-black font-mono text-red-800 mt-1 block">{escalations.length}</span>
              <span className="text-[11px] text-red-700 font-bold">Review Queue Active</span>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'sources' && (
        <div className="gov-box p-5 bg-white border-t-4 border-t-[#002147] space-y-4">
          <h3 className="font-bold text-slate-900 text-xs uppercase">Indexed Government Sources</h3>
          <div className="overflow-x-auto">
            <table className="gov-table">
              <thead>
                <tr>
                  <th>Code</th>
                  <th>Source Title</th>
                  <th>Authority</th>
                  <th>Indexed Documents</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {GOVERNMENT_SOURCES.map((src) => (
                  <tr key={src.id}>
                    <td className="font-mono text-xs font-bold">{src.code}</td>
                    <td className="font-bold text-slate-900">{src.title}</td>
                    <td className="text-slate-700 text-xs">{src.authority}</td>
                    <td className="font-mono text-xs font-bold">{src.documentCount.toLocaleString()}</td>
                    <td><span className="badge-high">INDEXED</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'escalations' && (
        <div className="gov-box p-5 bg-white border-t-4 border-t-amber-600 space-y-4">
          <h3 className="font-bold text-slate-900 text-xs uppercase">Pending Expert Escalation Requests</h3>
          {escalations.length === 0 ? (
            <p className="text-slate-500 text-xs py-8 text-center">No pending escalations in queue.</p>
          ) : (
            <div className="space-y-3">
              {escalations.map((esc) => (
                <div key={esc.id} className="p-4 bg-slate-50 border border-slate-300 text-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-slate-900">{esc.userName} ({esc.organization})</span>
                    <span className="badge-medium">{esc.status}</span>
                  </div>
                  <p className="text-slate-800"><strong>Query:</strong> {esc.query}</p>
                  <p className="text-slate-500 text-[11px]">Submitted on {esc.submittedAt}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
