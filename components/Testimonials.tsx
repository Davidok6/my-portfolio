import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TESTIMONIALS } from '../constants';
import type { Testimonial } from '../types';

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

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border-l-4 border-green-400 w-full">
      <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{testimonial.quote}"</p>
      <div className="text-right">
        <p className="font-bold text-gray-900 dark:text-white">{testimonial.author}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.company}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  const testimonialIndex = (page % TESTIMONIALS.length + TESTIMONIALS.length) % TESTIMONIALS.length;

  useEffect(() => {
    const interval = setInterval(() => {
        paginate(1);
    }, 5000);
    return () => clearInterval(interval);
  }, [paginate]);

  return (
    <section id="testimonials" className="py-20">
      <SectionTitle>What Clients Say</SectionTitle>
      <div className="max-w-4xl mx-auto relative h-64 md:h-56 flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            className="absolute w-full px-4 md:px-0"
          >
            <TestimonialCard testimonial={TESTIMONIALS[testimonialIndex]} />
          </motion.div>
        </AnimatePresence>
        <button onClick={() => paginate(-1)} className="absolute left-[-10px] sm:left-[-20px] md:left-[-40px] top-1/2 -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 p-2 rounded-full z-10 hover:bg-white dark:hover:bg-gray-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button onClick={() => paginate(1)} className="absolute right-[-10px] sm:right-[-20px] md:right-[-40px] top-1/2 -translate-y-1/2 bg-white/50 dark:bg-gray-800/50 p-2 rounded-full z-10 hover:bg-white dark:hover:bg-gray-700 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="flex justify-center space-x-2 mt-8">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setPage([i, i > testimonialIndex ? 1 : -1])}
              className={`w-3 h-3 rounded-full transition-colors ${testimonialIndex === i ? 'bg-purple-500' : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
    </section>
  );
};

export default Testimonials;