import React, { createContext, useContext, useState, useEffect } from 'react';
import { portfolioData as defaultData } from '../data/portfolioData';

const PortfolioContext = createContext(null);
const STORAGE_KEY = 'afzal_portfolio_custom_data';

export const PortfolioProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Ensure all required top-level keys exist by merging with defaultData
        return {
          ...defaultData,
          ...parsed,
          personalInfo: { ...defaultData.personalInfo, ...(parsed.personalInfo || {}) }
        };
      }
    } catch (e) {
      console.error('Error loading portfolio data from localStorage:', e);
    }
    return defaultData;
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving portfolio data to localStorage:', e);
    }
  }, [data]);

  // Update Personal Info
  const updatePersonalInfo = (updatedFields) => {
    setData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        ...updatedFields
      }
    }));
  };

  // Projects CRUD
  const addProject = (newProject) => {
    const projectWithId = {
      ...newProject,
      id: newProject.id || `proj_${Date.now()}`
    };
    setData((prev) => ({
      ...prev,
      projects: [projectWithId, ...prev.projects]
    }));
  };

  const updateProject = (id, updatedFields) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
    }));
  };

  const deleteProject = (id) => {
    setData((prev) => ({
      ...prev,
      projects: prev.projects.filter((p) => p.id !== id)
    }));
  };

  // Experience CRUD
  const addExperience = (newExp) => {
    const expWithId = {
      ...newExp,
      id: newExp.id || Date.now()
    };
    setData((prev) => ({
      ...prev,
      experience: [expWithId, ...prev.experience]
    }));
  };

  const updateExperience = (id, updatedFields) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.map((e) => (e.id === id ? { ...e, ...updatedFields } : e))
    }));
  };

  const deleteExperience = (id) => {
    setData((prev) => ({
      ...prev,
      experience: prev.experience.filter((e) => e.id !== id)
    }));
  };

  // Skills Update
  const updateSkillCategories = (newCategories) => {
    setData((prev) => ({
      ...prev,
      skillCategories: newCategories
    }));
  };

  // Education CRUD
  const updateEducation = (newEducation) => {
    setData((prev) => ({
      ...prev,
      education: newEducation
    }));
  };

  // Publications / Research CRUD
  const updatePublications = (newPubs) => {
    setData((prev) => ({
      ...prev,
      publicationsAndResearch: newPubs
    }));
  };

  // Reset to default data
  const resetToDefaults = () => {
    localStorage.removeItem(STORAGE_KEY);
    setData(defaultData);
  };

  // Export current data as downloadable JS file (to replace portfolioData.js)
  const exportAsCodeFile = () => {
    const fileContent = `export const portfolioData = ${JSON.stringify(data, null, 2)};\n`;
    const blob = new Blob([fileContent], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'portfolioData.js';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <PortfolioContext.Provider
      value={{
        data,
        updatePersonalInfo,
        addProject,
        updateProject,
        deleteProject,
        addExperience,
        updateExperience,
        deleteExperience,
        updateSkillCategories,
        updateEducation,
        updatePublications,
        resetToDefaults,
        exportAsCodeFile
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};

