import React from 'react';
import { BookOpen, Sparkles, Award, ExternalLink, Calendar } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Certifications = () => {
  const { publicationsAndResearch } = portfolioData;

  return (
    <section id="publications" className="section-padding bg-gray-50/70 dark:bg-gray-900/40 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-100/70 dark:bg-primary-950/70 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-cyanAccent-brand text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Rigor & Research</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 dark:text-white mb-4">
            Research & <span className="gradient-text-primary">Certifications</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            Theoretical explorations, system architecture deep-dives, and certified technical competencies.
          </p>
        </div>

        {/* 2x2 Grid of Research and Certification Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {publicationsAndResearch.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800/80 rounded-2xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-700 shadow-sm card-hover flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-950/80 text-primary-700 dark:text-cyanAccent-brand border border-primary-200 dark:border-primary-800">
                    {item.category}
                  </span>
                  <div className="flex items-center space-x-1.5 text-xs text-gray-500 dark:text-gray-400 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-primary-500" />
                    <span>{item.year}</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold font-display text-gray-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 mt-1">
                    {item.issuer}
                  </p>
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Tags */}
              <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700/60 flex flex-wrap gap-1.5">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-md bg-gray-50 dark:bg-gray-700/60 text-gray-600 dark:text-gray-300 text-[11px] font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
