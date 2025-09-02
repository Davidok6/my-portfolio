import React from 'react';
import { motion } from 'framer-motion';
import { SERVICES } from '../constants';
import type { Service } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <motion.h2 
    className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6 }}
  >
    {children}
  </motion.h2>
);

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-purple-500/20 transition-all duration-300 border border-transparent hover:border-purple-500"
      variants={cardVariants}
    >
      <div className="mb-6">
        <service.Icon className="w-12 h-12 text-purple-500 dark:text-purple-400" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
    </motion.div>
  );
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20">
      <SectionTitle>What I Offer</SectionTitle>
      <motion.div 
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </motion.div>
    </section>
  );
};

export default Services;