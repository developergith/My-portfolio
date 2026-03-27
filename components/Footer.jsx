"use client";

export default function Footer() {
  return (
    <footer className="relative bg-gray-100 dark:bg-black text-black dark:text-white">
      {/* Top Gradient Border */}
      <div className="h-1 bg-gradient-to-r from-purple-600 to-blue-600"></div>

      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Left - Name */}
          <h3 className="text-lg font-semibold">Ayush Nath Motichur</h3>

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
  );
}