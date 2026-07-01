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
              <span className="font-semibold text-purple-600">AWS DevOps Engineer| MERN Stack Developer</span>{" "}
              am a DevOps & Cloud Engineer with hands-on experience in building, automating, and deploying infrastructure on AWS. I work with the complete DevOps toolchain — Docker, Kubernetes, Terraform, Ansible, and GitHub Actions & Jenkins CI/CD pipelines.



              On the infrastructure side, I provision AWS resources including  My AWS experience spans EC2, VPC, IAM, S3, RDS, CloudFront,  CloudWatch, Lambda, Route53, ECS/EKS, SQS/SNS, and AI services including AWS Bedrock and  SageMaker.  using Terraform as Infrastructure as Code. I use Ansible for automated configuration management and deployments.
            </p>

            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
              I containerize applications using Docker, write Kubernetes manifests for deployments, and build end-to-end CI/CD pipelines that automatically build, test, and deploy on every code push.



              I also write technical articles on Medium covering DevOps, AWS, and Cloud topics — sharing practical hands-on labs and project walkthroughs.



              Additionally I have a  foundation FullStack development with node.js  ,Express.js , React , MongoDB which helps me understand applications I deploy and work effectively with dev teams.



              #Actively looking for Junior DevOps Engineer / DevOps Trainee / Cloud Engineer roles.



              # Open to:  Hybrid | Remote
            </p>

            {/* Resume Button */}
            <a
              href="/ayush_resume.pdf"
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