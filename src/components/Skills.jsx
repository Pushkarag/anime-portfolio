import { motion } from "framer-motion";

const skills = [
  { name: "Python", meta: "Pandas, NumPy, Scikit-learn" },
  { name: "Power BI", meta: "DAX, Dashboards, Data Modeling" },
  { name: "SQL", meta: "Data Extraction, Joins, Optimization" },
  { name: "Flask", meta: "APIs, Auth, CRUD" },
  { name: "TensorFlow / Keras", meta: "Neural Networks, Deep Learning" },
  { name: "Excel", meta: "Pivot Tables, Data Cleaning" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-gray-900 to-gray-950 text-white"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-purple-400">
        My Skills ⚡
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            className="p-6 bg-gray-800/60 backdrop-blur-md border border-purple-700/30 rounded-2xl hover:scale-105 transition-all glow"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold text-purple-300">{s.name}</h3>
            <p className="mt-2 text-gray-300">{s.meta}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
