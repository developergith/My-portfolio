"use client";

const certificates = [
  {
    image: "/aws.png",
    alt: "AWS Certificate",
    title: "AWS Solutions Architect Associate",
    link: "https://skillsoft.digitalbadges.skillsoft.com/c82448e3-8d42-4bf2-94bd-e0c99886dec0#acc.l63Q1ZBy",
  },
  {
    image: "/mongoDB.png",
    alt: "MongoDB Certificate",
    title: "Securing MongoDB Self-Managed: Authentication & Authorization",
    link: "https://www.credly.com/badges/cffcb046-56ca-4d4d-b130-1458a845bd01/linked_in_profile",
  },
  {
    image: "/terraform.png",
    alt: "Terraform Certificate",
    title: "Terraform Associate",
    link: "https://skillsoft.digitalbadges.skillsoft.com/b32eb6e7-aed4-470a-ae66-dc4668c40ceb#acc.3q18s7gz",
  },
];

export default function Certificates() {
  return (
    <section className="py-16 bg-white dark:bg-black text-center">
      <h2 className="text-3xl font-bold mb-10">My Certificates</h2>

      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {certificates.map((cert, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 shadow"
          >
            <img
              src={cert.image}
              alt={cert.alt}
              className="w-full h-48 object-cover rounded-lg"
            />
            <h3 className="mt-4 font-semibold">{cert.title}</h3>
            <a
              href={cert.link}
              target="_blank"
              className="text-blue-500 text-sm"
            >
              Verify Certificate
            </a>
          </div>
        ))}

        {/* More Certificates Card */}
        <div className="bg-gray-100 dark:bg-gray-900 rounded-xl p-4 shadow flex flex-col justify-center items-center">
          <h3 className="mt-4 font-semibold">More certificates on LinkedIn-page</h3>
          <a
            href="https://www.linkedin.com/in/ayush-nath-motichoor-7012102b2/details/certifications/"
            target="_blank"
            className="text-blue-500 text-sm"
          >
            View Certificates
          </a>
        </div>
      </div>
    </section>
  );
}