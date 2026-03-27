"use client";

const projects = [
  {
    title: "aws-cloud-hands-on-labs",
    description:
      "An AWS Solution Architect is responsible for designing, implementing, and managing cloud-based solutions using Amazon Web Services (AWS). Their role bridges business requirements with technical solutions, ensuring scalability, security, and cost-efficiency.",
    image: "/aws-solution-architect-igmguru_754169845_l-1.jpg",
    tags: ["EC2", "VPC", "IAM", "RDS", "ASG", "ALB", "CloudFront", "Lambda", "CloudWatch", "S3", "Route53", "More About AWS Services"],
    github: "https://github.com/developergith/aws-cloud-hands-on-labs.git",
    demo: "#",
  },
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
    description: "A modern website built using Tailwind CSS with smooth animations.",
    image: "/todesktop.png",
    tags: ["Tailwind", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/developergith/ToDesktop.com-main.git",
    demo: "https://todesktopapp.netlify.app/",
  },
  {
    title: "music-stream-ui",
    description:
      "Spotify-inspired responsive music streaming app with search and playback features.",
    image: "/Laptop-UI.png",
    tags: ["React", "Tailwind CSS", "Spotify API", "JavaScript"],
    github: "https://github.com/developergith/music-stream-ui.git",
    demo: "https://music-stream-ui.netlify.app/",
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
    description: "Learning platform covering programming, web development, and IT skills.",
    image: "/high-tech-computer-lab.jpg",
    tags: ["React", "Tailwind CSS", "JavaScript", "HTML"],
    github: "https://github.com/developergith/Digital-Shiksha_Academy.git",
    demo: "https://digitalshikshaacademy.netlify.app/",
  },
  {
    title: "Travel Website",
    description: "Responsive travel website built using Next.js and modern web technologies.",
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
    image: "/Ai-interview-dash.png",
    tags: ["React", "tailwind CSS", "Node.js", "MongoDB", "Express.js"],
    github: "#",
    demo: "https://ai-interview-proo.netlify.app/",
  },
];

export default function Projects() {
  return (
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
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
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
                  {project.github && project.github !== "#" && (
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
                  )}
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
  );
}