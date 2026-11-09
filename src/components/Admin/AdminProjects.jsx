import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Plus, Edit2, Trash2, Check, X, ExternalLink, Github, Code, Sparkles } from 'lucide-react';

export const AdminProjects = () => {
  const { data, addProject, updateProject, deleteProject } = usePortfolio();
  const [editingId, setEditingId] = useState(null);
  const [isAddingNew, setIsAddingNew] = useState(false);

  const initialForm = {
    title: '',
    category: 'Full Stack',
    badge: 'Completed',
    featured: true,
    shortDescription: '',
    description: '',
    highlights: ['', ''],
    techStack: [],
    githubUrl: '',
    demoUrl: '',
    gradient: 'from-blue-600 via-indigo-600 to-purple-600'
  };

  const [formData, setFormData] = useState(initialForm);
  const [techInput, setTechInput] = useState('');

  const handleStartEdit = (project) => {
    setEditingId(project.id);
    setIsAddingNew(false);
    setFormData({
      ...project,
      highlights: project.highlights?.length ? [...project.highlights] : ['', ''],
      techStack: project.techStack?.length ? [...project.techStack] : []
    });
    setTechInput(project.techStack?.join(', ') || '');
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

  const handleHighlightChange = (index, val) => {
    const updated = [...formData.highlights];
    updated[index] = val;
    setFormData({ ...formData, highlights: updated });
  };

  const handleAddHighlight = () => {
    setFormData({ ...formData, highlights: [...formData.highlights, ''] });
  };

  const handleRemoveHighlight = (index) => {
    setFormData({
      ...formData,
      highlights: formData.highlights.filter((_, i) => i !== index)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedTech = techInput
      .split(',')
      .map((t) => t.trim())
      .filter(Boolean);

    const cleanProject = {
      ...formData,
      techStack: parsedTech,
      highlights: formData.highlights.filter(Boolean)
    };

    if (isAddingNew) {
      addProject(cleanProject);
    } else if (editingId) {
      updateProject(editingId, cleanProject);
    }

    handleCancel();
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
        <div>
          <h2 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
            Projects Manager
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Create, edit, and organize all featured engineering projects on your portfolio
          </p>
        </div>

        {!isAddingNew && !editingId && (
          <button
            onClick={handleStartAdd}
            className="flex items-center space-x-2 px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white rounded-xl font-medium text-sm shadow-md transition-all active:scale-95"
          >
            <Plus size={16} />
            <span>Add New Project</span>
          </button>
        )}
      </div>

      {/* Project Form (Add / Edit) */}
      {(isAddingNew || editingId) && (
        <form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 border-2 border-primary-500/50 shadow-xl space-y-6"
        >
          <div className="flex items-center justify-between pb-2 border-b border-gray-100 dark:border-gray-700">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <Sparkles size={18} className="text-primary-500" />
              <span>{isAddingNew ? 'Create New Project' : 'Edit Project Details'}</span>
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
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Project Title *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="e.g. AlgoForge - Quantitative Trading & Agentic AI"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
              >
                <option value="AI & ML">AI & ML</option>
                <option value="Full Stack">Full Stack</option>
                <option value="Backend">Backend</option>
                <option value="Frontend">Frontend</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Status Badge
              </label>
              <input
                type="text"
                value={formData.badge}
                onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                placeholder="Completed / In Progress / Production Ready"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
              >
              </input>
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Short Description (Cards) *
              </label>
              <textarea
                rows={2}
                required
                value={formData.shortDescription}
                onChange={(e) => setFormData({ ...formData, shortDescription: e.target.value })}
                placeholder="Brief summary shown on project showcase cards..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm resize-none"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Full Description (Modal Deep Dive)
              </label>
              <textarea
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                placeholder="In-depth explanation of system architecture and business logic..."
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                GitHub Repository URL
              </label>
              <input
                type="text"
                value={formData.githubUrl}
                onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
                placeholder="https://github.com/Afzaln22/your-repo"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Live Demo / Architecture URL
              </label>
              <input
                type="text"
                value={formData.demoUrl}
                onChange={(e) => setFormData({ ...formData, demoUrl: e.target.value })}
                placeholder="https://demo.example.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
              />
            </div>

            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                Tech Stack (comma-separated)
              </label>
              <input
                type="text"
                value={techInput}
                onChange={(e) => setTechInput(e.target.value)}
                placeholder="e.g. Python, FastAPI, React 19, Tailwind CSS, Pytest"
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
              />
            </div>
          </div>

          {/* Key Highlights */}
          <div className="space-y-2 pt-2">
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">
              Key Highlights / Bullets
            </label>
            {formData.highlights.map((hl, i) => (
              <div key={i} className="flex gap-2">
                <input
                  type="text"
                  value={hl}
                  onChange={(e) => handleHighlightChange(i, e.target.value)}
                  placeholder={`Highlight ${i + 1}`}
                  className="flex-1 px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
                />
                <button
                  type="button"
                  onClick={() => handleRemoveHighlight(i)}
                  className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddHighlight}
              className="text-xs text-primary-600 dark:text-primary-400 font-semibold hover:underline flex items-center space-x-1 pt-1"
            >
              <Plus size={14} />
              <span>Add Another Highlight</span>
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
              {isAddingNew ? 'Save New Project' : 'Update Project'}
            </button>
          </div>
        </form>
      )}

      {/* Projects List */}
      <div className="space-y-4">
        {data.projects.map((proj) => (
          <div
            key={proj.id}
            className="p-5 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          >
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300">
                  {proj.category}
                </span>
                <span className="text-xs text-gray-400 font-mono">
                  {proj.badge}
                </span>
              </div>
              <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                {proj.title}
              </h4>
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-1 max-w-xl">
                {proj.shortDescription}
              </p>
              <div className="flex flex-wrap gap-1 pt-1">
                {proj.techStack?.slice(0, 5).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 rounded text-[10px] bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-2 self-end sm:self-center flex-shrink-0">
              <button
                type="button"
                onClick={() => handleStartEdit(proj)}
                className="p-2 text-primary-600 hover:bg-primary-50 dark:hover:bg-primary-900/30 rounded-lg transition-colors"
                title="Edit Project"
              >
                <Edit2 size={16} />
              </button>
              <button
                type="button"
                onClick={() => {
                  if (window.confirm(`Delete project "${proj.title}"?`)) {
                    deleteProject(proj.id);
                  }
                }}
                className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                title="Delete Project"
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
