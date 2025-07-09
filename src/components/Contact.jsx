import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent('Message from Portfolio Contact Form');
    const body = encodeURIComponent(`Hi,\n\nMy Name: ${name}\nMy Email: ${email}\n\n${message}`);
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=ajaykumaraspha@gmail.com&su=${subject}&body=${body}`;

    window.open(mailtoLink, '_blank');
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-20 bg-gradient-to-br from-white via-purple-50 to-pink-100 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] transition-all duration-500"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Title */}
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent dark:from-cyan-400 dark:to-blue-500 mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h2>

        {/* Glassmorphic Form */}
        <motion.div
          className="relative bg-white/20 dark:bg-gray-800/30 p-10 rounded-3xl backdrop-blur-xl shadow-2xl border border-white/30 dark:border-gray-700/30 transition"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 dark:from-cyan-500 dark:to-blue-500 opacity-10 blur-xl z-[-1]" />

          <form onSubmit={handleSend} className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-900/40 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400 transition"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-900/40 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400 transition"
              />
            </div>
            <div>
              <textarea
                rows="5"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-5 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/70 dark:bg-gray-900/40 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-cyan-400 transition"
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 dark:from-cyan-500 dark:to-blue-500 text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-purple-500/40 dark:hover:shadow-cyan-500/30 transition-all duration-300"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-6 mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="https://github.com/Ajay51119/Genx"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-cyan-400 transition text-3xl hover:scale-110 hover:shadow-md hover:shadow-purple-300/40 dark:hover:shadow-cyan-300/30 p-2 rounded-full"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ajay-kumar-516111245/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 dark:text-blue-400 hover:text-purple-600 dark:hover:text-cyan-400 transition text-3xl hover:scale-110 hover:shadow-md hover:shadow-purple-300/40 dark:hover:shadow-cyan-300/30 p-2 rounded-full"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ajaykumaraspha@gmail.com"
            className="text-red-500 dark:text-red-400 hover:text-purple-600 dark:hover:text-cyan-400 transition text-3xl hover:scale-110 hover:shadow-md hover:shadow-purple-300/40 dark:hover:shadow-cyan-300/30 p-2 rounded-full"
          >
            <FaEnvelope />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
