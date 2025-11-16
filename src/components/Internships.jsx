import { motion } from "framer-motion";

const internships = [
  {
    company: "NullClass",
    role: "Data Analyst Intern",
    duration: "Jan 2024 - Mar 2024",
    tasks: [
      "Designed interactive Power BI dashboards.",
      "Used SQL for data extraction & cleaning.",
      "Performed data preprocessing for insights."
    ],
    stars: 5
  },
  {
    company: "Pianalytix",
    role: "Power BI Data Analyst Intern",
    duration: "Jun 2025 - Aug 2025",
    tasks: [
      "Created automated visual reports using Power BI.",
      "Collaborated on business analysis models.",
      "Presented data findings to senior analysts."
    ],
    stars: 5
  }
];

export default function Internships() {
  return (
    <section id="internships" className="bg-gradient-to-b from-black to-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-10 text-center">Internships</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {internships.map((intern, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-neutral-800 p-6 rounded-2xl shadow-lg border border-gray-700"
            >
              <h3 className="text-2xl font-semibold">{intern.role}</h3>
              <p className="text-lg text-gray-400 mb-2">{intern.company}</p>
              <p className="text-sm text-gray-500 mb-4">{intern.duration}</p>
              <ul className="text-gray-300 list-disc pl-5 space-y-1 mb-4">
                {intern.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
              <div className="text-yellow-400">
                {"⭐".repeat(intern.stars)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
