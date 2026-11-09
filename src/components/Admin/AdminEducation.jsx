import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Save, Plus, Trash2, Check, GraduationCap, BookOpen } from 'lucide-react';

export const AdminEducation = () => {
  const { data, updateEducation, updatePublications } = usePortfolio();
  const [educationList, setEducationList] = useState(
    JSON.parse(JSON.stringify(data.education || []))
  );
  const [publicationsList, setPublicationsList] = useState(
    JSON.parse(JSON.stringify(data.publicationsAndResearch || []))
  );
  const [savedAlert, setSavedAlert] = useState(false);

  const handleEduChange = (idx, field, value) => {
    const updated = [...educationList];
    updated[idx][field] = value;
    setEducationList(updated);
  };

  const handlePubChange = (idx, field, value) => {
    const updated = [...publicationsList];
    updated[idx][field] = value;
    setPublicationsList(updated);
  };

  const handleSave = () => {
    updateEducation(educationList);
    updatePublications(publicationsList);
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
        <div>
          <h2 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
            Education & Research Manager
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Edit your degree qualifications and published research architectures
          </p>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center space-x-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium text-sm shadow-md transition-all active:scale-95"
        >
          {savedAlert ? <Check size={16} /> : <Save size={16} />}
          <span>{savedAlert ? 'Saved Successfully!' : 'Save Changes'}</span>
        </button>
      </div>

      {savedAlert && (
        <div className="p-4 bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-200 rounded-xl text-sm flex items-center space-x-2">
          <Check size={16} />
          <span>Education and Research items updated!</span>
        </div>
      )}

      {/* Education Items */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center space-x-2">
          <GraduationCap size={20} className="text-primary-500" />
          <span>Academic Degrees</span>
        </h3>

        {educationList.map((edu, idx) => (
          <div
            key={idx}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Degree Name
                </label>
                <input
                  type="text"
                  value={edu.degree || ''}
                  onChange={(e) => handleEduChange(idx, 'degree', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Institution / Location
                </label>
                <input
                  type="text"
                  value={edu.institution || ''}
                  onChange={(e) => handleEduChange(idx, 'institution', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Period / Years
                </label>
                <input
                  type="text"
                  value={edu.period || ''}
                  onChange={(e) => handleEduChange(idx, 'period', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Status / Standing
                </label>
                <input
                  type="text"
                  value={edu.status || ''}
                  onChange={(e) => handleEduChange(idx, 'status', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Description / Focus
                </label>
                <textarea
                  rows={2}
                  value={edu.description || ''}
                  onChange={(e) => handleEduChange(idx, 'description', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm resize-none"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Research & Publications */}
      <div className="space-y-6 pt-6 border-t border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center space-x-2">
          <BookOpen size={20} className="text-primary-500" />
          <span>Research & Publications</span>
        </h3>

        {publicationsList.map((pub, idx) => (
          <div
            key={idx}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-4"
          >
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Paper / Research Title
              </label>
              <input
                type="text"
                value={pub.title || ''}
                onChange={(e) => handlePubChange(idx, 'title', e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Journal / Conference
                </label>
                <input
                  type="text"
                  value={pub.journal || ''}
                  onChange={(e) => handlePubChange(idx, 'journal', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                  Year
                </label>
                <input
                  type="text"
                  value={pub.year || ''}
                  onChange={(e) => handlePubChange(idx, 'year', e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Abstract
              </label>
              <textarea
                rows={3}
                value={pub.abstract || ''}
                onChange={(e) => handlePubChange(idx, 'abstract', e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm resize-none"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

