import React, { useState, useEffect } from 'react';
import { Mic, Volume2, CheckCircle2, X, Globe, Radio } from 'lucide-react';
import { languageService, SUPPORTED_LANGUAGES } from '../../services/languageService';

export default function BhashiniVoiceModal({ currentLanguage = 'hi', onSelectQuery, onClose }) {
  const [step, setStep] = useState('LISTENING'); // 'LISTENING' | 'CONVERTED'
  const [selectedLang, setSelectedLang] = useState(currentLanguage);
  const [transcribedText, setTranscribedText] = useState('');

  useEffect(() => {
    let isMounted = true;
    const runVoiceRecognition = async () => {
      setStep('LISTENING');
      const res = await languageService.simulateVoiceRecognition(selectedLang);
      if (isMounted) {
        setTranscribedText(res.transcribedText);
        setStep('CONVERTED');
      }
    };
    runVoiceRecognition();
    return () => {
      isMounted = false;
    };
  }, [selectedLang]);

  const handleUseText = () => {
    onSelectQuery(transcribedText);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/70 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white border-2 border-slate-900 w-full max-w-md shadow-2xl flex flex-col">
        {/* Header */}
        <div className="bg-slate-900 text-white px-4 py-2.5 flex items-center justify-between border-b-2 border-amber-500">
          <div className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-amber-400" />
            <h3 className="font-bold text-xs uppercase tracking-wider">
              BHASHINI SPEECH-TO-TEXT ENGINE
            </h3>
          </div>
          <button onClick={onClose} className="text-slate-300 hover:text-white p-1">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 text-center space-y-4">
          <div className="flex items-center justify-center gap-2 bg-slate-100 p-2 border border-slate-300 text-xs text-slate-800">
            <Globe className="w-4 h-4 text-blue-800" />
            <span className="font-bold">Select Voice Language:</span>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="bg-white text-slate-900 text-xs font-semibold px-2 py-0.5 border border-slate-400 focus:outline-none"
            >
              {SUPPORTED_LANGUAGES.map((l) => (
                <option key={l.code} value={l.code}>
                  {l.native} ({l.name})
                </option>
              ))}
            </select>
          </div>

          {step === 'LISTENING' ? (
            <div className="py-6 space-y-4">
              <div className="relative w-20 h-20 bg-amber-100 border-4 border-amber-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
                <Mic className="w-10 h-10 text-amber-600 animate-bounce" />
                <span className="absolute -top-1 -right-1 flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-red-600"></span>
                </span>
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900 flex items-center justify-center gap-1.5">
                  <Radio className="w-4 h-4 text-red-600 animate-spin" />
                  Listening...
                </h4>
                <p className="text-xs text-slate-600 mt-1">
                  Speak your query about Ayurveda IPR or regulations in {SUPPORTED_LANGUAGES.find(l => l.code === selectedLang)?.name}...
                </p>
              </div>
              <div className="text-[11px] text-slate-400 font-mono">
                Engine: BHASHINI ASR (Automatic Speech Recognition)
              </div>
            </div>
          ) : (
            <div className="py-4 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-700">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <div>
                <span className="bg-emerald-100 text-emerald-900 font-bold px-2 py-0.5 text-[10px] uppercase border border-emerald-300">
                  Speech Converted to Text
                </span>
                <div className="mt-3 bg-amber-50 border-l-4 border-amber-600 p-3 text-left font-semibold text-slate-900 text-sm italic">
                  "{transcribedText}"
                </div>
              </div>

              <div className="flex items-center justify-center gap-3 pt-2">
                <button
                  onClick={() => setStep('LISTENING')}
                  className="gov-btn gov-btn-outline text-xs"
                >
                  Speak Again
                </button>
                <button
                  onClick={handleUseText}
                  className="gov-btn bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs px-4"
                >
                  Insert Query into Assistant
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
