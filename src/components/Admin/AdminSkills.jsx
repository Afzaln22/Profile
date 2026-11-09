import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Save, Plus, Trash2, Check, Sparkles } from 'lucide-react';

export const AdminSkills = () => {
  const { data, updateSkillCategories } = usePortfolio();
  const [categories, setCategories] = useState(
    JSON.parse(JSON.stringify(data.skillCategories || []))
  );
  const [savedAlert, setSavedAlert] = useState(false);
  const [newSkillText, setNewSkillText] = useState({});

  const handleSave = () => {
    updateSkillCategories(categories);
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 2500);
  };

  const handleRemoveSkill = (catIndex, skillIndex) => {
    const updated = [...categories];
    updated[catIndex].skills.splice(skillIndex, 1);
    setCategories(updated);
  };

  const handleAddSkill = (catIndex) => {
    const text = newSkillText[catIndex]?.trim();
    if (!text) return;

    const updated = [...categories];
    const category = updated[catIndex];

    if (category.skills[0] && typeof category.skills[0] === 'object') {
      category.skills.push({ name: text, level: 'Advanced', icon: '⚡' });
    } else {
      category.skills.push(text);
    }

    setCategories(updated);
    setNewSkillText({ ...newSkillText, [catIndex]: '' });
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
        <div>
          <h2 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
            Technical Skills Manager
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Add, edit, or remove technologies and frameworks displayed in your skills grid
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
          <span>Skills updated across your portfolio!</span>
        </div>
      )}

      <div className="space-y-6">
        {categories.map((cat, catIdx) => (
          <div
            key={cat.name || cat.title || catIdx}
            className="p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm space-y-4"
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100 dark:border-gray-700">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center space-x-2">
                <Sparkles size={16} className="text-primary-500" />
                <span>{cat.name || cat.title}</span>
              </h3>
              <span className="text-xs text-gray-400 font-mono">
                {cat.skills?.length} items
              </span>
            </div>

            {/* Skills Pills with delete button */}
            <div className="flex flex-wrap gap-2">
              {cat.skills?.map((s, sIdx) => {
                const skillName = typeof s === 'object' ? s.name : s;
                return (
                  <span
                    key={sIdx}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-medium"
                  >
                    <span>{skillName}</span>
                    <button
                      type="button"
                      onClick={() => handleRemoveSkill(catIdx, sIdx)}
                      className="text-gray-400 hover:text-red-500 transition-colors ml-1"
                    >
                      ×
                    </button>
                  </span>
                );
              })}
            </div>

            {/* Add Skill to this Category */}
            <div className="flex gap-2 pt-2">
              <input
                type="text"
                value={newSkillText[catIdx] || ''}
                onChange={(e) =>
                  setNewSkillText({ ...newSkillText, [catIdx]: e.target.value })
                }
                placeholder="Add technology (e.g. Redis, GraphQL, Kubernetes)"
                className="flex-1 px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-xs sm:text-sm"
              />
              <button
                type="button"
                onClick={() => handleAddSkill(catIdx)}
                className="px-4 py-2 bg-gray-900 dark:bg-gray-700 hover:bg-black text-white text-xs font-semibold rounded-xl flex items-center space-x-1"
              >
                <Plus size={14} />
                <span>Add</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

