import React from 'react';
import { Globe, Eye, ArrowUpRight, Volume2 } from 'lucide-react';
import { SUPPORTED_LANGUAGES } from '../../services/languageService';

export default function GovernmentTopBar({
  currentLanguage,
  onLanguageChange,
  fontSize,
  setFontSize,
  isHighContrast,
  setIsHighContrast,
  onOpenVoiceModal
}) {
  const handleReset = () => {
    setFontSize('md');
    setIsHighContrast(false);
    document.body.className = '';
  };

  const handleFontChange = (size) => {
    setFontSize(size);
    document.body.classList.remove('font-sm', 'font-lg');
    if (size === 'sm') document.body.classList.add('font-sm');
    if (size === 'lg') document.body.classList.add('font-lg');
  };

  const handleContrastToggle = () => {
    const nextState = !isHighContrast;
    setIsHighContrast(nextState);
    if (nextState) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  return (
    <div className="gov-top-bar px-4 py-1.5 flex flex-wrap items-center justify-between text-xs border-b border-slate-700">
      <div className="flex items-center gap-3 flex-wrap">
        <span className="font-semibold text-amber-400 flex items-center gap-1">
          🇮🇳 भारत सरकार | GOVERNMENT OF INDIA
        </span>
        <span className="text-slate-400">|</span>
        <span className="text-slate-300">
          Ministry of AYUSH & DPIIT (Ministry of Commerce & Industry)
        </span>
      </div>

      <div className="flex items-center gap-4 flex-wrap mt-1 sm:mt-0">
        {/* Skip to Content */}
        <a href="#main-content" className="text-slate-300 hover:text-white underline text-[11px]">
          Skip to Main Content
        </a>

        <span className="text-slate-500">|</span>

        {/* BHASHINI Voice Trigger */}
        <button
          onClick={onOpenVoiceModal}
          className="flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white px-2 py-0.5 rounded text-[11px] font-medium"
          title="Speak query in Indian Languages via BHASHINI"
        >
          <Volume2 className="w-3 h-3" />
          <span>BHASHINI Voice</span>
        </button>

        <span className="text-slate-500">|</span>

        {/* Accessibility Toolbar */}
        <div className="flex items-center gap-1 bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
          <span className="text-[11px] text-slate-300 mr-1 font-semibold">Text Size:</span>
          <button
            onClick={() => handleFontChange('sm')}
            className={`px-1.5 py-0.2 text-[11px] font-bold ${fontSize === 'sm' ? 'bg-amber-500 text-black' : 'text-slate-300 hover:text-white'}`}
            title="Decrease Text Size"
          >
            A-
          </button>
          <button
            onClick={() => handleFontChange('md')}
            className={`px-1.5 py-0.2 text-[11px] font-bold ${fontSize === 'md' ? 'bg-amber-500 text-black' : 'text-slate-300 hover:text-white'}`}
            title="Normal Text Size"
          >
            A
          </button>
          <button
            onClick={() => handleFontChange('lg')}
            className={`px-1.5 py-0.2 text-[11px] font-bold ${fontSize === 'lg' ? 'bg-amber-500 text-black' : 'text-slate-300 hover:text-white'}`}
            title="Increase Text Size"
          >
            A+
          </button>

          <span className="text-slate-600 mx-1">|</span>

          <button
            onClick={handleContrastToggle}
            className={`flex items-center gap-1 px-1.5 py-0.2 text-[11px] font-semibold ${isHighContrast ? 'bg-yellow-300 text-black' : 'text-slate-300 hover:text-white'}`}
            title="Toggle High Contrast"
          >
            <Eye className="w-3 h-3" />
            Contrast
          </button>

          <span className="text-slate-600 mx-1">|</span>

          <button
            onClick={handleReset}
            className="text-[10px] text-slate-400 hover:text-white underline"
          >
            Reset
          </button>
        </div>

        <span className="text-slate-500">|</span>

        {/* Language Selector */}
        <div className="flex items-center gap-1">
          <Globe className="w-3.5 h-3.5 text-amber-400" />
          <select
            value={currentLanguage}
            onChange={(e) => onLanguageChange(e.target.value)}
            className="bg-slate-800 text-white text-[11px] px-2 py-0.5 border border-slate-600 rounded focus:outline-none focus:ring-1 focus:ring-amber-500"
          >
            {SUPPORTED_LANGUAGES.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.native} ({lang.name})
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}
