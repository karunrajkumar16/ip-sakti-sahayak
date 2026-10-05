import React from 'react';
import { Globe, Eye, Volume2 } from 'lucide-react';
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
    <div className="gov-top-bar px-4 py-1.5 text-xs">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
        {/* Left: Official Government Tag */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-amber-400 tracking-wide">
            भारत सरकार | GOVERNMENT OF INDIA
          </span>
          <span className="text-slate-600 hidden sm:inline">|</span>
          <span className="text-slate-300 hidden md:inline">
            Ministry of AYUSH & DPIIT (Ministry of Commerce & Industry)
          </span>
        </div>

        {/* Right: Tools & Accessibility */}
        <div className="flex items-center gap-3 flex-wrap">
          <a href="#main-content" className="text-slate-300 hover:text-white text-[11px] underline">
            Skip to Main Content
          </a>

          <span className="text-slate-600">|</span>

          <button
            onClick={onOpenVoiceModal}
            className="flex items-center gap-1 bg-amber-600 hover:bg-amber-700 text-white px-2 py-0.5 text-[11px] font-bold"
            title="BHASHINI Voice Assistant"
          >
            <Volume2 className="w-3 h-3" />
            <span>BHASHINI Voice</span>
          </button>

          <span className="text-slate-600">|</span>

          <div className="flex items-center gap-1 bg-slate-900 px-2 py-0.5 border border-slate-700 text-[11px]">
            <span className="text-slate-400 font-semibold mr-1">Text:</span>
            <button
              onClick={() => handleFontChange('sm')}
              className={`px-1.5 font-bold ${fontSize === 'sm' ? 'bg-amber-500 text-black' : 'text-slate-300 hover:text-white'}`}
            >
              A-
            </button>
            <button
              onClick={() => handleFontChange('md')}
              className={`px-1.5 font-bold ${fontSize === 'md' ? 'bg-amber-500 text-black' : 'text-slate-300 hover:text-white'}`}
            >
              A
            </button>
            <button
              onClick={() => handleFontChange('lg')}
              className={`px-1.5 font-bold ${fontSize === 'lg' ? 'bg-amber-500 text-black' : 'text-slate-300 hover:text-white'}`}
            >
              A+
            </button>
            <button
              onClick={handleContrastToggle}
              className={`px-1.5 font-bold ml-1 ${isHighContrast ? 'bg-yellow-300 text-black' : 'text-slate-300 hover:text-white'}`}
              title="Toggle High Contrast"
            >
              <Eye className="w-3 h-3 inline" />
            </button>
          </div>

          <span className="text-slate-600">|</span>

          <div className="flex items-center gap-1">
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <select
              value={currentLanguage}
              onChange={(e) => onLanguageChange(e.target.value)}
              className="bg-slate-900 text-white text-[11px] px-2 py-0.5 border border-slate-700 focus:outline-none focus:border-amber-500 font-semibold"
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
    </div>
  );
}
