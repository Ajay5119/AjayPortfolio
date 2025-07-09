import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stage, useGLTF } from '@react-three/drei';

const roles = ['Software Engineer', 'AI/ML Engineer', 'Backend Engineer'];

// ✅ Your Probe Model Component
const ProbeModel = () => {
  const { scene } = useGLTF('/probe.glb'); // Make sure probe.glb is in public/
  return <primitive object={scene} scale={1.5} />;
};

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col lg:flex-row items-center justify-between px-8 md:px-24 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/Home.jpg')" }}
    >
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-[#0f172a] z-10 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-purple-500 to-pink-500 opacity-30 blur-[100px] rounded-full z-0"></div>

      {/* Text Content */}
      <div className="relative z-20 max-w-xl text-left py-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl "
        >
          Hi, I’m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 dark:from-cyan-400 dark:to-blue-500">
            Ajay Kumar
          </span>
        </motion.h1>

        {/* Animated Role */}
        <div className="mt-4 h-[48px] text-2xl md:text-3xl font-semibold text-purple-100 dark:text-cyan-200 overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={roles[currentRole]}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5 }}
              className="absolute w-full"
            >
              {roles[currentRole]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex gap-6 flex-wrap">
          <a
            href="/Ajay_Kumar_Resume.pdf"
            download
            className="px-6 py-3 rounded-xl text-white font-semibold bg-gradient-to-r from-purple-600 to-pink-500 hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl border-2 border-white text-white font-semibold hover:bg-white hover:text-[#0f172a] transition duration-300"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* 3D Model Right Side */}
      <div className="relative z-20 w-full lg:w-1/2 h-[400px] md:h-[500px]">
        <Canvas>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 5, 2]} />
          <Stage environment="city" intensity={0.6}>
            <ProbeModel />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent z-10" />
    </section>
  );
};

export default Hero;
