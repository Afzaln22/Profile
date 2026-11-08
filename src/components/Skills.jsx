import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, Brain, Globe, Database, Cloud, Wrench } from 'lucide-react';

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const skillCategories = [
    {
      title: "Backend Development",
      color: "blue",
      icon: <Server className="w-6 h-6" />,
      skills: ["Python 3.11+", "FastAPI", "RESTful APIs", "Microservices Architecture", "Node.js", "Express.js", "AsyncIO & Concurrency", "OOP Design"]
    },
    {
      title: "AI, Vision & LLMs",
      color: "purple",
      icon: <Brain className="w-6 h-6" />,
      skills: ["PyTorch", "Vision Transformers (ViT)", "YOLO Object Detection", "Grad-CAM (Explainable AI)", "LangGraph", "LangChain", "RAG Systems", "Scikit-Learn"]
    },
    {
      title: "Frontend & Mobile",
      color: "green",
      icon: <Globe className="w-6 h-6" />,
      skills: ["React.js 19", "Next.js 16 (App Router)", "Vite", "Tailwind CSS", "JavaScript (ES6+)", "Flutter & Dart", "Three.js / React Three Fiber", "Responsive Design"]
    },
    {
      title: "Databases & Storage",
      color: "orange",
      icon: <Database className="w-6 h-6" />,
      skills: ["PostgreSQL", "SQLite", "SQLAlchemy ORM", "Vector Databases", "Redis Caching", "MongoDB", "Data Normalization"]
    },
    {
      title: "DevOps & Cloud",
      color: "indigo",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Docker & Containers", "Git & GitHub Workflow", "Pytest Automated Suites", "Postman & API Testing", "Linux & Bash", "CI/CD Pipelines"]
    },
    {
      title: "Engineering Practices",
      color: "red",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Data Structures", "Algorithms", "System Architecture", "Performance Tuning", "Guardrails & Verification", "Agile / Scrum"]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        text: "text-blue-600 dark:text-blue-400",
        icon: "text-blue-500",
        skill: "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200"
      },
      green: {
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-800",
        text: "text-green-600 dark:text-green-400",
        icon: "text-green-500",
        skill: "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200"
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        text: "text-purple-600 dark:text-purple-400",
        icon: "text-purple-500",
        skill: "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200"
      },
      orange: {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-800",
        text: "text-orange-600 dark:text-orange-400",
        icon: "text-orange-500",
        skill: "bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-200"
      },
      red: {
        bg: "bg-red-50 dark:bg-red-900/20",
        border: "border-red-200 dark:border-red-800",
        text: "text-red-600 dark:text-red-400",
        icon: "text-red-500",
        skill: "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200"
      },
      indigo: {
        bg: "bg-indigo-50 dark:bg-indigo-900/20",
        border: "border-indigo-200 dark:border-indigo-800",
        text: "text-indigo-600 dark:text-indigo-400",
        icon: "text-indigo-500",
        skill: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-200"
      }
    };
    return colorMap[color] || colorMap.blue;
  };

  return (
    <section id="skills" className="section-padding bg-white dark:bg-gray-900">
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
            Technical <span className="gradient-text-primary">Skills</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Technologies and tools I work with across different domains
          </p>
        </motion.div>

        {/* 6 Themed Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => {
            const styles = getColorClasses(category.color);
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * catIdx }}
                className={`${styles.bg} ${styles.border} border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover-lift`}
              >
                {/* Header: Icon + Title */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className={styles.icon}>{category.icon}</div>
                  <h3 className={`text-xl font-bold ${styles.text}`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.4, delay: 0.1 * catIdx + 0.05 * skillIdx }}
                      whileHover={{ scale: 1.05 }}
                      className={`${styles.skill} px-3 py-2 rounded-lg text-sm font-medium cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
