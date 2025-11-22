/*
import React, { useState, useEffect } from 'react';
import { Menu, X, Languages } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isDark: boolean;
  isArabic: boolean;
  toggleTheme: () => void;
  toggleLanguage: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDark, isArabic, toggleTheme, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // تأكد من ظهور Navbar فوراً
    setIsLoaded(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${!isLoaded ? 'opacity-0' : 'opacity-100'} ${
      isScrolled 
        ? isDark 
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Omar Murrah</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              {isArabic ? 'عني' : 'About'}
            </a>
            <a href="#goals" className="hover:text-blue-400 transition-colors">
              {isArabic ? 'الأهداف' : 'Goals'}
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              {isArabic ? 'المهارات' : 'Skills'}
            </a>
            <a href="#languages" className="hover:text-blue-400 transition-colors">
              {isArabic ? 'اللغات' : 'Languages'}
            </a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">
              {isArabic ? 'الخبرة' : 'Experience'}
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              {isArabic ? 'المشاريع' : 'Projects'}
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              {isArabic ? 'التواصل' : 'Contact'}
            </a>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                aria-label="Toggle language"
              >
                <Languages size={20} />
              </button>
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
              aria-label="Toggle language"
            >
              <Languages size={20} />
            </button>
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 hover:text-blue-400 transition-colors">
              {isArabic ? 'عني' : 'About'}
            </a>
            <a href="#goals" className="block px-3 py-2 hover:text-blue-400 transition-colors">
              {isArabic ? 'الأهداف' : 'Goals'}
            </a>
            <a href="#skills" className="block px-3 py-2 hover:text-blue-400 transition-colors">
              {isArabic ? 'المهارات' : 'Skills'}
            </a>
            <a href="#languages" className="block px-3 py-2 hover:text-blue-400 transition-colors">
              {isArabic ? 'اللغات' : 'Languages'}
            </a>
            <a href="#experience" className="block px-3 py-2 hover:text-blue-400 transition-colors">
              {isArabic ? 'الخبرة' : 'Experience'}
            </a>
            <a href="#projects" className="block px-3 py-2 hover:text-blue-400 transition-colors">
              {isArabic ? 'المشاريع' : 'Projects'}
            </a>
            <a href="#contact" className="block px-3 py-2 hover:text-blue-400 transition-colors">
              {isArabic ? 'التواصل' : 'Contact'}
            </a>
            
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
*/
/*

import React, { useState, useEffect } from 'react';
import { Menu, X, Languages, ChevronLeft } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isDark: boolean;
  isArabic: boolean;
  toggleTheme: () => void;
  toggleLanguage: () => void;
   onBack?: (() => void) | null; // جديد
  
}

const Navbar: React.FC<NavbarProps> = ({ isDark, isArabic, toggleTheme, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // تأكد من ظهور Navbar فوراً
    setIsLoaded(true);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${!isLoaded ? 'opacity-0' : 'opacity-100'} ${
      isScrolled 
        ? isDark 
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' 
          : 'bg-white/95 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold">Omar Murrah</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">
              {isArabic ? 'عني' : 'About'}
            </a>
            <a href="#goals" className="hover:text-blue-400 transition-colors">
              {isArabic ? 'الأهداف' : 'Goals'}
            </a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">
              {isArabic ? 'المهارات' : 'Skills'}
            </a>
          
            <a href="#experience" className="hover:text-blue-400 transition-colors">
              {isArabic ? 'الخبرة' : 'Experience'}
            </a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">
              {isArabic ? 'المشاريع' : 'Projects'}
            </a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">
              {isArabic ? 'التواصل' : 'Contact'}
            </a>
            <div className="flex items-center space-x-4">
              <div className={`flex items-center ${isArabic ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
                <button
                  onClick={toggleLanguage}
                  className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                  aria-label="Toggle language"
                >
                  <Languages size={20} />
                </button>
                <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
              </div>
            </div>
          </div>

          <div className={`md:hidden flex items-center ${isArabic ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <div className={`flex items-center ${isArabic ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
                aria-label="Toggle language"
              >
                <Languages size={20} />
              </button>
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 hover:text-blue-400 transition-colors">
              {isArabic ? 'عني' : 'About'}
            </a>
            <a href="#goals" className="block px-3 py-2 hover:text-blue-400 transition-colors">
              {isArabic ? 'الأهداف' : 'Goals'}
            </a>
            <a href="#skills" className="block px-3 py-2 hover:text-blue-400 transition-colors">
              {isArabic ? 'المهارات' : 'Skills'}
            </a>
           
            <a href="#experience" className="block px-3 py-2 hover:text-blue-400 transition-colors">
              {isArabic ? 'الخبرة' : 'Experience'}
            </a>
            <a href="#projects" className="block px-3 py-2 hover:text-blue-400 transition-colors">
              {isArabic ? 'المشاريع' : 'Projects'}
            </a>
            <a href="#contact" className="block px-3 py-2 hover:text-blue-400 transition-colors">
              {isArabic ? 'التواصل' : 'Contact'}
            </a>
            <div className="flex justify-center space-x-6 pt-4 border-t border-gray-700 mt-4">
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;*/

