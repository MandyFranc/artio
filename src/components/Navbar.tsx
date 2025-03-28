
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import BetaSignupForm from '@/components/BetaSignupForm';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 dark:bg-artGray-900/90 shadow-md backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-2" aria-label="Artio home">
            <span className="text-xl font-display font-bold bg-clip-text text-transparent art-gradient">Artio</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
            <a href="#how-it-works" className="text-artGray-700 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
              How It Works
            </a>
            <a href="#features" className="text-artGray-700 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
              Features
            </a>
            <a href="#demo" className="text-artGray-700 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors">
              Demo
            </a>
            <BetaSignupForm />
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-artGray-800 dark:text-artGray-200"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 flex flex-col space-y-4 mt-2" aria-label="Mobile navigation">
            <a 
              href="#how-it-works" 
              className="text-artGray-700 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#features" 
              className="text-artGray-700 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#demo" 
              className="text-artGray-700 dark:text-artGray-300 hover:text-artPurple-500 dark:hover:text-artPurple-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Demo
            </a>
            <div className="w-full">
              <BetaSignupForm />
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
