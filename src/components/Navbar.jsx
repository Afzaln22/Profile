import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, FileText, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Navbar = ({ darkMode, toggleDarkMode, onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = portfolioData.navigation.map((n) => n.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md border-b border-gray-200/80 dark:border-gray-800/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="group flex items-center space-x-2 text-2xl font-bold font-display"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-cyanAccent-brand flex items-center justify-center text-white font-black shadow-lg shadow-primary-500/25 group-hover:scale-105 transition-transform duration-200">
            AN
          </div>
          <span className="text-gray-900 dark:text-white tracking-tight">
            Afzal <span className="gradient-text-primary">N</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {portfolioData.navigation.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-primary-600 dark:text-cyanAccent-brand bg-primary-50 dark:bg-gray-800/80 font-semibold'
                    : 'text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyanAccent-brand hover:bg-gray-100/70 dark:hover:bg-gray-800/50'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Actions: Theme Toggle & Resume CTA */}
        <div className="hidden sm:flex items-center space-x-3">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700/80 transition-colors duration-200"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-amber-400 hover:rotate-45 transition-transform duration-300" />
            ) : (
              <Moon className="w-5 h-5 text-primary-600 hover:-rotate-12 transition-transform duration-300" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="flex items-center space-x-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-cyanAccent-500 hover:from-primary-700 hover:to-cyanAccent-brand text-white font-medium text-sm shadow-md shadow-primary-500/20 hover:shadow-lg hover:shadow-primary-500/30 transition-all duration-200 active:scale-95"
          >
            <FileText className="w-4 h-4" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex sm:hidden items-center space-x-2">
          <button
            onClick={toggleDarkMode}
            aria-label="Toggle theme"
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-primary-600" />}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-800 shadow-2xl px-6 py-6 transition-all animate-fadeIn">
          <div className="flex flex-col space-y-2">
            {portfolioData.navigation.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? 'text-primary-600 dark:text-cyanAccent-brand bg-primary-50 dark:bg-gray-800 font-semibold'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenResume();
                }}
                className="w-full flex items-center justify-center space-x-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-cyanAccent-500 text-white font-medium text-sm shadow-md"
              >
                <FileText className="w-4 h-4" />
                <span>View Full Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
