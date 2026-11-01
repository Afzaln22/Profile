import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-100/70 dark:bg-primary-950/70 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-cyanAccent-brand text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Applied Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 dark:text-white mb-4">
            Work & Project <span className="gradient-text-primary">Experience</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            Professional trajectory, architectural ownership, and rigorous academic project execution.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Bar */}
          <div className="hidden sm:block absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary-500 via-cyanAccent-500 to-primary-800" />

          <div className="space-y-10 sm:space-y-12">
            {experience.map((exp, idx) => (
              <div key={idx} className="relative sm:pl-20">
                {/* Timeline Node Icon */}
                <div className="hidden sm:flex absolute left-5 top-1 -translate-x-1/2 w-7 h-7 rounded-full bg-white dark:bg-gray-900 border-4 border-primary-500 dark:border-cyanAccent-brand items-center justify-center shadow-md shadow-primary-500/20 z-10" />

                <div className="bg-gray-50/80 dark:bg-gray-800/60 rounded-2xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-700/80 shadow-sm card-hover space-y-4">
                  {/* Top Bar: Role & Company */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200/60 dark:border-gray-700/60 pb-4">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-cyanAccent-brand border border-primary-200 dark:border-primary-800">
                          {exp.type}
                        </span>
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-display text-gray-900 dark:text-white mt-1">
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-primary-600 dark:text-cyanAccent-brand">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs text-gray-500 dark:text-gray-400 space-y-1 font-mono">
                      <div className="flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5 text-primary-500" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gray-400" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Bullet Responsibilities */}
                  <div className="space-y-2 pt-1">
                    {exp.responsibilities.map((resp, i) => (
                      <div key={i} className="flex items-start space-x-2.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-3 border-t border-gray-200/60 dark:border-gray-700/60 flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 text-xs font-medium border border-gray-200 dark:border-gray-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
