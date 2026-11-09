import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { AdminProfile } from './AdminProfile';
import { AdminProjects } from './AdminProjects';
import { AdminExperience } from './AdminExperience';
import { AdminSkills } from './AdminSkills';
import { AdminEducation } from './AdminEducation';
import {
  User,
  Briefcase,
  Layers,
  Sparkles,
  GraduationCap,
  Download,
  RotateCcw,
  ArrowLeft,
  LogOut,
  Sun,
  Moon,
  LayoutDashboard,
  CheckCircle,
  ExternalLink
} from 'lucide-react';

export const AdminDashboard = ({ onBackToPortfolio, onLogout, darkMode, toggleDarkMode }) => {
  const { data, exportAsCodeFile, resetToDefaults } = usePortfolio();
  const [activeTab, setActiveTab] = useState('overview');
  const [resetSuccess, setResetSuccess] = useState(false);

  const tabs = [
    { key: 'overview', label: 'Overview', icon: LayoutDashboard },
    { key: 'profile', label: 'Profile & Hero', icon: User },
    { key: 'projects', label: 'Projects Manager', icon: Layers, count: data.projects.length },
    { key: 'experience', label: 'Work Experience', icon: Briefcase, count: data.experience.length },
    { key: 'skills', label: 'Technical Skills', icon: Sparkles },
    { key: 'education', label: 'Education & Research', icon: GraduationCap }
  ];

  const handleReset = () => {
    if (window.confirm('Reset all portfolio data to default settings? This will clear any local edits.')) {
      resetToDefaults();
      setResetSuccess(true);
      setTimeout(() => setResetSuccess(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 px-6 py-3.5 flex items-center justify-between shadow-sm">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBackToPortfolio}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="hidden sm:inline">Back to Live Portfolio</span>
            <span className="sm:hidden">Portfolio</span>
          </button>

          <div className="h-5 w-px bg-gray-200 dark:bg-gray-700 hidden sm:block" />

          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 uppercase">
              Admin CMS
            </span>
            <span className="text-sm font-bold font-display text-gray-900 dark:text-white hidden md:inline">
              Portfolio Content Manager
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={exportAsCodeFile}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm transition-all"
            title="Download updated portfolioData.js to permanently replace file"
          >
            <Download size={14} />
            <span className="hidden md:inline">Export Code</span>
          </button>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle Theme"
          >
            {darkMode ? <Sun size={18} className="text-yellow-500" /> : <Moon size={18} className="text-primary-600" />}
          </button>

          <button
            onClick={onLogout}
            className="p-2 rounded-lg text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 transition-colors"
            title="Lock / Logout"
          >
            <LogOut size={18} />
          </button>
        </div>
      </header>

      {/* Main Body with Sidebar + Content */}
      <div className="flex-1 flex flex-col md:flex-row container mx-auto px-4 sm:px-6 py-6 gap-6">
        {/* Sidebar Navigation */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-1">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-3 border border-gray-200 dark:border-gray-800 shadow-sm space-y-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary-600 text-white shadow-sm font-semibold'
                      : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon size={18} />
                    <span>{tab.label}</span>
                  </div>
                  {tab.count !== undefined && (
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Quick Actions Panel */}
          <div className="p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm space-y-3">
            <h4 className="text-xs font-bold uppercase text-gray-400 tracking-wider">
              Data & Storage
            </h4>

            <button
              onClick={exportAsCodeFile}
              className="w-full flex items-center space-x-2 text-xs font-medium text-emerald-600 dark:text-emerald-400 hover:underline"
            >
              <Download size={14} />
              <span>Download updated portfolioData.js</span>
            </button>

            <button
              onClick={handleReset}
              className="w-full flex items-center space-x-2 text-xs font-medium text-red-500 hover:underline"
            >
              <RotateCcw size={14} />
              <span>Reset to Defaults</span>
            </button>

            {resetSuccess && (
              <p className="text-[11px] text-green-600 dark:text-green-400">
                Data reset to initial state.
              </p>
            )}
          </div>
        </aside>

        {/* Dynamic Tab Content Area */}
        <main className="flex-1 min-w-0">
          {activeTab === 'overview' && (
            <div className="space-y-6 max-w-4xl">
              <div>
                <h2 className="text-3xl font-bold font-display text-gray-900 dark:text-white">
                  Welcome to Portfolio Admin, {data.personalInfo.name.split(' ')[0]} 👋
                </h2>
                <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
                  Manage all sections, real-time preview, and projects in one place. All edits take effect on your live portfolio immediately!
                </p>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div
                  onClick={() => setActiveTab('projects')}
                  className="p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:border-primary-500 cursor-pointer transition-all"
                >
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {data.projects.length}
                  </div>
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Active Projects
                  </div>
                </div>

                <div
                  onClick={() => setActiveTab('experience')}
                  className="p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:border-green-500 cursor-pointer transition-all"
                >
                  <div className="text-2xl font-bold text-green-600 mb-1">
                    {data.experience.length}
                  </div>
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Experience Entries
                  </div>
                </div>

                <div
                  onClick={() => setActiveTab('skills')}
                  className="p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:border-purple-500 cursor-pointer transition-all"
                >
                  <div className="text-2xl font-bold text-purple-600 mb-1">
                    {data.skillCategories.length}
                  </div>
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Skill Categories
                  </div>
                </div>

                <div
                  onClick={() => setActiveTab('education')}
                  className="p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:border-orange-500 cursor-pointer transition-all"
                >
                  <div className="text-2xl font-bold text-orange-600 mb-1">
                    {data.education.length}
                  </div>
                  <div className="text-xs font-medium text-gray-500 dark:text-gray-400">
                    Education Degrees
                  </div>
                </div>
              </div>

              {/* Instructions Card */}
              <div className="p-6 bg-gradient-to-r from-primary-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800/80 rounded-2xl border border-primary-200/60 dark:border-gray-700 space-y-3">
                <div className="flex items-center space-x-2 text-primary-700 dark:text-primary-300 text-sm font-bold">
                  <CheckCircle size={18} />
                  <span>How Content Updates Work</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  1. Any edits you make here in the Admin Dashboard are <strong>instantly active</strong> on your live portfolio via local persistence.
                  <br />
                  2. To make your changes permanent in code so they can be pushed to GitHub, click <strong>"Export Code"</strong> at the top right to download the updated <code className="bg-white/80 dark:bg-gray-800 px-1 py-0.5 rounded text-primary-600">portfolioData.js</code> file.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onBackToPortfolio}
                    className="inline-flex items-center space-x-1.5 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-xl text-xs font-medium shadow-sm transition-all"
                  >
                    <span>View Live Portfolio Now</span>
                    <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && <AdminProfile />}
          {activeTab === 'projects' && <AdminProjects />}
          {activeTab === 'experience' && <AdminExperience />}
          {activeTab === 'skills' && <AdminSkills />}
          {activeTab === 'education' && <AdminEducation />}
        </main>
      </div>
    </div>
  );
};
