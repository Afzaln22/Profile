import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personalInfo, navigation } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200/80 dark:border-gray-800 transition-colors">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-12 gap-8 items-center pb-8 border-b border-gray-100 dark:border-gray-800/80">
          {/* Brand info (5 cols) */}
          <div className="md:col-span-5 space-y-3 text-center md:text-left">
            <a href="#home" className="inline-flex items-center space-x-2 text-2xl font-bold font-display">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary-600 to-cyanAccent-brand flex items-center justify-center text-white font-black text-sm shadow-md">
                AN
              </div>
              <span className="text-gray-900 dark:text-white">
                Afzal <span className="gradient-text-primary">N</span>
              </span>
            </a>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 max-w-sm">
              Software Engineer specializing in Python, FastAPI, PyTorch deep learning, and scalable full-stack applications.
            </p>
          </div>

          {/* Quick links (4 cols) */}
          <div className="md:col-span-4 flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-cyanAccent-brand transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Socials & Back to Top (3 cols) */}
          <div className="md:col-span-3 flex items-center justify-center md:justify-end space-x-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyanAccent-brand transition-colors"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyanAccent-brand transition-colors"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-cyanAccent-brand transition-colors"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg transition-all"
              title="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 dark:text-gray-400 gap-2">
          <div>
            © {new Date().getFullYear()} Afzal N. All rights reserved. Built with React & Tailwind CSS.
          </div>
          <div className="flex items-center space-x-1">
            <span>Crafted with passion in Mysore, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

