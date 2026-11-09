import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, ExternalLink, Users, Calendar, Award } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const Certifications = () => {
  const { data } = usePortfolio();
  const publications = data.publicationsAndResearch || [];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section id="publications" className="section-padding bg-gray-50 dark:bg-gray-800">
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
            Research & <span className="gradient-text-primary">Publications</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Contributing to the advancement of AI and software engineering through research and academic publications
          </p>
        </motion.div>

        {/* Publications List */}
        <div className="space-y-8">
          {publications.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * idx }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
            >
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                      {pub.type}
                    </span>
                    <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                      {pub.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
                    {pub.title}
                  </h3>

                  <div className="flex flex-wrap items-center text-gray-600 dark:text-gray-400 text-sm gap-4 mb-4 font-mono">
                    <div className="flex items-center space-x-1.5">
                      <Users size={16} className="text-primary-500" />
                      <span>{pub.authors.join(", ")}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Calendar size={16} className="text-primary-500" />
                      <span>{pub.year}</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                      <Award size={16} className="text-primary-500" />
                      <span>{pub.journal}</span>
                    </div>
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={pub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl mt-4 lg:mt-0 flex-shrink-0"
                >
                  <ExternalLink size={18} />
                  <span>View Code & Research</span>
                </motion.a>
              </div>

              {/* Abstract */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Abstract
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                  {pub.abstract}
                </p>
              </div>

              {/* Keywords */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  Keywords
                </h4>
                <div className="flex flex-wrap gap-2">
                  {pub.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>

              {/* Details & Impact Footer */}
              <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Research Impact
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {pub.impact}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      Publication Details
                    </h4>
                    <div className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <p>
                        <strong className="text-gray-900 dark:text-white">Domain:</strong> {pub.conference}
                      </p>
                      <p>
                        <strong className="text-gray-900 dark:text-white">Author:</strong> Afzal N
                      </p>
                      <p>
                        <strong className="text-gray-900 dark:text-white">Year:</strong> {pub.year}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Research Contributions 4-stat banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">
            Research & Systems Contributions
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 mb-2">4+</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Architectures Researched</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">2025</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Latest Publication</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">AI / Vision</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Research Focus</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-gray-600 dark:text-gray-400 text-sm">Open Verification</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
