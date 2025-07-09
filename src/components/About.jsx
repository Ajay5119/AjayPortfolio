import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage } from '@react-three/drei';
import SpinningModel from './SpinningModel';

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 md:px-20 bg-white dark:bg-[#0f172a] transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* 3D Model */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2 h-[300px] md:h-[400px] lg:h-[500px]"
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 5, 2]} />
            <Stage environment="city" intensity={0.6}>
              <SpinningModel scale={1.5} />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </motion.div>

        {/* Text Card */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Heading */}
          <motion.h2
            className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500 mb-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>

          {/* Card */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative bg-white/20 dark:bg-gray-800/30 backdrop-blur-lg border border-white/30 dark:border-gray-700/30 p-10 sm:p-12 rounded-3xl shadow-2xl transition-all duration-300 hover:shadow-purple-500/30 dark:hover:shadow-cyan-400/30 hover:ring-4 hover:ring-purple-200/20 dark:hover:ring-cyan-200/20 text-left"
          >
            <p className="text-lg sm:text-xl text-gray-800 dark:text-gray-200 leading-relaxed">
              Hello! I’m <span className="font-semibold text-purple-600 dark:text-cyan-400">Ajay Kumar</span>,
              a passionate and dedicated software developer who thrives on transforming complex problems into elegant,
              user-friendly solutions. With a deep interest in full-stack development, I aim to craft digital experiences
              that are both visually appealing and technically sound.
            </p>

            <p className="mt-6 text-lg sm:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              Whether it's bringing a vision to life in React, optimizing back-end performance with Java or Node.js,
              or fine-tuning animations with Framer Motion — I'm constantly learning and evolving to stay ahead in the ever-changing tech world.
            </p>

            

            {/* Contact & Socials */}
            <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              {/* Email */}
              <a
                href="mailto:ajay@example.com"
                className="inline-flex items-center gap-2 text-purple-700 dark:text-cyan-300 hover:underline text-lg"
              >
                <FaEnvelope className="text-xl" />
                ajay@example.com
              </a>

              {/* Social Icons */}
              <div className="flex gap-6 text-2xl">
                <a
                  href="https://github.com/ajaykumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-cyan-300 transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://linkedin.com/in/ajaykumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-cyan-300 transition"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
