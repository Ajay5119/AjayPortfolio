import React, { useEffect, useState } from 'react';
import {
  FaHome,
  FaUserAlt,
  FaTools,
  FaProjectDiagram,
  FaBriefcase,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const Navbar = ({
  scrollToSection,
  homeRef,
  aboutRef,
  skillsRef,
  projectsRef,
  workRef,
  isDarkMode,
  toggleDarkMode,
}) => {
  const [active, setActive] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const links = [
    { name: 'Home', icon: <FaHome />, ref: homeRef, id: 'home' },
    { name: 'About', icon: <FaUserAlt />, ref: aboutRef, id: 'about' },
    { name: 'Skills', icon: <FaTools />, ref: skillsRef, id: 'skills' },
    { name: 'Projects', icon: <FaProjectDiagram />, ref: projectsRef, id: 'projects' },
    { name: 'Work', icon: <FaBriefcase />, ref: workRef, id: 'work' },
  ];

  const handleScroll = () => {
    const sections = [
      { id: 'home', ref: homeRef },
      { id: 'about', ref: aboutRef },
      { id: 'skills', ref: skillsRef },
      { id: 'projects', ref: projectsRef },
      { id: 'work', ref: workRef },
    ];
    const scrollY = window.scrollY + window.innerHeight / 3;
    for (let sec of sections) {
      if (sec.ref.current && sec.ref.current.offsetTop <= scrollY) {
        setActive(sec.id);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (ref, id) => {
    scrollToSection(ref);
    setActive(id);
    setIsMobileOpen(false);
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-full max-w-6xl z-50 px-6 py-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg rounded-2xl shadow-xl transition-all duration-300">
      <div className="flex justify-between items-center">
        {/* Desktop Menu */}
        <ul className="hidden sm:flex gap-8 mx-auto">
          {links.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.ref, link.id)}
                className={`group flex items-center gap-2 px-4 py-2 rounded-xl font-medium text-lg transition duration-300 cursor-pointer hover:shadow-lg hover:shadow-purple-500/40 dark:hover:shadow-cyan-400/30 ${
                  active === link.id
                    ? 'text-purple-600 dark:text-cyan-300'
                    : 'text-gray-800 dark:text-gray-300'
                }`}
              >
                <span className="text-xl group-hover:scale-110 group-hover:animate-bounce transition-transform duration-300">
                  {link.icon}
                </span>
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 text-xl rounded-full hover:bg-gray-200/50 dark:hover:bg-gray-700/50 transition"
        >
          {isDarkMode ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-600" />}
        </button>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="sm:hidden text-2xl ml-4 p-2 rounded hover:bg-gray-200/40 dark:hover:bg-gray-700/40 transition"
        >
          {isMobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="mt-4 sm:hidden flex flex-col items-center gap-4">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.ref, link.id)}
              className={`flex items-center gap-2 px-4 py-2 w-full justify-center rounded-lg font-medium text-base transition duration-300 hover:shadow-md ${
                active === link.id
                  ? 'text-purple-600 dark:text-cyan-300'
                  : 'text-gray-800 dark:text-gray-300'
              }`}
            >
              <span className="text-xl animate-pulse hover:animate-bounce">{link.icon}</span>
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
