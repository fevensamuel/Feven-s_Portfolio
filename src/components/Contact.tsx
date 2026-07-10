import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Send, Github, Linkedin, MessageSquare, Check, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

// EMAILJS CREDENTIALS
const EMAILJS_SERVICE_ID = 'service_po863hd';
const EMAILJS_TEMPLATE_ID = 'template_if5wtc9';
const EMAILJS_PUBLIC_KEY = 'IY6Rf-s4CHtiw386b';

// ✅ YOUR REAL EMAIL ADDRESS
const YOUR_EMAIL = 'fevensamuelrahel@gmail.com';

// ✅ YOUR REAL SOCIAL LINKS (hardcoded)
const GITHUB_URL = 'https://github.com/fevensamuel';
const LINKEDIN_URL = 'https://www.linkedin.com/in/feven-samuel-087a23419/';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      setError('Please fill out all fields before submitting.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please provide a valid email address.');
      return;
    }

    setIsSending(true);
    setError('');

    try {
      // ✅ FIXED: Variables match your EmailJS template
      // Your template expects: {{title}}, {{name}}, {{email}}, {{content}}
      const templateParams = {
        title: subject,        // → {{title}}
        name: name,            // → {{name}}
        email: email,          // → {{email}}
        content: message,      // → {{content}}
      };

      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setIsSent(false), 5000);
      } else {
        setError('Failed to send message. Please try again later.');
      }
    } catch (err) {
      console.error('EmailJS Error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#050505] transition-colors duration-300 relative overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-violet-500/5 dark:bg-violet-500/5 rounded-full filter blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
            Get In Touch
          </h2>
          <div className="h-1.5 w-16 bg-violet-600 dark:bg-violet-400 mx-auto rounded-full mb-4" />
          <p className="text-zinc-600 dark:text-slate-400">
            Have a project in mind, an internship opportunity, or simply want to chat? Leave a message or reach out via social profiles!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
          {/* Left Column Info */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-50">
                Let&apos;s Connect
              </h3>
              <p className="text-sm text-zinc-600 dark:text-slate-400 leading-relaxed">
                I am always open to exploring new engineering collaborations, web engineering challenges, or mobile application consultancies. Feel free to reach out via email!
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-violet-50 dark:bg-[#0d0d0d] border dark:border-slate-800/40 text-violet-600 dark:text-violet-400 rounded-xl">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 dark:text-slate-500 font-mono">Feven Samuel</div>
                    <a
                      href={`mailto:${YOUR_EMAIL}`}
                      className="text-sm font-medium text-zinc-800 dark:text-zinc-200 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                    >
                      {YOUR_EMAIL}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-violet-50 dark:bg-[#0d0d0d] border dark:border-slate-800/40 text-violet-600 dark:text-violet-400 rounded-xl">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-400 dark:text-slate-500 font-mono">Instant Reply</div>
                    <p className="text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      Response within 24 Hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="pt-6 border-t border-zinc-100 dark:border-slate-800/40">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-slate-500 mb-3">
                Social Accounts
              </h4>
              <div className="flex gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-100 dark:bg-[#0d0d0d] border dark:border-slate-800/40 text-zinc-600 dark:text-slate-400 hover:bg-zinc-200 dark:hover:bg-[#111] hover:text-zinc-900 dark:hover:text-zinc-100 rounded-xl transition-all hover:scale-105"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-zinc-100 dark:bg-[#0d0d0d] border dark:border-slate-800/40 text-zinc-600 dark:text-slate-400 hover:bg-zinc-200 dark:hover:bg-[#111] hover:text-zinc-900 dark:hover:text-zinc-100 rounded-xl transition-all hover:scale-105"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column Form */}
          <div className="lg:col-span-8">
            <div className="bg-zinc-50 dark:bg-[#0d0d0d] p-6 sm:p-8 rounded-2xl border border-zinc-200/60 dark:border-slate-800 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-slate-300 mb-1.5 font-mono">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors"
                      placeholder="Name"
                      disabled={isSending}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-700 dark:text-slate-300 mb-1.5 font-mono">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 text-sm rounded-xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors"
                      placeholder="example@gmail.com"
                      disabled={isSending}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 dark:text-slate-300 mb-1.5 font-mono">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors"
                    placeholder="Internship / Full-time Role Offer"
                    disabled={isSending}
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-700 dark:text-slate-300 mb-1.5 font-mono">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-zinc-200 dark:border-slate-800 bg-white dark:bg-[#050505] text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-colors resize-none"
                    placeholder="Write your details, ideas, or message here..."
                    disabled={isSending}
                  />
                </div>

                <AnimatePresence>
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-3.5 rounded-xl bg-red-50 dark:bg-red-950/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-900/30 text-sm"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{error}</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <AnimatePresence>
                  {isSent && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-900/30 text-sm font-medium"
                    >
                      <Check className="w-4 h-4 flex-shrink-0 text-emerald-500" />
                      <span>Message sent successfully! I will get back to you soon. 🎉</span>
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSending}
                  className="w-full sm:w-auto px-6 py-3 bg-violet-600 hover:bg-violet-700 text-white font-medium text-sm rounded-xl shadow-lg hover:shadow-violet-500/20 hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSending ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}