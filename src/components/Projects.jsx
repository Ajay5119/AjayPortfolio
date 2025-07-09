import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaTicketAlt, FaJava, FaGithub, FaTerminal } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import {
  SiPython, SiReact, SiStreamlit, SiOpencv, SiC
} from 'react-icons/si';

const projects = [
  {
    title: '🎟️ Ticket Booking Application',
    icon: <FaTicketAlt className="text-5xl text-purple-500 dark:text-cyan-400" />,
    description: [
      'A simple and intuitive ticket booking system built in Java.',
      'Includes seat selection, ticket availability checks, and booking confirmation.',
      'Ensures input validation and smooth user experience.',
    ],
    tech: [FaJava],
    sourceLink: 'https://github.com/Ajay51119/',
  },
  {
    title: '🧠 Emotion & Sentiment Analysis Tool',
    icon: <FaRobot className="text-5xl text-pink-500 dark:text-blue-300" />,
    description: [
      'Real-time emotion detection using face and voice.',
      'Used OpenCV for facial expression & speech recognition for sentiment.',
      'Built with Python, Streamlit, React, and NLP tools.',
    ],
    tech: [SiPython, SiOpencv, SiStreamlit, SiReact],
    sourceLink: 'https://github.com/Ajay51119/',
  },
  {
    title: '📝 GenX - Text Editor',
    icon: <SiC className="text-5xl text-blue-600 dark:text-purple-400" />,
    description: [
      'Custom IDE for writing and running C code.',
      'Live execution, file handling, and terminal integration.',
      'Designed using Python and Shell.',
    ],
    tech: [SiPython, SiC, FaTerminal], // ✅ replaced SiTkinter with FaTerminal
    sourceLink: 'https://github.com/Ajay51119/Genx',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 md:px-20 bg-white dark:bg-[#0f172a] transition-all duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500 mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group rounded-2xl p-6 backdrop-blur-lg bg-white/40 dark:bg-gray-800/40 shadow-2xl border border-white/20 dark:border-gray-600/20 transform transition-transform duration-300 hover:scale-[1.03] hover:shadow-2xl"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ rotateZ: 1.5 }}
            >
              {/* Icon & Title */}
              <div className="flex items-center gap-4 mb-5">
                {project.icon}
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{project.title}</h3>
              </div>

              {/* Description */}
              <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 text-base space-y-2 mb-4">
                {project.description.map((line, i) => (
                  <li key={i}>{line}</li>
                ))}
              </ul>

              {/* Tech Icons */}
              <div className="flex flex-wrap gap-3 mt-4">
                {project.tech.map((TechIcon, idx) => (
                  <TechIcon key={idx} className="text-2xl text-gray-600 dark:text-gray-300 hover:text-purple-500 dark:hover:text-cyan-400 transition-colors" />
                ))}
              </div>

              {/* Source Code */}
              <div className="mt-5 flex justify-end">
                <a
                  href={project.sourceLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm flex items-center gap-1 text-purple-600 dark:text-cyan-300 hover:underline"
                >
                  View Source Code <FiExternalLink />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
