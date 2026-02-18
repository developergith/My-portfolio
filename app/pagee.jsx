"use client";
import { Download } from "lucide-react";

import ThemeToggle from "@/components/ThemeToggle";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

import {
  Menu,
  X,
  GitlabIcon as GitHub,
  ExternalLink,
  Mail,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { desc, image } from "framer-motion/client";


export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");



  // 🔹 CONTACT BACKEND STATES (ADDED ONLY)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);


  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  // 🔹 BACKEND CONNECT FUNCTION (ADDED ONLY)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://portfolio-backend-dh1l.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      alert("thanks for connect to me! I will get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      alert("Backend not reachable");
    } finally {
      setLoading(false);
    }
  };

  const projects = [
    {
      title: "Foodingo",
      description:
        "Foodingo frontend built with React and Tailwind CSS — fast, responsive, and user-friendly food delivery UI.",
      image: "/foodingo.png",
      tags: ["React", "Tailwind CSS", "JavaScript"],
      github: "#",
      demo: "#",
    },
    {
      title: "Background Remover",
      description:
        "Cloud-based SaaS application designed to automatically remove image backgrounds with precision and speed.",
      image: "/bg-remover.png",
      tags: ["React", "Tailwind CSS", "JavaScript", "Node.js"],
      github: "https://github.com/developergith/background-remover.git",
      demo: "https://background-erase.netlify.app/",
    },
    {
      title: "ToDesktop",
      description:
        "A modern website built using Tailwind CSS with smooth animations.",
      image: "/todesktop.png",
      tags: ["Tailwind", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/developergith/ToDesktop.com-main.git",
      demo: "https://todesktopapp.netlify.app/",
    },
    {
      title: "Spotify Music",
      description:
        "Spotify-inspired responsive music streaming app with search and playback features.",
      image: "/header.png",
      tags: ["React", "Tailwind CSS", "Spotify API", "JavaScript"],
      github: "https://github.com/developergith/Spotify-music.git",
      demo: "https://spotify-gana.netlify.app/",
    },
    {
      title: "Solar System",
      description:
        "Interactive web app providing information about planets and celestial bodies.",
      image: "/solar-system.png",
      tags: ["React", "Tailwind CSS", "JavaScript", "HTML", "CSS"],
      github: "https://github.com/developergith/Solar-System-main.git",
      demo: "https://universalplanet.netlify.app/",
    },
    {
      title: "Computer Academy",
      description:
        "Learning platform covering programming, web development, and IT skills.",
      image: "/high-tech-computer-lab.jpg",
      tags: ["React", "Tailwind CSS", "JavaScript", "HTML"],
      github: "https://github.com/developergith/Digital-Shiksha_Academy.git",
      demo: "https://digitalshikshaacademy.netlify.app/",
    },
    {
      title: "Travel Website",
      description:
        "Responsive travel website built using Next.js and modern web technologies.",
      image: "/Travelworld.webp",
      tags: ["Next.js", "Tailwind CSS", "JavaScript", "HTML", "CSS", "TypeScript"],
      github: "https://github.com/developergith/Travel-website.git",
      demo: "https://travelwith-us-website.netlify.app/",
    },

    {
      title: "E-commerce dashboard",
      description:
        "A sleek e-commerce dashboard built with React and UI&UX design principles, providing real-time analytics and user-friendly management tools.",
      image: "/ecommerce-dashboard.png",
      tags: ["React", "UI&UX Design", "Node.js", "Express.js", "MongoDb", "JavaScript"],
      github: "https://github.com/developergith/E.dashboard-front-end.git",
      demo: "https://e-dashboard-comm.netlify.app/",
    },
    {
      title: "AI-Interview",
      description:
        "AI-powered interview preparation platform offering personalized feedback and practice questions.",
        image:"/Ai-interview-dash.png",
        tags: ["React", "tailwind CSS", "Node.js", "MongoDB", "Express.js"],
        demo: "https://ai-interview-proo.netlify.app/",
    },
  ];

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen">

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 
                   bg-white/70 dark:bg-black/70 
                   backdrop-blur-md border-b 
                   border-gray-200 dark:border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <a href="#" className="text-xl font-bold tracking-wide">
            Ayush Nath Motichur
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">

            {["home", "about", "skills", "projects", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`capitalize text-sm font-medium transition 
          ${activeSection === item
                    ? "text-purple-600"
                    : "text-gray-600 dark:text-gray-300 hover:text-purple-600"
                  }`}
              >
                {item}
              </button>
            ))}

            {/* Divider */}
            <div className="h-5 w-px bg-gray-300 dark:bg-gray-700"></div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </nav>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-white dark:bg-black border-t 
                    border-gray-200 dark:border-gray-800 px-6 py-4">

            <div className="flex flex-col gap-4">
              {["home", "about", "skills", "projects", "contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item);
                    setMobileMenuOpen(false);
                  }}
                  className={`capitalize text-left text-sm font-medium transition
            ${activeSection === item
                      ? "text-purple-600"
                      : "text-gray-600 dark:text-gray-300"
                    }`}
                >
                  {item}
                </button>
              ))}
            </div>

          </nav>
        )}
      </header>


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
            Full Stack Developer(React & Node.js) | AWS & Azure DevOps | Docker | Building Scalable Web Applications
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
      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gray-50 dark:bg-black text-black dark:text-white"
      >
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <h2 className="text-4xl font-bold text-center mb-16">
            About <span className="text-purple-600">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r 
                          from-purple-500 to-blue-500 
                          blur-2xl opacity-30 rounded-full"></div>

                <img
                  src="profile.png"
                  alt="Profile"
                  className="relative w-64 h-64 md:w-80 md:h-80 
                       rounded-full object-cover 
                       border-4 border-purple-500 shadow-2xl 
                       group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            {/* About Content */}
            <div>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                I'm a passionate <span className="font-semibold text-purple-600">
                  Full Stack Developer
                </span> with strong expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js),
                focused on building scalable, secure, and production-ready web applications.
                Currently pursuing B.Tech, I enjoy transforming complex problems into efficient
                digital solutions with clean architecture and performance-driven design.
              </p>

              <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
                I bring 2+ years of experience in JavaScript development and hands-on expertise
                in React.js, Node.js, Express, and MongoDB. Beyond application development,
                I have practical exposure to Docker-based containerization, CI/CD automation
                using Jenkins, and cloud architecture aligned with AWS Solutions Architect
                principles, along with deployment workflows in Azure DevOps.
                I prioritize RESTful API design, secure authentication, and modern UI development
                using Tailwind CSS to deliver high-performance, cloud-ready applications.
              </p>

              {/* Resume Button */}
              <a
                href="/Ayush-resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                     bg-gradient-to-r from-purple-600 to-blue-600 
                     text-white font-semibold shadow-lg 
                     hover:scale-105 transition duration-300"
              >
                Download Resume
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-14 text-primary">
            My Skills
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Programming Languages",
                skills: ["JavaScript", "Python"],
              },
              {
                name: "Frontend Development",
                skills: ["React", "Tailwind CSS", "HTML/CSS", "Bootstrap"],
              },
              {
                name: "UI/UX Design",
                skills: ["Figma", "Responsive Design"],
              },
              {
                name: "Backend Development",
                skills: [
                  "Node.js",
                  "Express",
                  "REST API",
                  "MySQL",
                  "MongoDB",
                ],
              },
              {
                name: "Tools & Methods",
                skills: [
                  "Git",
                  "GitHub",
                  "Render",
                  "Docker",
                  "Postman",
                ],
              },

              {
                name: "☁️ Cloud & DevOps:",
                skills: [
                  "AWS: EC2, S3, IAM, CloudWatch",
                  "Azure DevOps: CI/CD pipelines, Boards, Repos",
                ]
              },
              {
                name: "Soft Skills",
                skills: [
                  "Communication",
                  "Problem Solving",
                  "Teamwork",
                  "Time Management",
                  "Adaptability",
                ],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
                  {category.name}
                </h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.li
                      key={skillIndex}
                      className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary"
                      initial={{ x: -10, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    >
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {skill}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-24 bg-gray-50 dark:bg-black text-black dark:text-white"
      >
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            ✨ My <span className="text-purple-600">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden 
                     bg-white dark:bg-gray-900 
                     shadow-lg hover:shadow-2xl 
                     transition duration-500 border 
                     border-gray-200 dark:border-gray-700"
              >

                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-52 object-cover 
                         group-hover:scale-110 
                         transition duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">

                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs rounded-full 
                             bg-purple-100 dark:bg-purple-800 
                             text-purple-700 dark:text-purple-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-4">

                    <a
                      href={project.github}
                      target="_blank"
                      className="flex items-center gap-1 px-4 py-2 text-sm rounded-lg 
                           border border-gray-400 dark:border-gray-600
                           hover:bg-gray-100 dark:hover:bg-gray-800 
                           transition"
                    >
                      Code
                    </a>

                    <a
                      href={project.demo}
                      target="_blank"
                      className="flex items-center gap-1 px-4 py-2 text-sm rounded-lg 
                           bg-gradient-to-r from-purple-600 to-blue-600 
                           text-white hover:scale-105 
                           transition"
                    >
                      Live
                    </a>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gray-50 dark:bg-black text-black dark:text-white"
      >
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center mb-16">
            Get In <span className="text-purple-600">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            {/* LEFT - FORM */}
            <form
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-900 
                   p-8 rounded-2xl shadow-lg 
                   border border-gray-200 dark:border-gray-700 
                   space-y-6"
            >

              <div>
                <label className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg 
                       bg-gray-100 dark:bg-gray-800 
                       border border-gray-300 dark:border-gray-700
                       focus:outline-none focus:ring-2 
                       focus:ring-purple-500 transition"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg 
                       bg-gray-100 dark:bg-gray-800 
                       border border-gray-300 dark:border-gray-700
                       focus:outline-none focus:ring-2 
                       focus:ring-purple-500 transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg 
                       bg-gray-100 dark:bg-gray-800 
                       border border-gray-300 dark:border-gray-700
                       focus:outline-none focus:ring-2 
                       focus:ring-purple-500 transition"
                  placeholder="Write your message..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 rounded-xl 
                     bg-gradient-to-r from-purple-600 to-blue-600 
                     text-white font-semibold 
                     hover:scale-105 transition duration-300"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>

            {/* RIGHT - INFO */}
            <div
              className="bg-white dark:bg-gray-900 
                   p-8 rounded-2xl shadow-lg 
                   border border-gray-200 dark:border-gray-700"
            >
              <h3 className="text-xl font-semibold mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">

                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:ayushmotichoor@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition"
                  >
                    ayushmotichoor@gmail.com
                  </a>
                </div>

                <div>
                  <h4 className="font-medium">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/ayush-nath-7012102b2"
                    target="_blank"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition"
                  >
                    View Profile
                  </a>
                </div>

                <div>
                  <h4 className="font-medium">GitHub</h4>
                  <a
                    href="https://github.com/developergith"
                    target="_blank"
                    className="text-gray-600 dark:text-gray-400 hover:text-purple-600 transition"
                  >
                    github.com/developergith
                  </a>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="relative bg-gray-100 dark:bg-black text-black dark:text-white">

        {/* Top Gradient Border */}
        <div className="h-1 bg-gradient-to-r from-purple-600 to-blue-600"></div>

        <div className="max-w-6xl mx-auto px-6 py-10">

          <div className="flex flex-col md:flex-row justify-between items-center gap-6">

            {/* Left - Name */}
            <h3 className="text-lg font-semibold">
              Ayush Nath Motichur
            </h3>

            {/* Center - Quick Links */}
            <div className="flex gap-6 text-sm">
              <a href="#about" className="hover:text-purple-600 transition">About</a>
              <a href="#projects" className="hover:text-purple-600 transition">Projects</a>
              <a href="#contact" className="hover:text-purple-600 transition">Contact</a>
            </div>

            {/* Right - Social Links */}
            <div className="flex gap-4">
              <a
                href="https://github.com/developergith"
                target="_blank"
                className="hover:text-purple-600 transition"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/ayush-nath-7012102b2"
                target="_blank"
                className="hover:text-purple-600 transition"
              >
                LinkedIn
              </a>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Ayush Nath Motichur. All rights reserved.
          </div>

        </div>
      </footer>

    </div>
  );
}
