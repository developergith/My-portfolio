"use client";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-50 dark:bg-black text-black dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-6">
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
              I'm a passionate{" "}
              <span className="font-semibold text-purple-600">Full Stack Developer</span>{" "}
              with strong expertise in the MERN stack (MongoDB, Express.js, React.js, Node.js),
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
              href="/Ayush-resume.docx"
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
  );
}