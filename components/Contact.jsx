"use client";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://portfolio-backend-dh1l.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      alert("Thanks for connecting with me! I will get back to you soon.");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      alert("Backend not reachable");
    } finally {
      setLoading(false);
    }
  };

  return (
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
              <label className="block text-sm font-medium mb-2">Name</label>
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
              <label className="block text-sm font-medium mb-2">Email</label>
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
              <label className="block text-sm font-medium mb-2">Message</label>
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
            <h3 className="text-xl font-semibold mb-8">Contact Information</h3>

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
  );
}