import React, { useState } from 'react';
import { usePortfolio } from '../../context/PortfolioContext';
import { Save, Plus, Trash2, Check, User, MapPin, Mail, Github, Linkedin } from 'lucide-react';

export const AdminProfile = () => {
  const { data, updatePersonalInfo } = usePortfolio();
  const [profile, setProfile] = useState({ ...data.personalInfo });
  const [newRole, setNewRole] = useState('');
  const [savedAlert, setSavedAlert] = useState(false);

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddRole = (e) => {
    e.preventDefault();
    if (!newRole.trim()) return;
    setProfile((prev) => ({
      ...prev,
      roles: [...prev.roles, newRole.trim()]
    }));
    setNewRole('');
  };

  const handleRemoveRole = (index) => {
    setProfile((prev) => ({
      ...prev,
      roles: prev.roles.filter((_, i) => i !== index)
    }));
  };

  const handleSave = () => {
    updatePersonalInfo(profile);
    setSavedAlert(true);
    setTimeout(() => setSavedAlert(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-4xl">
      <div className="flex items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-800">
        <div>
          <h2 className="text-2xl font-bold font-display text-gray-900 dark:text-white">
            Profile & Personal Details
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Edit your hero introductions, animated titles, location, and bio
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
          <span>Profile changes updated and saved to your live portfolio!</span>
        </div>
      )}

      {/* Basic Info */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 space-y-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center space-x-2">
          <User size={18} className="text-primary-500" />
          <span>Basic Information</span>
        </h3>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={profile.name || ''}
              onChange={handleFieldChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Primary Role / Title
            </label>
            <input
              type="text"
              name="role"
              value={profile.role || ''}
              onChange={handleFieldChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={profile.location || ''}
              onChange={handleFieldChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={profile.email || ''}
              onChange={handleFieldChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              GitHub Profile URL
            </label>
            <input
              type="text"
              name="github"
              value={profile.github || ''}
              onChange={handleFieldChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
              LinkedIn Profile URL
            </label>
            <input
              type="text"
              name="linkedin"
              value={profile.linkedin || ''}
              onChange={handleFieldChange}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Profile Avatar Image URL
          </label>
          <input
            type="text"
            name="avatarUrl"
            value={profile.avatarUrl || ''}
            onChange={handleFieldChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm font-mono text-xs"
          />
        </div>
      </div>

      {/* Animated Typing Roles */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 space-y-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Hero Typewriter Roles (Rotating Titles)
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          These titles cycle with an animated typing effect in your Hero section
        </p>

        <div className="space-y-2">
          {profile.roles?.map((r, i) => (
            <div
              key={i}
              className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
            >
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                {r}
              </span>
              <button
                type="button"
                onClick={() => handleRemoveRole(i)}
                className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/30 rounded-lg transition-colors"
                title="Remove Role"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>

        <div className="flex gap-2 pt-2">
          <input
            type="text"
            value={newRole}
            onChange={(e) => setNewRole(e.target.value)}
            placeholder="Add new role (e.g. Cloud Architect, DevOps Engineer)"
            className="flex-1 px-3.5 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm"
          />
          <button
            type="button"
            onClick={handleAddRole}
            className="px-4 py-2 bg-gray-900 dark:bg-gray-700 hover:bg-black text-white text-sm font-medium rounded-xl flex items-center space-x-1"
          >
            <Plus size={16} />
            <span>Add Role</span>
          </button>
        </div>
      </div>

      {/* Bio & Philosophy */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 space-y-4">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
          Bio & About Narrative
        </h3>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Short Tagline / Hero Bio
          </label>
          <textarea
            rows={2}
            name="shortBio"
            value={profile.shortBio || ''}
            onChange={handleFieldChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm resize-none"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
            Full About Journey Description
          </label>
          <textarea
            rows={4}
            name="aboutBio"
            value={profile.aboutBio || ''}
            onChange={handleFieldChange}
            className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-sm resize-none"
          />
        </div>
      </div>
    </div>
  );
};

