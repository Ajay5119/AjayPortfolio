import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiTailwindcss, SiJavascript, SiHtml5, SiCss3, SiNodedotjs,
  SiPython, SiMongodb, SiGit, SiMysql, SiSpringboot
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa'; // ✅ use FaJava instead of SiJava

const skills = [
  { name: 'React', icon: <SiReact className="text-blue-500" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-500" /> },
  { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" /> },
  { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" /> },
  { name: 'CSS3', icon: <SiCss3 className="text-blue-600" /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" /> },
  { name: 'Spring Boot', icon: <SiSpringboot className="text-green-700" /> },
  { name: 'Java', icon: <FaJava className="text-orange-600" /> }, // ✅ FIXED
  { name: 'Python', icon: <SiPython className="text-yellow-300" /> },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-600" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-500" /> },
  { name: 'Git', icon: <SiGit className="text-red-600" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-6 md:px-20 bg-white dark:bg-[#0f172a] transition-all duration-500">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-white/60 dark:bg-gray-800/40 backdrop-blur-xl shadow-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {skills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center justify-center p-4 rounded-xl bg-white/30 dark:bg-gray-700/30 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
