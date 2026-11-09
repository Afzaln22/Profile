import React from 'react';
import { X, Download, Printer, ExternalLink, Mail, MapPin, Github, Linkedin, CheckCircle2 } from 'lucide-react';
import { usePortfolio } from '../context/PortfolioContext';

export const ResumeModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const { data } = usePortfolio();
  const { personalInfo, education, skillCategories, projects, experience } = data;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
        {/* Top Control Header */}
        <div className="p-4 sm:px-6 border-b border-gray-200 dark:border-gray-800 flex items-center justify-between bg-gray-50 dark:bg-gray-800/80">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-amber-500" />
            <span className="w-3 h-3 rounded-full bg-emerald-500" />
            <span className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-300 ml-2">
              Resume Preview - Afzal N
            </span>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-xs font-medium transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-500 dark:text-gray-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Resume Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 print:p-0">
          {/* Header */}
          <div className="border-b border-gray-200 dark:border-gray-800 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display">
                Afzal <span className="text-primary-600 dark:text-cyanAccent-brand">N</span>
              </h1>
              <p className="text-base font-semibold text-gray-600 dark:text-gray-300 mt-1">
                Software Engineer • Python & FastAPI Backend • AI/ML & Vision Enthusiast
              </p>
            </div>

            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 space-y-1 font-mono">
              <div className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary-500" />
                <span>Mysore, Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Mail className="w-3.5 h-3.5 text-primary-500" />
                <span>afzaln2003@gmail.com</span>
              </div>
              <div className="flex items-center space-x-1.5">
                <Github className="w-3.5 h-3.5 text-primary-500" />
                <span>github.com/Afzaln22</span>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-cyanAccent-brand border-b border-primary-500/20 pb-1 mb-2">
              Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              MCA candidate and BCA graduate with demonstrable expertise in architecting high-performance backend microservices (Python, FastAPI, PostgreSQL), designing stateful Agentic AI systems with LangGraph, and training computer vision models (PyTorch, Vision Transformers, YOLO, Grad-CAM). Strong advocate of clean code principles, test-driven development (Pytest 100% verified), and low-latency system design.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-cyanAccent-brand border-b border-primary-500/20 pb-1 mb-3">
              Education
            </h2>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-start justify-between gap-1">
                  <div>
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      {edu.institution} • <span className="font-semibold text-primary-600 dark:text-cyanAccent-brand">{edu.status}</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {edu.description}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-gray-500 dark:text-gray-400 whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-cyanAccent-brand border-b border-primary-500/20 pb-1 mb-3">
              Technical Core Competencies
            </h2>
            <div className="grid sm:grid-cols-2 gap-3 text-xs">
              {skillCategories.map((cat) => (
                <div key={cat.name} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800">
                  <div className="font-bold text-gray-900 dark:text-white mb-1.5">{cat.name}:</div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Flagship Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-primary-600 dark:text-cyanAccent-brand border-b border-primary-500/20 pb-1 mb-3">
              Key Engineering Projects
            </h2>
            <div className="space-y-5">
              {projects.slice(0, 3).map((proj) => (
                <div key={proj.id} className="space-y-1.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                      {proj.title}
                    </h3>
                    <span className="text-xs font-mono text-primary-600 dark:text-cyanAccent-brand">
                      {proj.techStack.slice(0, 4).join(' • ')}
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300">
                    {proj.shortDescription}
                  </p>
                  <ul className="list-disc list-inside text-xs text-gray-500 dark:text-gray-400 space-y-0.5">
                    {proj.highlights.slice(0, 2).map((hl, idx) => (
                      <li key={idx}>{hl}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/80 flex items-center justify-between">
          <span className="text-xs text-gray-500 dark:text-gray-400">
            Profile verified from GitHub & MCA Candidate records
          </span>
          <button
            onClick={handlePrint}
            className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-600 to-cyanAccent-500 text-white font-medium text-xs shadow-md"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download PDF / Print</span>
          </button>
        </div>
      </div>
    </div>
  );
};

