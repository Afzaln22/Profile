import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MapPin, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const experiences = [
    {
      id: 1,
      company: "Independent Systems & Applied AI",
      role: "Lead Full-Stack & AI Software Developer",
      type: "Project Engineering",
      location: "Mysore, Karnataka, India",
      period: "2024 - Present",
      duration: "Ongoing",
      description: "Owning end-to-end development of Agentic AI solutions, quantitative algorithmic trading engines, and scalable backend microservices.",
      responsibilities: [
        "Architected AlgoForge: Engineered a stateful 4-stage LangGraph Agentic AI StateGraph with multi-cloud synthesis (AWS Bedrock / Azure OpenAI) and strict Pydantic hallucination guardrails.",
        "Built DeepShield: Implemented a deepfake authenticity platform with PyTorch Vision Transformers (ViT), CNNs, Grad-CAM attention heatmaps, and a 3D Three.js forensic viewer.",
        "Designed high-concurrency asynchronous REST APIs in FastAPI, PostgreSQL, and SQLite, maintaining sub-15ms telemetry dispatch and real-time WebSocket feeds.",
        "Authored an automated Pytest verification suite achieving a 100% test pass rate across core graph routing and broker integration pipelines."
      ],
      technologies: ["Python 3.11", "FastAPI", "PyTorch", "LangGraph", "React 19", "Three.js", "Docker", "Pytest", "PostgreSQL"],
      achievements: [
        { metric: "9/9", description: "Automated Pytest tests passing" },
        { metric: "<15ms", description: "WebSocket broker dispatch latency" }
      ],
      companyUrl: "https://github.com/Afzaln22",
      current: true
    },
    {
      id: 2,
      company: "Master of Computer Applications (MCA)",
      role: "Graduate Systems & Algorithm Researcher",
      type: "Academic Engineering",
      location: "Mysore, Karnataka, India",
      period: "2024 - 2026",
      duration: "2 Years",
      description: "Advanced studies and applied implementations in distributed systems, computer vision models, and scalable database architectures.",
      responsibilities: [
        "Conducted in-depth practical research into Explainable AI (Grad-CAM) to visualize facial artifact heatmaps for synthetic media detection.",
        "Engineered relational database models and normalized schemas using PostgreSQL, SQLite, and SQLAlchemy ORM.",
        "Collaborated on modern cross-platform web and mobile architectures leveraging React, Next.js, and Flutter."
      ],
      technologies: ["Algorithms", "Deep Learning", "Distributed Systems", "SQLAlchemy", "PostgreSQL", "Flutter", "Git"],
      achievements: [
        { metric: "MCA", description: "Graduate Candidate standing" },
        { metric: "100%", description: "Code test coverage on assignments" }
      ],
      companyUrl: "https://github.com/Afzaln22",
      current: true
    },
    {
      id: 3,
      company: "Bachelor of Computer Applications (BCA)",
      role: "Undergraduate Computer Applications Developer",
      type: "Degree Program",
      location: "Mysore, Karnataka, India",
      period: "2021 - 2024",
      duration: "3 Years",
      description: "Graduated with honors, establishing core fundamentals in object-oriented programming, data structures, and full-stack software development.",
      responsibilities: [
        "Developed responsive web applications and strengthened full-stack programming skills through hands-on development projects.",
        "Built database management systems adhering strictly to ACID principles and transactional integrity.",
        "Participated actively in technical symposia and coding hackathons representing the institution."
      ],
      technologies: ["Python", "Java", "Data Structures", "Database Design", "Web Development", "OOP"],
      achievements: [
        { metric: "Honors", description: "Graduated with Distinction" },
        { metric: "5+", description: "Software systems delivered" }
      ],
      companyUrl: "https://github.com/Afzaln22",
      current: false
    }
  ];

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
