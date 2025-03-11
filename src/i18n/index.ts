
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import translationCN from './locales/cn/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN
  },
  es: {
    translation: translationES
  },
  cn: {
    translation: translationCN
  }
};

// Get the saved language from localStorage or use language detection
const savedLanguage = localStorage.getItem('language');

// Helper function to determine default language based on country code
const getDefaultLanguage = () => {
  try {
    // Check if we already have a saved language preference
    if (savedLanguage) {
      return savedLanguage;
    }

    // Get browser language (e.g., 'en-US', 'zh-CN')
    const browserLang = navigator.language || (navigator as any).userLanguage;
    
    // For Chinese regions (zh-CN, zh-HK, zh-TW, etc.)
    if (browserLang.toLowerCase().startsWith('zh')) {
      return 'cn';
    }
    
    // For Spanish regions (es-ES, es-MX, etc.)
    if (browserLang.toLowerCase().startsWith('es')) {
      return 'es';
    }
    
    // Default to English for all other regions
    return 'en';
  } catch (error) {
    console.error('Error determining language:', error);
    return 'en'; // Fallback to English
  }
};

i18n
  .use(LanguageDetector) // Use language detector
  .use(initReactI18next)
  .init({
    resources,
    lng: getDefaultLanguage(),
    fallbackLng: 'en',
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage']
    },
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
