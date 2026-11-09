import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Calendar, CheckCircle, Filter, X, Code2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Projects = () => {
  const { data } = usePortfolio();
  const { projects } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filterTabs = [
    { key: 'all', label: 'All', count: projects.length },
    { key: 'ai', label: 'AI & ML', count: projects.filter(p => p.category.includes('AI') || p.category.includes('ML')).length },
    { key: 'fullstack', label: 'Full Stack', count: projects.filter(p => p.category.includes('Full Stack') || p.category.includes('Frontend')).length },
    { key: 'backend', label: 'Backend', count: projects.filter(p => p.category.includes('Backend') || p.category.includes('AI')).length }
  ];

  const filteredProjects = projects.filter(p => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'ai') return p.category.includes('AI') || p.category.includes('ML');
    if (activeFilter === 'fullstack') return p.category.includes('Full Stack') || p.category.includes('Frontend');
    if (activeFilter === 'backend') return p.category.includes('Backend') || p.category.includes('AI');
    return true;
  });

  const getWatermarkIcon = (category) => {
    if (category.includes('AI') || category.includes('ML')) return '🤖';
    if (category.includes('Full Stack') || category.includes('Frontend')) return '💻';
    return '⚙️';
  };

  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-gray-900 dark:text-white">
            Featured <span className="gradient-text-primary">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Showcasing impactful solutions across AI/ML, full-stack development, and backend systems
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-4 mb-12"
        >
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 mr-2 sm:mr-4">
            <Filter size={20} />
            <span className="font-medium text-sm sm:text-base">Filter by:</span>
          </div>

          {filterTabs.map((tab) => (
            <motion.button
              key={tab.key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(tab.key)}
              className={`px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeFilter === tab.key
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
              }`}
            >
              {tab.label} ({tab.count})
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.1 * idx }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group hover-lift flex flex-col justify-between"
              >
                <div>
                  {/* Top Banner with Watermark Icon */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-500 to-purple-600 overflow-hidden">
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    
                    {/* Watermark Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-6xl opacity-40 select-none">
                        {getWatermarkIcon(project.category)}
                      </div>
                    </div>

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900/60 text-green-800 dark:text-green-200 shadow-sm">
                        {project.badge || 'Completed'}
                      </span>
                    </div>

                    {/* Top-Right GitHub Hover Overlay */}
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
                        title="View on GitHub"
                      >
                        <Github size={18} />
                      </motion.a>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                        {project.title.split(' - ')[0]}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 font-mono">
                        <Calendar size={14} className="mr-1.5 text-primary-500" />
                        <span>{project.stats?.architecture || project.category}</span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Highlights with Checkmark */}
                    <div className="space-y-1.5 mb-5">
                      {project.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="flex items-start space-x-2 text-xs text-gray-600 dark:text-gray-300">
                          <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{hl}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Footer */}
                <div className="px-6 pb-6 pt-0 flex items-center justify-between gap-3 border-t border-gray-100 dark:border-gray-700/60 mt-2">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setSelectedProject(project)}
                    className="flex-1 py-2.5 px-3 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-xs font-semibold text-center transition-colors"
                  >
                    Details & Architecture
                  </motion.button>

                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white shadow transition-all flex items-center justify-center"
                    title="GitHub Repository"
                  >
                    <Github size={18} />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All on GitHub Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={portfolioData.personalInfo.githubTab}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-lg font-medium shadow-md hover:shadow-lg border border-gray-200 dark:border-gray-700 transition-all duration-200"
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
            <ExternalLink size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Specs Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-gray-800 p-6 sm:p-8 relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-500 dark:text-gray-400 transition-colors"
            >
              <X size={20} />
            </button>

            <div className="space-y-6">
              <div>
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary-100 dark:bg-primary-950 text-primary-600 dark:text-primary-400 mb-2">
                  {selectedProject.badge} • {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
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
                      <CheckCircle size={16} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-2">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-primary-50 dark:bg-primary-950/80 text-primary-700 dark:text-primary-300 text-xs font-medium border border-primary-200 dark:border-primary-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-end space-x-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm font-medium"
                >
                  Close
                </button>
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-medium text-sm shadow-md"
                >
                  <Github size={16} />
                  <span>View Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
