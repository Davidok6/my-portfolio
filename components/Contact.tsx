import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SendIcon } from './IconComponents';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.h2 
    className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.h2>
);

const SocialLink: React.FC<{ href: string, children: React.ReactNode }> = ({ href, children }) => (
    <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-500 dark:text-gray-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors duration-300"
    >
        {children}
    </a>
);

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    await new Promise(resolve => setTimeout(resolve, 2000));
    if (Math.random() > 0.2) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 text-center bg-gray-50 dark:bg-gray-800/50 rounded-lg">
      <SectionTitle>Let's Build Together</SectionTitle>
      <motion.p 
        className="max-w-2xl mx-auto mb-8 text-lg text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Have a project in mind? Fill out the form below or schedule a call.
      </motion.p>
      
      <motion.div
        className="max-w-xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6 text-left">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
              <input type="text" name="name" id="name" required value={formData.name} onChange={handleChange} className="block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition"/>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
              <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition"/>
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Message</label>
            <textarea name="message" id="message" rows={4} required value={formData.message} onChange={handleChange} className="block w-full px-4 py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 transition"></textarea>
          </div>
          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-lg hover:bg-purple-700 disabled:bg-purple-400 disabled:cursor-not-allowed transform hover:-translate-y-1 transition-all duration-300"
            >
              {status === 'loading' ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              ) : (
                <SendIcon className="w-5 h-5 mr-2" />
              )}
              {status === 'loading' ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </form>
        {status === 'success' && <p className="mt-4 text-green-600 dark:text-green-400">Message sent successfully! I'll get back to you soon.</p>}
        {status === 'error' && <p className="mt-4 text-red-600 dark:text-red-400">Something went wrong. Please try again later.</p>}
      </motion.div>

      <div className="mt-16">
        <a
          href="https://calendly.com/your-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mb-8 text-lg text-green-600 dark:text-green-400 hover:underline font-semibold"
        >
          Or, schedule a call directly on Calendly &rarr;
        </a>
        <div className="flex justify-center space-x-6">
          <SocialLink href="#">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"/></svg>
          </SocialLink>
          <SocialLink href="#">
             <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.264 8.783c.012.138.012.276.012.414 0 4.23-3.223 9.106-9.106 9.106-1.808 0-3.49-.53-4.908-1.44.25.03.504.045.768.045 1.492 0 2.868-.51 3.96-1.365-1.393-.026-2.57-1.02-2.975-2.25.195.035.39.055.595.055.29 0 .57-.04.835-.11-1.455-.295-2.55-1.57-2.55-3.11V9.69c.43.24.92.384 1.44.398-1.355-.905-1.855-2.61-1.28-4.08.795 1.05 2.15 1.9 3.655 2.53 1.25.515 2.65.81 4.1.88-.135-.615-.2-1.25-.2-1.89 0-2.3 1.86-4.16 4.16-4.16.8 0 1.55.335 2.065.875.64-.125 1.25-.36 1.78-.68-.21.65-.65 1.2-1.225 1.55.57-.07 1.1-.22 1.59-.435-.38.56-.845 1.05-1.385 1.43z"/></svg>
          </SocialLink>
          <SocialLink href="#">
               <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-2v-3.558c0-.847-.016-1.936-1.179-1.936-1.18 0-1.363.921-1.363 1.875v3.619h-2v-6h1.923v.882h.027c.268-.508.922-1.042 1.895-1.042 2.028 0 2.401 1.334 2.401 3.068v3.65h.001z"/></svg>
          </SocialLink>
        </div>
      </div>
    </section>
  );
};

export default Contact;