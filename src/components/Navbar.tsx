
import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [menuHovered, setMenuHovered] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const langMenuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  // Use the Chinese company name when viewing in Chinese, otherwise use "Curæted"
  const companyName = i18n.language === 'cn' ? '醇雅特' : 'Curæted';

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    setLanguageMenuOpen(false);
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuHovered(false);
      }
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
    setMenuHovered(false);
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
          {/* Logo */}
          <img 
            src="/lovable-uploads/b52c32c0-29a6-40cc-9e20-14b9f336b4a3.png" 
            alt="Curæted Logo" 
            className="w-10 h-10 mr-2"
          />
          <span className="font-poppins">{companyName}</span>
        </NavLink>

        {/* Right side navigation items - menu and language */}
        <div className="flex items-center space-x-6">
          {/* Language selector */}
          <div className="relative" ref={langMenuRef}>
            <button 
              onMouseEnter={() => setLanguageMenuOpen(true)}
              className="flex items-center text-black hover:text-gray-600 transition-colors"
              aria-label="Select language"
            >
              <Globe size={24} />
            </button>
            
            {languageMenuOpen && (
              <div 
                className="absolute right-0 mt-2 py-2 w-32 bg-white shadow-lg rounded-md z-50 transition-opacity duration-300 ease-in-out"
                onMouseLeave={() => setLanguageMenuOpen(false)}
              >
                <button 
                  onClick={() => changeLanguage('en')}
                  className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 font-roboto ${i18n.language === 'en' ? 'font-bold' : ''}`}
                >
                  English (EN)
                </button>
                <button 
                  onClick={() => changeLanguage('es')}
                  className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 font-roboto ${i18n.language === 'es' ? 'font-bold' : ''}`}
                >
                  Español (ES)
                </button>
                <button 
                  onClick={() => changeLanguage('cn')}
                  className={`block px-4 py-2 text-sm w-full text-left hover:bg-gray-100 font-roboto ${i18n.language === 'cn' ? 'font-bold' : ''}`}
                >
                  中文 (CN)
                </button>
              </div>
            )}
          </div>

          {/* Desktop Menu Icon and Dropdown */}
          <div className="hidden md:block relative" ref={menuRef}>
            <button
              className="text-sm font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600 flex items-center"
              onMouseEnter={() => setMenuHovered(true)}
              aria-label="Menu"
            >
              <Menu size={24} />
            </button>
            
            {menuHovered && (
              <div 
                className="absolute top-full right-0 mt-2 py-3 w-56 bg-white shadow-lg rounded-md z-50 transition-opacity duration-300 ease-in-out"
                onMouseLeave={() => setMenuHovered(false)}
              >
                <button 
                  onClick={() => scrollToSection('home')}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors font-roboto"
                >
                  {t('menu.home')}
                </button>
                <button 
                  onClick={() => scrollToSection('whatWeDo')}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors font-roboto"
                >
                  {t('menu.whatWeDo')}
                </button>
                <button 
                  onClick={() => scrollToSection('whereToFindUs')}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors font-roboto"
                >
                  {t('menu.whereToFindUs')}
                </button>
                <button 
                  onClick={() => scrollToSection('onlyTheFinest')}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors font-roboto"
                >
                  {t('menu.onlyTheFinest')}
                </button>
                <button 
                  onClick={() => scrollToSection('whyIberico')}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors font-roboto"
                >
                  {t('menu.whyIberico')}
                </button>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors font-roboto"
                >
                  {t('menu.about')}
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 transition-colors font-roboto"
                >
                  {t('menu.contact')}
                </button>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden flex items-center text-black"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
            className="text-xl font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600 font-roboto"
          >
            {t('menu.home')}
          </button>
          <button 
            onClick={() => scrollToSection('whatWeDo')}
            className="text-xl font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600 font-roboto"
          >
            {t('menu.whatWeDo')}
          </button>
          <button 
            onClick={() => scrollToSection('whereToFindUs')}
            className="text-xl font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600 font-roboto"
          >
            {t('menu.whereToFindUs')}
          </button>
          <button 
            onClick={() => scrollToSection('onlyTheFinest')}
            className="text-xl font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600 font-roboto"
          >
            {t('menu.onlyTheFinest')}
          </button>
          <button 
            onClick={() => scrollToSection('whyIberico')}
            className="text-xl font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600 font-roboto"
          >
            {t('menu.whyIberico')}
          </button>
          <button 
            onClick={() => scrollToSection('about')}
            className="text-xl font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600 font-roboto"
          >
            {t('menu.about')}
          </button>
          <button 
            onClick={() => scrollToSection('contact')}
            className="text-xl font-medium tracking-wide transition-colors duration-200 text-black hover:text-gray-600 font-roboto"
          >
            {t('menu.contact')}
          </button>
          
          <div className="mt-8 flex space-x-4">
            <button 
              onClick={() => changeLanguage('en')}
              className={`px-3 py-1 rounded-md font-roboto ${i18n.language === 'en' ? 'bg-black text-white' : 'text-black'}`}
            >
              EN
            </button>
            <button 
              onClick={() => changeLanguage('es')}
              className={`px-3 py-1 rounded-md font-roboto ${i18n.language === 'es' ? 'bg-black text-white' : 'text-black'}`}
            >
              ES
            </button>
            <button 
              onClick={() => changeLanguage('cn')}
              className={`px-3 py-1 rounded-md font-roboto ${i18n.language === 'cn' ? 'bg-black text-white' : 'text-black'}`}
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