import React, { useState, useEffect } from 'react';
import { Menu, X, Languages, ChevronLeft } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

interface NavbarProps {
  isDark: boolean;
  isArabic: boolean;
  toggleTheme: () => void;
  toggleLanguage: () => void;
  onBack?: (() => void) | null; // زر الرجوع
}

const Navbar: React.FC<NavbarProps> = ({
  isDark,
  isArabic,
  toggleTheme,
  toggleLanguage,
  onBack,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    const nav = document.querySelector('nav');
    if (nav) {
      nav.style.opacity = '1';
      nav.style.visibility = 'visible';
      nav.style.transition = 'none';
      setTimeout(() => { if(nav) nav.style.transition = ''; }, 300);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      !isLoaded ? 'opacity-0' : 'opacity-100'
    } ${
      isScrolled
        ? isDark
          ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg'
          : 'bg-white/95 backdrop-blur-sm shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2">
            {onBack && (
              <button
                onClick={onBack}
                className={`p-2 rounded-full transition-colors duration-200 ${
                  isDark ? 'text-gray-200 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                <ChevronLeft size={24} />
              </button>
            )}
            <h1 className="text-xl font-bold">Omar Murrah</h1>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-400 transition-colors">{isArabic ? 'عني' : 'About'}</a>
            <a href="#goals" className="hover:text-blue-400 transition-colors">{isArabic ? 'الأهداف' : 'Goals'}</a>
            <a href="#skills" className="hover:text-blue-400 transition-colors">{isArabic ? 'المهارات' : 'Skills'}</a>
            <a href="#experience" className="hover:text-blue-400 transition-colors">{isArabic ? 'الخبرة' : 'Experience'}</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">{isArabic ? 'المشاريع' : 'Projects'}</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">{isArabic ? 'التواصل' : 'Contact'}</a>
            <div className={`flex items-center ${isArabic ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">
                <Languages size={20} />
              </button>
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            </div>
          </div>

          <div className={`md:hidden flex items-center ${isArabic ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
            <div className={`flex items-center ${isArabic ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              <button onClick={toggleLanguage} className="p-2 rounded-full hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors">
                <Languages size={20} />
              </button>
              <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
            </div>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={`md:hidden ${isDark ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#about" className="block px-3 py-2 hover:text-blue-400 transition-colors">{isArabic ? 'عني' : 'About'}</a>
            <a href="#goals" className="block px-3 py-2 hover:text-blue-400 transition-colors">{isArabic ? 'الأهداف' : 'Goals'}</a>
            <a href="#skills" className="block px-3 py-2 hover:text-blue-400 transition-colors">{isArabic ? 'المهارات' : 'Skills'}</a>
            <a href="#experience" className="block px-3 py-2 hover:text-blue-400 transition-colors">{isArabic ? 'الخبرة' : 'Experience'}</a>
            <a href="#projects" className="block px-3 py-2 hover:text-blue-400 transition-colors">{isArabic ? 'المشاريع' : 'Projects'}</a>
            <a href="#contact" className="block px-3 py-2 hover:text-blue-400 transition-colors">{isArabic ? 'التواصل' : 'Contact'}</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
