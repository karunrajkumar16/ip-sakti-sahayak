import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GovernmentTopBar from './components/layout/GovernmentTopBar';
import GovernmentHeader from './components/layout/GovernmentHeader';
import GovernmentNavbar from './components/layout/GovernmentNavbar';
import Breadcrumbs from './components/layout/Breadcrumbs';
import GovernmentFooter from './components/layout/GovernmentFooter';
import BhashiniVoiceModal from './components/assistant/BhashiniVoiceModal';

// Pages
import Home from './pages/Home';
import Assistant from './pages/Assistant';
import TraditionalKnowledge from './pages/TraditionalKnowledge';
import RegulatoryGuidance from './pages/RegulatoryGuidance';
import ABS from './pages/ABS';
import Sources from './pages/Sources';
import SearchPage from './pages/Search';
import About from './pages/About';
import Help from './pages/Help';
import Admin from './pages/Admin';

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [fontSize, setFontSize] = useState('md');
  const [isHighContrast, setIsHighContrast] = useState(false);
  const [showVoiceModal, setShowVoiceModal] = useState(false);

  const handleSelectQueryFromVoice = (transcribedText) => {
    window.location.href = `/assistant?q=${encodeURIComponent(transcribedText)}`;
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-slate-100 font-sans text-slate-900">
        {/* Government Top Bar */}
        <GovernmentTopBar
          currentLanguage={currentLanguage}
          onLanguageChange={setCurrentLanguage}
          fontSize={fontSize}
          setFontSize={setFontSize}
          isHighContrast={isHighContrast}
          setIsHighContrast={setIsHighContrast}
          onOpenVoiceModal={() => setShowVoiceModal(true)}
        />

        {/* Institutional Header */}
        <GovernmentHeader />

        {/* Horizontal Traditional Navigation Bar */}
        <GovernmentNavbar />

        {/* Breadcrumbs */}
        <Breadcrumbs />

        {/* Main Content Body */}
        <main id="main-content" className="flex-1 max-w-7xl w-full mx-auto px-4 py-6">
          <Routes>
            <Route path="/" element={<Home onOpenVoiceModal={() => setShowVoiceModal(true)} currentLanguage={currentLanguage} />} />
            <Route path="/assistant" element={<Assistant onOpenVoiceModal={() => setShowVoiceModal(true)} currentLanguage={currentLanguage} />} />
            <Route path="/traditional-knowledge" element={<TraditionalKnowledge />} />
            <Route path="/regulatory-guidance" element={<RegulatoryGuidance />} />
            <Route path="/biodiversity-abs" element={<ABS />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/help" element={<Help />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        {/* Government Footer */}
        <GovernmentFooter />

        {/* BHASHINI Voice Modal */}
        {showVoiceModal && (
          <BhashiniVoiceModal
            currentLanguage={currentLanguage}
            onSelectQuery={handleSelectQueryFromVoice}
            onClose={() => setShowVoiceModal(false)}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
