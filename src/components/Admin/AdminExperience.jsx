import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Plus, Edit2, Trash2, Check, X, Briefcase, Calendar, MapPin } from 'lucide-react';

export const AdminExperience = () => {
  const { data, addExperience, updateExperience, deleteExperience } = usePortfolio();
  const [editingId, setEditingId] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const initialForm = {
    role: '',
    company: '',
    type: 'Project Engineering',
    period: '2024 - Present',
    duration: 'Ongoing',
    location: 'Mysore, Karnataka, India',
    description: '',
    responsibilities: ['', ''],
    technologies: [],
    achievements: [
      { metric: '100%', description: 'Code reliability' },
      { metric: '9/9', description: 'Tests passing' }
    ],
    companyUrl: 'https://github.com/Afzaln22'
  };

  const [formData, setFormData] = useState(initialForm);
  const [techInput, setTechInput] = useState('');

  const handleStartEdit = (exp) => {
    setEditingId(exp.id);
    setIsAddingNew(false);
    setFormData({
      ...exp,
      responsibilities: exp.responsibilities?.length ? [...exp.responsibilities] : ['', ''],
      achievements: exp.achievements?.length ? [...exp.achievements] : []
    });
    setTechInput(exp.technologies?.join(', ') || '');
  };

  const handleStartAdd = () => {
    setEditingId(null);
    setIsAddingNew(true);
    setFormData(initialForm);
    setTechInput('');
  };

  const handleCancel = () => {
    setEditingId(null);
    setIsAddingNew(false);
    setFormData(initialForm);
    setTechInput('');
  };

  const handleRespChange = (index, val) => {
    const updated = [...formData.responsibilities];
    updated[index] = val;
    setFormData({ ...formData, responsibilities: updated });
  };

  const handleAddResp = () => {
    setFormData({ ...formData, responsibilities: [...formData.responsibilities, ''] });
  };

  const handleRemoveResp = (index) => {
    setFormData({
      ...formData,
      responsibilities: formData.responsibilities.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedTech = techInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const cleanExp = {
      ...formData,
      technologies: parsedTech,
      responsibilities: formData.responsibilities.filter(Boolean)
    };

    if (isAddingNew) {
      addExperience(cleanExp);
    } else if (editingId) {
      updateExperience(editingId, cleanExp);
    }

    handleCancel();
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
        <div>
          <h2 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
            Experience & Roles Manager
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Manage your professional journey, internships, academic training, and key metrics
          </p>
        </div>

        {!isAddingNew && !editingId && (
          <button
            onClick={handleStartAdd}
            className="flex items-center space-x-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium text-sm shadow-md transition-all active:scale-95"
          >
            <Plus size={16} />
            <span>Add Experience Entry</span>
          </button>
        )}
      </div>

      {/* Form (Add / Edit) */}
      {(isAddingNew || editingId) && (
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-primary-500/50 shadow-xl space-y-6"
        >
          <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <Briefcase size={18} className="text-primary-500" />
              <span>{isAddingNew ? 'Add Experience Entry' : 'Edit Experience'}</span>
            </h3>
            <button
              type="button"
              onClick={handleCancel}
              className="p-1.5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
            >
              <X size={18} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Role / Title *
              </label>
              <input
                type="text"
                required
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                placeholder="e.g. Lead Full-Stack & AI Software Developer"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Company / Organization *
              </label>
              <input
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="e.g. Independent Systems & Applied AI"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Engagement Type
              </label>
              <input
                type="text"
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                placeholder="Full-time / Internship / Academic Engineering"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Period / Dates
              </label>
              <input
                type="text"
                value={formData.period}
                onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                placeholder="e.g. 2024 - Present"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Location
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="Mysore, Karnataka, India / Remote"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Company / Reference URL
              </label>
              <input
                type="text"
                value={formData.companyUrl}
                onChange={(e) => setFormData({ ...formData, companyUrl: e.target.value })}
                placeholder="https://github.com/Afzaln22"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Overview Description
              </label>
              <textarea
                rows={2}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="Summary of responsibilities and scope..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm resize-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Technologies Used (comma-separated)
              </label>
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                placeholder="Python 3.11, FastAPI, PyTorch, React, Docker, Pytest"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
              />
            </div>
          </div>

          {/* Responsibilities Bullets */}
          <div className="space-y-2 pt-2">
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
              Key Responsibilities / Bullet Achievements
            </label>
            {formData.responsibilities.map((resp, i) => (
              <div key={i} className="flex gap-2">
                <input
                  type="text"
                  value={resp}
                  onChange={(e) => handleRespChange(i, e.target.value)}
                  placeholder={`Responsibility ${i + 1}`}
                  className="flex-1 px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveResp(i)}
                  className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddResp}
              className="text-xs text-primary-600 dark:text-primary-400 font-semibold hover:underline flex items-center space-x-1 pt-1"
            >
              <Plus size={14} />
              <span>Add Another Responsibility</span>
            </button>
          </div>

          <div className="flex items-center justify-end space-x-3 pt-4 border-t border-gray-100 dark:border-gray-700">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 rounded-xl text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-xl text-sm shadow-md"
            >
              {isAddingNew ? 'Save Experience' : 'Update Experience'}
            </button>
          </div>
        </form>
      )}

      {/* Experience List */}
      <div className="space-y-4">
        {data.experience.map((exp) => (
          <div
            key={exp.id || exp.company}
            className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300">
                  {exp.type}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  {exp.period}
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                {exp.role}
              </h4>
              <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                {exp.company} • <span className="text-gray-500 font-normal">{exp.location}</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-2 max-w-xl">
                {exp.description}
              </p>
            </div>

            <div className="flex items-center space-x-2 self-end sm:self-center flex-shrink-0">
              <button
                type="button"
                onClick={() => handleStartEdit(exp)}
                className="p-2 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors"
                title="Edit Experience"
              >
                <Edit2 size={16} />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (window.confirm(`Delete experience entry for "${exp.company}"?`)) {
                    deleteExperience(exp.id);
                  }
                }}
                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                title="Delete Experience"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
