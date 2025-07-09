import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Infosys',
    title: 'AI Developer',
    date: 'October 2024 – December 2024',
    logo: '/infosys.png',
    points: [
      'Developed a scalable business tool using computer vision techniques for enterprise clients.',
      'Integrated pre-trained machine learning models for automation and efficiency.',
      'Utilized Streamlit for UI and deployed ML pipelines for real-time applications.',
    ],
  },
  {
    company: 'TechSaksham',
    title: 'AI Developer (Microsoft & SAP Initiative)',
    date: 'August 2024 – October 2024',
    logo: '/microsoft.png',
    points: [
      'Designed and implemented an AI-powered medical diagnosis system using custom ML models.',
      'Built and trained 3 machine learning models to detect diagnostic patterns.',
      'Developed interactive front-end interfaces using Streamlit and React.',
    ],
  },
];

const WorkExperience = () => {
  return (
    <section
      id="experience"
      className="py-28 px-6 md:px-12 bg-white dark:bg-[#0f172a] transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500 mb-24"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Work Experience
        </motion.h2>

        <div className="relative">
          {/* Center vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-purple-400 to-pink-500 dark:from-cyan-400 dark:to-blue-500 z-0" />

          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`mb-20 w-full md:w-[48%] px-2 relative z-10 ${
                  isLeft ? 'md:mr-auto' : 'md:ml-auto'
                } group`}
              >
                {/* Card */}
                <div className="rounded-3xl p-8 bg-white/20 dark:bg-gray-800/30 backdrop-blur-[12px] shadow-2xl border border-white/30 dark:border-gray-600/20 text-left transition-all duration-300 transform group-hover:scale-[1.03] group-hover:shadow-purple-500/40 dark:group-hover:shadow-cyan-400/30 group-hover:ring-4 group-hover:ring-purple-200/30 dark:group-hover:ring-cyan-200/20">
                  {/* Header */}
                  <div className="flex items-center gap-5 mb-5">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-16 h-16 rounded-full shadow-md border-2 border-white dark:border-gray-700"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {exp.company}
                      </p>
                      <p className="text-xs italic text-purple-600 dark:text-cyan-300">
                        {exp.date}
                      </p>
                    </div>
                  </div>
                  {/* Description */}
                  <ul className="list-disc list-inside space-y-2 text-base text-gray-700 dark:text-gray-300">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
