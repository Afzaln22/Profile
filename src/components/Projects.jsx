import React, { useState } from 'react';
import {
  Github,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Layers,
  Activity,
  Code2,
  X
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Projects = () => {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const filters = ['All', 'AI & ML', 'Full Stack', 'Frontend'];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-gray-50/70 dark:bg-gray-900/40 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-100/70 dark:bg-primary-950/70 border border-primary-200 dark:border-primary-800 text-primary-700 dark:text-cyanAccent-brand text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Engineering Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display text-gray-900 dark:text-white mb-4">
            Featured <span className="gradient-text-primary">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            Production-grade systems, agentic AI workflows, and full-stack software built with performance and verification in mind.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-primary-600 to-cyanAccent-500 text-white shadow-md shadow-primary-500/25 scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800/80 rounded-2xl border border-gray-200/80 dark:border-gray-700 overflow-hidden shadow-sm card-hover flex flex-col justify-between group"
            >
              <div>
                {/* Visual Banner Header */}
                <div
                  className={`h-40 bg-gradient-to-br ${project.gradient} p-6 relative flex flex-col justify-between overflow-hidden text-white`}
                >
                  {/* Subtle background circuit or grid lines */}
                  <div className="absolute inset-0 bg-black/15 pointer-events-none" />
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-sm">
                      {project.badge}
                    </span>
                    <span className="text-xs font-mono bg-black/30 backdrop-blur-md px-2.5 py-1 rounded-md text-white/90">
                      {project.category}
                    </span>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold font-display leading-tight text-white drop-shadow-sm">
                      {project.title.split(' - ')[0]}
                    </h3>
                    <p className="text-xs text-white/80 font-mono mt-0.5">
                      {project.title.split(' - ')[1] || ''}
                    </p>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                    {project.shortDescription}
                  </p>

                  {/* Highlights Bullet List */}
                  <div className="space-y-1.5 pt-1">
                    {project.highlights.slice(0, 3).map((hl, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-gray-600 dark:text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-primary-500 dark:text-cyanAccent-brand flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick Stat Chips */}
                  {project.stats && (
                    <div className="pt-2 flex flex-wrap gap-1.5">
                      {Object.entries(project.stats).map(([k, v]) => (
                        <span
                          key={k}
                          className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700/60 text-gray-700 dark:text-gray-300 text-[11px] font-mono"
                        >
                          <strong className="text-gray-900 dark:text-white capitalize">{k}:</strong> {v}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-gray-100 dark:border-gray-700/60">
                    {project.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-cyanAccent-brand text-[11px] font-medium border border-primary-100 dark:border-primary-900/40"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-500 text-[11px]">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Action Footer Buttons */}
              <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700/60 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2.5 px-3 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs font-semibold transition-all text-center"
                >
                  Deep Dive & Specs
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl bg-gray-900 hover:bg-black dark:bg-gray-700 dark:hover:bg-gray-600 text-white transition-all shadow-sm flex items-center justify-center"
                  title="View on GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Repositories Banner CTA */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 via-primary-950 to-gray-900 rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-gray-800">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center space-x-2 text-cyanAccent-brand text-xs font-bold uppercase tracking-wider">
              <Code2 className="w-4 h-4" />
              <span>Open Source & GitHub Repositories</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display">
              Explore More Repositories on GitHub
            </h3>
            <p className="text-gray-300 text-sm max-w-xl">
              Inspect full commit histories, automated test runs, backend pipelines, and interactive demos across all repositories.
            </p>
          </div>

          <a
            href={portfolioData.personalInfo.githubTab}
            target="_blank"
            rel="noreferrer"
            className="flex-shrink-0 inline-flex items-center space-x-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-cyanAccent-500 hover:from-primary-600 hover:to-cyanAccent-brand text-gray-950 font-bold text-sm shadow-lg shadow-cyanAccent-500/20 hover:shadow-cyanAccent-500/30 transition-all duration-200 active:scale-95"
          >
            <Github className="w-4 h-4" />
            <span>Visit GitHub Repositories</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Project Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-cyanAccent-brand border border-primary-200 dark:border-primary-800 mb-2">
                  {selectedProject.badge} • {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-3">
                  Key Architectural Highlights
                </h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((hl, i) => (
                    <div key={i} className="flex items-start space-x-2 text-sm text-gray-700 dark:text-gray-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedProject.stats && (
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
                  <h4 className="text-xs font-bold uppercase text-gray-500 dark:text-gray-400 mb-2">
                    System Telemetry & Metrics
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {Object.entries(selectedProject.stats).map(([k, v]) => (
                      <div key={k} className="text-center">
                        <div className="text-xs font-medium text-gray-500 dark:text-gray-400 capitalize">{k}</div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">{v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-2">
                  Complete Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-primary-50 dark:bg-primary-950/80 text-primary-700 dark:text-cyanAccent-brand text-xs font-medium border border-primary-200 dark:border-primary-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-end space-x-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium transition-colors"
                >
                  Close
                </button>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-primary-600 to-cyanAccent-500 hover:from-primary-700 hover:to-cyanAccent-brand text-white font-medium text-sm shadow-md"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

