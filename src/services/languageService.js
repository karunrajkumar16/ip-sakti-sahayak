// BHASHINI & IndicTrans2 Multilingual Translation & Voice Input Service Mock

export const SUPPORTED_LANGUAGES = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
  { code: 'mr', name: 'Marathi', native: 'मराठी' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ' },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ' }
];

export const UI_TRANSLATIONS = {
  en: {
    portalTitle: 'IP-SAKTI — Sahayak',
    subtitle: 'Ayurveda IPR & Regulatory Assistant',
    tagline: 'Multilingual, source-grounded assistance for Intellectual Property, traditional knowledge, biodiversity and regulatory guidance related to Ayurveda.',
    askPlaceholder: 'Ask your question about Ayurveda, Intellectual Property, traditional knowledge or regulations...',
    searchBtn: 'Search Sahayak',
    voiceBtn: 'Voice Input (BHASHINI)',
    confidenceHigh: 'High Confidence — Supported by official sources',
    confidenceMedium: 'Moderate Confidence — Verification suggested',
    confidenceLow: 'Low Confidence — Insufficient evidence',
    escalateBtn: 'Escalate to Expert',
    viewSource: 'View Official Source'
  },
  hi: {
    portalTitle: 'आईपी-शक्ति — सहायक',
    subtitle: 'आयुर्वेद बौद्धिक संपदा एवं नियामक सहायक',
    tagline: 'आयुर्वेद से संबंधित बौद्धिक संपदा, पारंपरिक ज्ञान, जैव विविधता और नियामक मार्गदर्शन के लिए बहुभाषी, स्रोत-आधारित सहायता।',
    askPlaceholder: 'आयुर्वेद, बौद्धिक संपदा या नियमों के बारे में अपना प्रश्न पूछें...',
    searchBtn: 'सहायक खोजें',
    voiceBtn: 'वाणी इनपुट (भाषिणी)',
    confidenceHigh: 'उच्च विश्वसनीयता — आधिकारिक स्रोतों द्वारा समर्थित',
    confidenceMedium: 'मध्यम विश्वसनीयता — सत्यापन का सुझाव',
    confidenceLow: 'निम्न विश्वसनीयता — अपर्याप्त साक्ष्य',
    escalateBtn: 'विशेषज्ञ को प्रेषित करें',
    viewSource: 'आधिकारिक स्रोत देखें'
  }
};

export const languageService = {
  async simulateVoiceRecognition(languageCode = 'hi') {
    await new Promise(res => setTimeout(res, 2200)); // Simulate speech-to-text processing
    return {
      success: true,
      audioProcessed: true,
      transcribedText: languageCode === 'hi'
        ? "क्या इस आयुर्वेदिक औषधि फॉर्मूलेशन का पेटेंट भारत में कराया जा सकता है?"
        : "Can this Ayurvedic formulation be patented under Indian Patent Law?",
      detectedLanguage: languageCode,
      confidenceScore: 0.98,
      engine: 'BHASHINI ASR v2.1'
    };
  },

  async translateText(text, targetLang = 'en') {
    await new Promise(res => setTimeout(res, 400));
    return {
      originalText: text,
      translatedText: text,
      targetLang,
      engine: 'IndicTrans2 NMT'
    };
  }
};
