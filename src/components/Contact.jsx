import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, ExternalLink, CheckCircle, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { usePortfolio } from '../context/PortfolioContext';

export const Contact = () => {
  const { data } = usePortfolio();
  const contactInfo = data.contactInfo || { email: data.personalInfo?.email, location: data.personalInfo?.location };
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const getMailtoUrl = () => {
    const to = contactInfo.email;
    const subject = formData.subject || "Portfolio Contact Form Message";
    const body = `Hi Afzal,\n\nMy name is ${formData.name || '[Your Name]'} and I'm reaching out through your portfolio contact form.\n\n${formData.message || '[Your message here]'}\n\nBest regards,\n${formData.name || '[Your Name]'}\n${formData.email ? `\nEmail: ${formData.email}` : ''}`;
    const params = new URLSearchParams({ to, subject, body });
    return `mailto:${to}?${params.toString()}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been prepared. Opening your email client to send directly to afzaln2003@gmail.com...'
      });

      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.7 }
        });
      } catch (err) {}

      // Trigger mailto client
      window.location.href = getMailtoUrl();

      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 3000);
    }, 600);
  };

  const contactCards = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      value: contactInfo.email,
      link: `mailto:${contactInfo.email}`,
      color: "blue"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      value: contactInfo.location,
      link: "https://maps.google.com/?q=Mysore,India",
      color: "red"
    }
  ];

  const socialCards = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: data.personalInfo?.github || "https://github.com/Afzaln22",
      color: "gray",
      description: "Check out my code repositories"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: data.personalInfo?.linkedin || "https://linkedin.com/in/afzal-n-87296b29",
      color: "blue",
      description: "Connect with me professionally"
    }
  ];

  const getBtnBg = (color) => {
    const map = {
      blue: "bg-blue-500 hover:bg-blue-600 text-white",
      green: "bg-green-500 hover:bg-green-600 text-white",
      red: "bg-red-500 hover:bg-red-600 text-white",
      gray: "bg-gray-800 hover:bg-gray-900 text-white"
    };
    return map[color] || map.blue;
  };

  return (
    <section id="contact" className="section-padding bg-white dark:bg-gray-900">
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
            Let's Build Something <span className="gradient-text-primary">Together</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on your next project? I'm always excited to work on innovative solutions and tackle challenging problems.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
          {/* Left Column: Contact & Social Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Whether you have an opportunity, a technical question, or an innovative AI/backend project, feel free to reach out. I will get back to you promptly!
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {contactCards.map((c, i) => (
                <motion.a
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={c.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all duration-300 hover-lift border border-gray-100 dark:border-gray-700"
                >
                  <div className={`p-3 rounded-lg mr-4 ${getBtnBg(c.color)} shadow-sm`}>
                    {c.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {c.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {c.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Cards */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Connect with Me
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {socialCards.map((s, i) => (
                  <motion.a
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl hover:shadow-md transition-all duration-300 hover-lift border border-gray-100 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-lg ${getBtnBg(s.color)}`}>
                        {s.icon}
                      </div>
                      <ExternalLink size={16} className="text-gray-400" />
                    </div>
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {s.name}
                    </h5>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {s.description}
                    </p>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>

            {status.message && (
              <div
                className={`p-4 rounded-xl mb-6 flex items-start space-x-3 text-sm ${
                  status.type === 'success'
                    ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300'
                    : 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300'
                }`}
              >
                {status.type === 'success' ? (
                  <CheckCircle size={18} className="flex-shrink-0 mt-0.5 text-green-600" />
                ) : (
                  <AlertCircle size={18} className="flex-shrink-0 mt-0.5 text-red-600" />
                )}
                <span>{status.message}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Discussion / Opportunity"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hi Afzal, I'd like to talk about..."
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-70"
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
