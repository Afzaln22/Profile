import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Experience = () => {
  const { data } = usePortfolio();
  const experiences = data.experience || [];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="experience" className="section-padding bg-white dark:bg-gray-900">
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
            Work <span className="gradient-text-primary">Experience</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Professional journey building scalable systems and delivering impactful solutions across Backend, AI/ML, and Full-Stack Engineering
          </p>
        </motion.div>

        {/* Timeline with Central Line */}
        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-purple-500 rounded-full" />

          {/* Experience Cards */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={exp.id} className="relative flex flex-col md:flex-row items-center">
                  {/* Timeline Center Node */}
                  <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10" />

                  {/* Card Container */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 * idx }}
                    className={`w-full md:w-5/12 ${
                      isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                  >
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift border border-gray-100 dark:border-gray-700">
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-900/40 text-primary-600 dark:text-primary-300">
                          {exp.type}
                        </span>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 font-mono space-x-1">
                          <Calendar size={13} className="text-primary-500" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                        {exp.role}
                      </h3>

                      <div className="flex items-center text-sm font-semibold text-primary-600 dark:text-primary-400 mb-2">
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center space-x-1"
                        >
                          <span>{exp.company}</span>
                          <ExternalLink size={14} />
                        </a>
                      </div>

                      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                        <MapPin size={13} className="mr-1 text-gray-400" />
                        <span>{exp.location}</span>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements Metrics */}
                      {exp.achievements && (
                        <div className="grid grid-cols-2 gap-3 mb-4 p-3 rounded-xl bg-gray-50 dark:bg-gray-700/50">
                          {exp.achievements.map((ach, i) => (
                            <div key={i} className="text-center">
                              <div className="text-base font-bold text-primary-600 dark:text-primary-400">
                                {ach.metric}
                              </div>
                              <div className="text-[11px] text-gray-500 dark:text-gray-400">
                                {ach.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Responsibilities */}
                      <div className="space-y-1.5 mb-5">
                        {exp.responsibilities.map((resp, i) => (
                          <div key={i} className="flex items-start space-x-2 text-xs text-gray-600 dark:text-gray-300">
                            <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                            <span>{resp}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100 dark:border-gray-700">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
