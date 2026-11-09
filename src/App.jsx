import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { AdminDashboard } from './components/Admin/AdminDashboard';
import { AdminLogin } from './components/Admin/AdminLogin';

export function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isAdminView, setIsAdminView] = useState(() => {
    return window.location.hash === '#admin' || window.location.pathname === '/admin';
  });
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_authenticated') === 'true';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleHashChange = () => {
      setIsAdminView(window.location.hash === '#admin');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const handleOpenAdmin = () => {
    window.location.hash = '#admin';
    setIsAdminView(true);
  };

  const handleBackToPortfolio = () => {
    window.location.hash = '';
    setIsAdminView(false);
  };

  const handleLoginSuccess = () => {
    sessionStorage.setItem('admin_authenticated', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_authenticated');
    setIsAuthenticated(false);
  };

  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        {isAdminView ? (
          isAuthenticated ? (
            <AdminDashboard
              onBackToPortfolio={handleBackToPortfolio}
              onLogout={handleLogout}
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
            />
          ) : (
            <AdminLogin
              onLoginSuccess={handleLoginSuccess}
              onBackToPortfolio={handleBackToPortfolio}
            />
          )
        ) : (
          <>
            {/* Live Navigation */}
            <Navbar
              darkMode={darkMode}
              toggleDarkMode={toggleDarkMode}
              onOpenResume={() => setIsResumeOpen(true)}
              onOpenAdmin={handleOpenAdmin}
            />

            {/* Main Content Sections */}
            <main>
              <Hero onOpenResume={() => setIsResumeOpen(true)} />
              <About />
              <Skills />
              <Projects />
              <Experience />
              <Certifications />
              <Contact />
            </main>

            {/* Footer with Admin Portal trigger */}
            <Footer onOpenAdmin={handleOpenAdmin} />

            {/* Interactive Resume Modal */}
            <ResumeModal
              isOpen={isResumeOpen}
              onClose={() => setIsResumeOpen(false)}
            />
          </>
        )}
      </div>
    </PortfolioProvider>
  );
}

export default App;
