"use client";
import { motion } from "framer-motion";
 
export default function Hero() {

      {/* Hero Section */}
      <section className="relative flex items-center justify-center min-h-screen 
                        bg-white dark:bg-black 
                        text-black dark:text-white overflow-hidden">

        {/* Background Glow */}
        <div className="absolute w-96 h-96 bg-purple-500/30 
                      rounded-full blur-3xl 
                      top-20 left-10 animate-pulse"></div>

        <div className="absolute w-96 h-96 bg-blue-500/30 
                      rounded-full blur-3xl 
                      bottom-10 right-10 animate-pulse"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 
                           text-transparent bg-clip-text">
              Ayush Nath Motichur
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mt-6 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
           Full Stack Developer (MERN Stack) | Cloud & DevOps | Building Scalable Web Applications
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="mt-8 flex justify-center gap-6"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl bg-gradient-to-r 
                       from-purple-600 to-blue-600 
                       text-white font-semibold shadow-lg 
                       hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl border border-gray-400 
                       dark:border-gray-600 
                       hover:bg-gray-100 dark:hover:bg-gray-800 
                       transition"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </section>
}
