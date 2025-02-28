
import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-3 bg-white/90 backdrop-blur-md shadow-sm' : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <NavLink 
          to="/" 
          className="text-xl font-display font-semibold tracking-tight"
        >
          Curæted
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-sm font-medium tracking-wide transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-sm font-medium tracking-wide transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `text-sm font-medium tracking-wide transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-sm font-medium tracking-wide transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`
            }
          >
            Contact
          </NavLink>
          <button className="btn-primary">Get Started</button>
        </nav>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden flex items-center text-primary"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-background z-40 transition-all duration-300 ease-in-out transform ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        } md:hidden`}
      >
        <div className="flex flex-col h-full justify-center items-center space-y-8 p-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `text-xl font-medium tracking-wide transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `text-xl font-medium tracking-wide transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/services" 
            className={({ isActive }) => 
              `text-xl font-medium tracking-wide transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`
            }
          >
            Services
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `text-xl font-medium tracking-wide transition-colors duration-200 ${
                isActive ? 'text-primary' : 'text-muted-foreground hover:text-primary'
              }`
            }
          >
            Contact
          </NavLink>
          <button className="btn-primary mt-4">Get Started</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
