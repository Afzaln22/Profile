import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ExternalLink, Github, Linkedin, Mail, ChevronDown, FileText } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Hero = ({ onOpenResume }) => {
  const { data } = usePortfolio();
  const { personalInfo } = data;

  const roles = useMemo(
    () => personalInfo.roles || [
      "Python Developer",
      "FastAPI & Backend Engineer",
      "AI / ML & Vision Specialist",
      "Full-Stack Developer"
    ],
    [personalInfo.roles]
  );

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    const current = roles[currentRoleIndex];
    let charIndex = 0;

    const typeInterval = setInterval(() => {
      if (charIndex < current.length) {
        setDisplayText(current.slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          const deleteInterval = setInterval(() => {
            if (charIndex > 0) {
              setDisplayText(current.slice(0, charIndex - 1));
              charIndex--;
            } else {
              clearInterval(deleteInterval);
              setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
            }
          }, 50);
        }, 2000);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, [currentRoleIndex, roles]);

  const scrollTo = (selector) => {
    const el = document.querySelector(selector);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-visible bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900"
    >
      {/* Background Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -100, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/20 dark:bg-blue-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 100, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-200/20 dark:bg-purple-500/10 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center overflow-visible">
          {/* Left Column: Hero Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-4 flex items-center justify-center lg:justify-start"
            >
              <span className="mr-2">👋</span> Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold font-display mb-6 text-gray-900 dark:text-white"
            >
              <span className="gradient-text-primary">Afzal N</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-6"
            >
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-2">
                I'm a{' '}
                <span className="text-primary-600 dark:text-primary-400 font-semibold min-h-[1.5em] inline-block">
                  {displayText}
                  <span className="animate-pulse">|</span>
                </span>
              </p>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl leading-relaxed"
            >
              {personalInfo.aboutBio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex items-center justify-center lg:justify-start mb-8 text-gray-600 dark:text-gray-400"
            >
              <MapPin size={18} className="mr-2 text-primary-500" />
              <span>{personalInfo.location}</span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('#projects')}
                className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <span>View Projects</span>
                <ExternalLink size={18} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('#contact')}
                className="px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium transition-all duration-200 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg flex items-center justify-center space-x-2"
              >
                <Mail size={18} className="text-primary-600 dark:text-primary-400" />
                <span>Contact Me</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenResume}
                className="px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-sm"
              >
                <FileText size={18} />
                <span>Resume</span>
              </motion.button>
            </motion.div>

            {/* Social Links Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex space-x-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 text-gray-700 dark:text-gray-300"
                title="GitHub"
              >
                <Github size={22} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 text-gray-700 dark:text-gray-300"
                title="LinkedIn"
              >
                <Linkedin size={22} />
              </motion.a>

              <motion.button
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollTo('#contact')}
                className="p-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 text-gray-700 dark:text-gray-300"
                title="Email"
              >
                <Mail size={22} />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Orbiting Avatar & Floating Badges */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end overflow-visible"
          >
            <div className="relative overflow-visible">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="relative w-80 h-80 md:w-96 md:h-96"
              >
                {/* Ambient Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-purple-600 rounded-full opacity-20 blur-2xl" />

                {/* Outer Ring & Center Avatar */}
                <div className="relative w-full h-full bg-gradient-to-br from-primary-500 to-purple-600 rounded-full p-1">
                  <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={personalInfo.avatarUrl}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.parentElement.innerHTML = '<div class="text-8xl md:text-9xl">👨‍💻</div>';
                      }}
                    />
                  </div>
                </div>

                {/* Orbiting Rotating Badges Container */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  {/* Top: Python */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg text-lg">
                    PY
                  </div>

                  {/* Right: FastAPI */}
                  <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg text-xl">
                    ⚡
                  </div>

                  {/* Bottom: PyTorch */}
                  <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg text-xl">
                    🔥
                  </div>

                  {/* Left: React */}
                  <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold shadow-lg text-xl">
                    ⚛️
                  </div>
                </motion.div>
              </motion.div>

              {/* Floating Badge 1: Bottom Left */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -bottom-8 -left-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-2xl font-bold text-primary-600">MCA</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Candidate / Mysore</div>
              </motion.div>

              {/* Floating Badge 2: Top Right */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -top-8 -right-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 border border-gray-200 dark:border-gray-700"
              >
                <div className="text-2xl font-bold text-green-600">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Projects Built</div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center"
          onClick={() => scrollTo('#about')}
        >
          <span className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-1">
            Scroll
          </span>
          <ChevronDown className="w-5 h-5 text-gray-400 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
