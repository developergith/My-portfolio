"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar({ activeSection, scrollToSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // ❌ yahan wali } hatao

  return (
    <header className="fixed top-0 left-0 right-0 z-50 
                 bg-white/70 dark:bg-black/70 
                 backdrop-blur-md border-b 
                 border-gray-200 dark:border-gray-800">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold tracking-wide">
          Ayush Nath Motichur
        </a>

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
          <div className="h-5 w-px bg-gray-300 dark:bg-gray-700"></div>
          <ThemeToggle />
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

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
  );
} // ✅ yahan aani chahiye closing brace