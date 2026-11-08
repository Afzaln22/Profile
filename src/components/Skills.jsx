import React, { useState } from 'react';
import { Sparkles, Terminal, Code, Database, Wrench } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Skills = () => {
  const { skillCategories } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categoryIcons = {
    "Python, AI & Backend": Terminal,
    "Web & Mobile Development": Code,
    "Databases & Storage": Database,
    "Tools, DevOps & Testing": Wrench,
  };

  const categories = ['All', ...skillCategories.map((c) => c.name)];

  const displayedCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.name === selectedCategory);

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-100/70 dark:bg-primary-950/70 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-cyanAccent-brand text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 dark:text-white mb-4">
            Technical <span className="gradient-text-primary">Skills</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            Technologies, libraries, and architectural frameworks I leverage to design, test, and deploy resilient systems.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-gradient-to-r from-primary-600 to-cyanAccent-500 text-white shadow-md shadow-primary-500/25 scale-105'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {displayedCategories.map((category) => {
            const Icon = categoryIcons[category.name] || Terminal;
            return (
              <div
                key={category.name}
                className="bg-gray-50/80 dark:bg-gray-800/60 rounded-2xl p-6 sm:p-8 border border-gray-200/80 dark:border-gray-700/80 shadow-sm card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center space-x-3 mb-6 pb-4 border-b border-gray-200/70 dark:border-gray-700/70">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary-600 to-cyanAccent-500 flex items-center justify-center text-white shadow-md shadow-primary-500/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white">
                      {category.name}
                    </h3>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-white dark:bg-gray-900/70 border border-gray-200/70 dark:border-gray-700/70 flex items-center justify-between group hover:border-primary-400 dark:hover:border-cyanAccent-brand transition-colors duration-200"
                      >
                        <div className="flex items-center space-x-2.5">
                          <span className="text-lg">{skill.icon}</span>
                          <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-cyanAccent-brand transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Subtext info */}
                <div className="mt-6 pt-4 border-t border-gray-200/60 dark:border-gray-700/60 flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{category.skills.length} core technologies</span>
                  <span className="text-primary-600 dark:text-cyanAccent-brand font-medium">
                    Production & Applied Experience
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

