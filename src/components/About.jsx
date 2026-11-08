import React from 'react';
import {
  GraduationCap,
  Award,
  Terminal,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle,
  Calendar,
  MapPin
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const About = () => {
  const { personalInfo, education } = portfolioData;

  const corePillars = [
    {
      title: "Backend & Systems",
      icon: Terminal,
      color: "from-blue-500 to-indigo-600",
      description: "FastAPI, asynchronous microservices, PostgreSQL, concurrency, and clean OOP architecture."
    },
    {
      title: "AI, ML & Vision",
      icon: Cpu,
      color: "from-cyan-500 to-blue-600",
      description: "PyTorch, Vision Transformers (ViT), YOLO, LangGraph agentic workflows, and Grad-CAM explainability."
    },
    {
      title: "Full-Stack & Mobile",
      icon: Layers,
      color: "from-purple-500 to-pink-600",
      description: "React 19, Next.js 16, Vite, Tailwind CSS, and Flutter cross-platform applications."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50/70 dark:bg-gray-900/40 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-100/70 dark:bg-primary-950/70 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-cyanAccent-brand text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Discover My Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 dark:text-white mb-4">
            About <span className="gradient-text-primary">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            Passionate software engineer building high-performance backend systems, practical AI/ML solutions, and scalable full-stack applications.
          </p>
        </div>

        {/* Two-Column Grid: Narrative & Stats */}
        <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Narrative & Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200/80 dark:border-gray-700 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white flex items-center space-x-2">
                <span>Architecting High-Impact Software Solutions</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.aboutBio}
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.philosophy}
              </p>

              {/* Core Philosophy Chips */}
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-semibold border border-blue-200 dark:border-blue-800">
                  ⚡ Asynchronous Concurrency
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-cyan-50 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyanAccent-brand text-xs font-semibold border border-cyan-200 dark:border-cyan-800">
                  🔬 Explainable AI (Grad-CAM)
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-semibold border border-purple-200 dark:border-purple-800">
                  🤖 Agentic LangGraph StateGraphs
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 text-xs font-semibold border border-emerald-200 dark:border-emerald-800">
                  🧪 Test-Driven Validation (Pytest)
                </span>
              </div>
            </div>

            {/* Core Pillars 3-grid */}
            <div className="grid sm:grid-cols-3 gap-4">
              {corePillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="bg-white dark:bg-gray-800/80 rounded-2xl p-5 border border-gray-200/80 dark:border-gray-700 shadow-sm card-hover flex flex-col justify-between"
                  >
                    <div>
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white shadow-md mb-3`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1.5">
                        {pillar.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Key Stats & Highlights (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Stats Grid 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {personalInfo.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-gray-800/80 rounded-2xl p-5 sm:p-6 border border-gray-200/80 dark:border-gray-700 shadow-sm card-hover text-center"
                >
                  <div className="text-2xl sm:text-3xl font-extrabold font-display gradient-text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Fast Fact Card */}
            <div className="bg-gradient-to-br from-primary-600 to-indigo-700 rounded-2xl p-6 text-white shadow-lg shadow-primary-500/20 space-y-3">
              <div className="flex items-center space-x-2 text-cyanAccent-brand text-xs font-bold uppercase tracking-wider">
                <Award className="w-4 h-4" />
                <span>Engineering Mindset</span>
              </div>
              <h4 className="text-lg font-bold font-display">
                Building Scalable, Validated & Explainable Systems
              </h4>
              <p className="text-primary-100 text-xs sm:text-sm leading-relaxed">
                Whether deploying stateful multi-agent trading copilots or engineering 3D forensic deepfake detection pipelines, I prioritize deterministic guardrails, low latency, and intuitive user experiences.
              </p>
              <div className="pt-1 flex items-center space-x-4 text-xs text-primary-200">
                <span className="flex items-center space-x-1">
                  <CheckCircle className="w-3.5 h-3.5 text-cyanAccent-brand" />
                  <span>Clean Architecture</span>
                </span>
                <span className="flex items-center space-x-1">
                  <CheckCircle className="w-3.5 h-3.5 text-cyanAccent-brand" />
                  <span>Pytest Guardrails</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline Subsection */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-gray-200 dark:border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/40 flex items-center justify-center text-primary-600 dark:text-cyanAccent-brand">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
                  Academic <span className="gradient-text-primary">Background</span>
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                  Continuous formal education in computer applications and systems engineering
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {education.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 sm:p-7 border border-gray-200/80 dark:border-gray-700 shadow-sm card-hover relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-950/80 text-primary-600 dark:text-cyanAccent-brand border border-primary-200 dark:border-primary-800 mb-2">
                        {item.status}
                      </span>
                      <h4 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                        {item.degree}
                      </h4>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-300 flex items-center space-x-1.5 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-primary-500" />
                        <span>{item.institution}</span>
                      </p>
                    </div>

                    <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs font-mono font-semibold whitespace-nowrap">
                      <Calendar className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" />
                      <span>{item.period}</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-gray-100 dark:border-gray-700/60 flex flex-wrap gap-1.5">
                  {item.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-gray-50 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-[11px] font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

