import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Footer = () => {
  const { personalInfo, navigation } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-8">
          {/* Col 1: Brand & Bio */}
          <div>
            <h3 className="text-2xl font-bold font-display gradient-text-primary mb-3">
              Afzal N
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Software Engineer specializing in Python backend architecture, PyTorch deep learning, and scalable full-stack applications.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollTo(item.href)}
                  className="text-left text-gray-400 hover:text-primary-400 transition-colors py-1"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Social Links & Back to Top */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Connect With Me
            </h4>
            <div className="flex space-x-3 mb-6">
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors"
                title="GitHub"
              >
                <Github size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={20} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-lg transition-colors"
                title="Email"
              >
                <Mail size={20} />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToTop}
                className="p-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors shadow-md"
                title="Back to Top"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
            <p className="text-xs text-gray-400">
              Based in Mysore, Karnataka, India
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} Afzal N. All rights reserved.</p>
          <p>Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};
