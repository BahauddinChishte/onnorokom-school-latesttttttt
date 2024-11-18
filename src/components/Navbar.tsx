import { useState, useEffect } from 'react';
import { BookOpen, Users, Heart, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, toggleLanguage, language } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <nav className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-primary-600" />
            <span className="font-bold text-xl text-gray-900">EduHub</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('subjects')}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span>{t('nav.start')}</span>
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Users className="w-4 h-4" />
              <span>{t('nav.about')}</span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
            >
              <Heart className="w-4 h-4" />
              <span>{t('nav.contact')}</span>
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-gray-600 hover:text-primary-600 transition-colors"
              aria-label="Toggle language"
            >
              <Globe className="w-4 h-4" />
              <span>{language === 'bn' ? 'EN' : 'বাং'}</span>
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="p-2 text-gray-600 hover:text-primary-600"
              aria-label="Toggle language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md md:hidden" style={{ top: '64px' }}>
          <div className="flex flex-col p-4 space-y-2">
            <button
              onClick={() => scrollToSection('subjects')}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors active:bg-primary-100"
            >
              <BookOpen className="w-5 h-5" />
              <span className="text-lg">{t('nav.start')}</span>
            </button>
            
            <button
              onClick={() => scrollToSection('about')}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors active:bg-primary-100"
            >
              <Users className="w-5 h-5" />
              <span className="text-lg">{t('nav.about')}</span>
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="flex items-center gap-3 px-4 py-3 text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors active:bg-primary-100"
            >
              <Heart className="w-5 h-5" />
              <span className="text-lg">{t('nav.contact')}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}