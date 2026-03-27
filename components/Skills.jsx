 "use client";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const skillCategories = [
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
    skills: ["Node.js", "Express", "REST API", "MySQL", "MongoDB"],
  },
  {
    name: "Tools & Methods",
    skills: ["Git", "GitHub", "Render", "Docker", "Postman"],
  },
  {
    name: "Cloud & DevOps",
    skills: [
      "AWS: EC2, VPC, IAM, RDS, ASG, ALB, CloudFront, Lambda, CloudWatch, S3, Route53",
      "Azure DevOps: CI/CD pipelines, Boards, Repos, Artifacts",
    ],
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
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 bg-black overflow-hidden">

      {/* 🔥 Glow Background */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-purple-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-3xl"></div>

      {/* 🔥 Grid Background (subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-14 text-white">
          My Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-2xl 
                         border border-white/20 shadow-lg hover:shadow-2xl 
                         transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {category.name}
              </h3>

              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skillIndex}
                    className="flex items-center gap-2 text-gray-200 hover:text-purple-400"
                    initial={{ x: -10, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                  >
                    <CheckCircle className="w-4 h-4 text-purple-400" />
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}