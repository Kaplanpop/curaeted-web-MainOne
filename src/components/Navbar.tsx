
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleLanguageMenu = () => setLanguageMenuOpen(!languageMenuOpen);
  const closeLanguageMenu = () => setLanguageMenuOpen(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    closeLanguageMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white backdrop-blur-md shadow-sm' : 'py-5 bg-white'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <NavLink 
          to="/" 
          className="text-xl font-poppins font-semibold tracking-tight flex items-center"
        >
          {/* Placeholder pig logo */}
          <svg className="w-8 h-8 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 16 5C16 6.65685 17.3431 8 19 8Z" fill="black"/>
            <path d="M21 10H18.87C17.5 10 16.27 9.22 15.76 8C15.59 7.57 15.22 7 14.6 7H9.4C8.78 7 8.41 7.57 8.24 8C7.73 9.22 6.5 10 5.13 10H3C2.18 10 1.41 10.2 0.84 10.58C0.3 10.94 0 11.44 0 12V14C0 14.55 0.45 15 1 15H2V20C2 21.1 2.9 22 4 22H18C19.1 22 20 21.1 20 20V15H21C21.55 15 22 14.55 22 14V12C22 11.44 21.7 10.94 21.16 10.58C20.59 10.2 19.82 10 19 10H21Z" fill="black"/>
            <circle cx="7" cy="15" r="1.5" fill="white"/>
            <circle cx="15" cy="15" r="1.5" fill="white"/>
          </svg>
          <span>Iberico Finest</span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-sm font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600"
          >
            {t('menu.home')}
          </button>
          <button 
            onClick={() => scrollToSection('whatWeDo')}
            className="text-sm font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600"
          >
            {t('menu.whatWeDo')}
          </button>
          <button 
            onClick={() => scrollToSection('whereToFindUs')}
            className="text-sm font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600"
          >
            {t('menu.whereToFindUs')}
          </button>
          <button 
            onClick={() => scrollToSection('onlyTheFinest')}
            className="text-sm font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600"
          >
            {t('menu.onlyTheFinest')}
          </button>
          <button 
            onClick={() => scrollToSection('whyIberico')}
            className="text-sm font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600"
          >
            {t('menu.whyIberico')}
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-sm font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600"
          >
            {t('menu.about')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-sm font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600"
          >
            {t('menu.contact')}
          </button>
        </nav>

        {/* Language selector */}
        <div className="relative">
          <button 
            onClick={toggleLanguageMenu}
            className="flex items-center text-black hover:text-gray-600 transition-colors"
            aria-label="Select language"
          >
            <Globe size={24} />
          </button>
          
          {languageMenuOpen && (
            <div className="absolute right-0 mt-2 py-2 w-32 bg-white shadow-lg rounded-md z-50">
              <button 
                onClick={() => changeLanguage('en')}
                className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${i18n.language === 'en' ? 'font-bold' : ''}`}
              >
                English (EN)
              </button>
              <button 
                onClick={() => changeLanguage('es')}
                className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${i18n.language === 'es' ? 'font-bold' : ''}`}
              >
                Español (ES)
              </button>
              <button 
                onClick={() => changeLanguage('cn')}
                className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 ${i18n.language === 'cn' ? 'font-bold' : ''}`}
              >
                中文 (CN)
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex items-center text-black ml-4"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <button 
            onClick={() => scrollToSection('home')}
            className="text-xl font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600"
          >
            {t('menu.home')}
          </button>
          <button 
            onClick={() => scrollToSection('whatWeDo')}
            className="text-xl font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600"
          >
            {t('menu.whatWeDo')}
          </button>
          <button 
            onClick={() => scrollToSection('whereToFindUs')}
            className="text-xl font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600"
          >
            {t('menu.whereToFindUs')}
          </button>
          <button 
            onClick={() => scrollToSection('onlyTheFinest')}
            className="text-xl font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600"
          >
            {t('menu.onlyTheFinest')}
          </button>
          <button 
            onClick={() => scrollToSection('whyIberico')}
            className="text-xl font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600"
          >
            {t('menu.whyIberico')}
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-xl font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600"
          >
            {t('menu.about')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-xl font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600"
          >
            {t('menu.contact')}
          </button>
          
          <div className="mt-8 flex space-x-4">
            <button 
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 rounded-md ${i18n.language === 'en' ? 'bg-black text-white' : 'text-black'}`}
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage('es')}
              className={`px-3 py-1 rounded-md ${i18n.language === 'es' ? 'bg-black text-white' : 'text-black'}`}
            >
              ES
            </button>
            <button 
              onClick={() => changeLanguage('cn')}
              className={`px-3 py-1 rounded-md ${i18n.language === 'cn' ? 'bg-black text-white' : 'text-black'}`}
            >
              CN
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
