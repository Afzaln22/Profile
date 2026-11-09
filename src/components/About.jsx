import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { GraduationCap, Award, Terminal, Cpu, Database, Cloud } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const About = () => {
  const { data } = usePortfolio();
  const { personalInfo, education } = data;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const stats = [
    { value: "2+", label: "Years Experience", color: "text-primary-600" },
    { value: "5+", label: "Projects Built", color: "text-green-600" },
    { value: "4+", label: "Certifications & Research", color: "text-purple-600" },
    { value: "MCA", label: "Candidate (BCA Grad)", color: "text-orange-600" }
  ];

  const highlights = [
    {
      title: "Backend & Systems Architecture",
      icon: <Terminal className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
      description: "FastAPI asynchronous microservices, PostgreSQL, SQLite, and clean OOP architecture designed for low-latency execution."
    },
    {
      title: "AI, Vision & Explainability",
      icon: <Cpu className="w-6 h-6 text-green-600 dark:text-green-400" />,
      description: "PyTorch, Vision Transformers (ViT), YOLO object detection, and Grad-CAM attention heatmaps for explainable deep learning."
    },
    {
      title: "Agentic AI & LangGraph StateMachines",
      icon: <Database className="w-6 h-6 text-purple-600 dark:text-purple-400" />,
      description: "Multi-stage autonomous agent execution loops with strict Pydantic output guardrails preventing speculative hallucination."
    },
    {
      title: "Modern Full-Stack & Testing Rigor",
      icon: <Cloud className="w-6 h-6 text-orange-600 dark:text-orange-400" />,
      description: "React 19, Next.js 16, Tailwind CSS, and 100% automated test verification via comprehensive Pytest test suites."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800/50">
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
            About <span className="gradient-text-primary">Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Passionate software engineer with a strong foundation in backend development and algorithmic problem solving
          </p>
        </motion.div>

        {/* Two-Column Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: My Journey & 4 Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                My Journey
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                <p>
                  I am a passionate software engineer based in Mysore, Karnataka, with a primary focus on architecting high-performance backend systems, cutting-edge AI/ML solutions, and data-intensive platforms.
                </p>
                <p>
                  I graduated with a Bachelor of Computer Applications (BCA) and am currently pursuing my Master of Computer Applications (MCA). Throughout my academic and professional journey, I have engineered stateful agentic AI platforms, real-time computer vision classifiers, and automated testing architectures.
                </p>
                <p>
                  My engineering philosophy emphasizes clean code, deterministic output guardrails, and rigorous automated validation. Whether developing 4-stage LangGraph trading state machines with hallucination defenses or visualizing 3D forensic deepfake heatmaps, I am driven by delivering dependable, business-impacting software.
                </p>
              </div>
            </div>

            {/* 4 Stats Cards Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + 0.1 * idx }}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 hover-lift text-center"
                >
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Education & Key Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Education Subsection */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Education
              </h3>
              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + 0.1 * idx }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover-lift"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-lg flex items-center justify-center text-primary-600 dark:text-primary-400">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">
                          {edu.institution}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 dark:text-gray-400 font-mono">
                            {edu.period}
                          </span>
                          <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                            {edu.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Highlights Subsection */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Key Highlights
              </h3>
              <div className="grid gap-4">
                {highlights.map((h, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + 0.1 * idx }}
                    className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 hover-lift flex items-start space-x-3"
                  >
                    <div className="flex-shrink-0 mt-1">{h.icon}</div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-1">
                        {h.title}
                      </h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                        {h.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
