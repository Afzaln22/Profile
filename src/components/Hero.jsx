import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Download,
  Sparkles,
  CheckCircle2,
  Code2
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Hero = ({ onOpenResume }) => {
  const { personalInfo } = portfolioData;

  // Typewriter effect states
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = personalInfo.roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 65;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentFullText.length) {
          setDisplayText(currentFullText.slice(0, displayText.length + 1));
        } else {
          // Pause at end before deleting
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentFullText.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex, personalInfo.roles]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-br from-blue-50/70 via-white to-indigo-50/50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/40"
    >
      {/* Background Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-80 h-80 bg-primary-400/15 dark:bg-primary-500/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyanAccent-400/15 dark:bg-cyanAccent-brand/10 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 dark:bg-purple-600/5 rounded-full blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] dark:opacity-30" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text & Hero Details (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            {/* Greeting badge */}
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 shadow-sm backdrop-blur-md">
              <span className="text-xl animate-bounce">👋</span>
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                Hello, I am
              </span>
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                Available for roles
              </span>
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-extrabold font-display tracking-tight text-gray-900 dark:text-white leading-[1.1]">
              Afzal <span className="gradient-text-primary">N</span>
            </h1>

            {/* Dynamic Typewriter Role */}
            <div className="min-h-[44px] flex items-center justify-center lg:justify-start">
              <span className="text-xl sm:text-2xl lg:text-3xl font-semibold font-mono text-primary-600 dark:text-cyanAccent-brand">
                {displayText}
                <span className="inline-block w-0.5 h-6 ml-1 bg-primary-600 dark:bg-cyanAccent-brand animate-pulse align-middle" />
              </span>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {personalInfo.shortBio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-medium shadow-lg shadow-primary-600/25 hover:shadow-xl hover:shadow-primary-600/35 transition-all duration-200 active:scale-95"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 font-medium border border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-cyanAccent-brand shadow-sm hover:shadow-md transition-all duration-200 active:scale-95"
              >
                <Mail className="w-4 h-4 text-primary-600 dark:text-cyanAccent-brand" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center space-x-2 px-5 py-3.5 rounded-xl bg-gray-100 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 font-medium border border-transparent hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4 border-t border-gray-200/60 dark:border-gray-800/60">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:text-primary-600 dark:hover:text-cyanAccent-brand hover:border-primary-500 transition-all text-xs sm:text-sm font-medium shadow-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:text-primary-600 dark:hover:text-cyanAccent-brand hover:border-primary-500 transition-all text-xs sm:text-sm font-medium shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center space-x-2 px-3.5 py-2 rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:text-primary-600 dark:hover:text-cyanAccent-brand hover:border-primary-500 transition-all text-xs sm:text-sm font-medium shadow-sm"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>

              <div className="flex items-center space-x-1.5 px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 text-xs sm:text-sm border border-gray-200/60 dark:border-gray-800">
                <MapPin className="w-3.5 h-3.5 text-primary-500" />
                <span>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Profile Card with Orbiting Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center relative">
            <div className="relative w-72 h-72 sm:w-88 sm:h-88 max-w-full">
              {/* Outer Glowing Gradient Pulse Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary-500 via-cyanAccent-brand to-purple-600 opacity-30 dark:opacity-40 blur-2xl animate-pulse-slow" />

              {/* Orbiting Track Line */}
              <div className="absolute inset-[-14px] rounded-full border border-dashed border-primary-300/40 dark:border-primary-700/40 pointer-events-none" />

              {/* Avatar Center Container */}
              <div className="relative w-full h-full rounded-full p-2 bg-gradient-to-tr from-primary-600 via-cyanAccent-500 to-indigo-600 shadow-2xl">
                <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-900 border-4 border-white dark:border-gray-800 flex items-center justify-center relative group">
                  <img
                    src={personalInfo.avatarUrl}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      // Fallback to stylized SVG avatar if network fails
                      e.target.onerror = null;
                      e.target.src =
                        "https://ui-avatars.com/api/?name=Afzal+N&background=2563eb&color=fff&size=512&bold=true";
                    }}
                  />
                  {/* Subtle inner overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* 4 Cardinal Floating Tech Badges */}
              {/* Top: Python */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer animate-float">
                <span title="Python 3.11">🐍</span>
              </div>

              {/* Right: FastAPI */}
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer animate-float-slow">
                <span title="FastAPI">⚡</span>
              </div>

              {/* Bottom: PyTorch */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer animate-float">
                <span title="PyTorch">🔥</span>
              </div>

              {/* Left: React */}
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-12 h-12 rounded-2xl bg-white dark:bg-gray-800 shadow-xl border border-gray-200 dark:border-gray-700 flex items-center justify-center text-2xl hover:scale-110 transition-transform cursor-pointer animate-float-slow">
                <span title="React 19">⚛️</span>
              </div>

              {/* Floating Info Card 1: Top Right */}
              <div className="absolute -top-8 -right-6 sm:-right-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-gray-200/80 dark:border-gray-700 flex items-center space-x-3 card-hover">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-primary-600 dark:text-cyanAccent-brand">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">
                    MCA Candidate
                  </div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">
                    Dept. of Computer Apps
                  </div>
                </div>
              </div>

              {/* Floating Info Card 2: Bottom Left */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md rounded-2xl p-3 sm:p-3.5 shadow-xl border border-gray-200/80 dark:border-gray-700 flex items-center space-x-3 card-hover">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-900 dark:text-white">
                    100% Pytest Verified
                  </div>
                  <div className="text-[11px] text-gray-500 dark:text-gray-400">
                    High Reliability Code
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex justify-center">
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="flex flex-col items-center space-y-2 text-gray-400 hover:text-primary-600 dark:hover:text-cyanAccent-brand transition-colors"
          >
            <span className="text-xs font-medium tracking-wider uppercase">Scroll Down</span>
            <div className="w-6 h-10 rounded-full border-2 border-gray-300 dark:border-gray-700 flex justify-center p-1">
              <div className="w-1.5 h-2.5 rounded-full bg-primary-500 dark:bg-cyanAccent-brand animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

