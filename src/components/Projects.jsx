import { motion } from "framer-motion";

const projects = [
  {
    title: "Sales Dashboard (Power BI)",
    desc: "Interactive Power BI dashboard tracking sales performance, revenue, and KPIs with DAX measures and data modeling.",
    img: "/images/project3.jpg",
    level: "Expert",
    link: "https://github.com/Pushkarag/PowerBI-Dashboard",
  },
  {
    title: "MediQUICK – Medicine Delivery App",
    desc: "Real-time medicine delivery web app built with Flask, Google Maps API, and chatbot integration for smart ordering.",
    img: "/images/project1.jpg",
    level: "Intermediate",
    link: "https://github.com/Pushkarag/Mediquick",
  },
{  
    title: "To-Do List App (Flask)",
    desc: "Simple but elegant task management app using Flask, SQLAlchemy, and Jinja2 with authentication features.",
    img: "/images/project2.jpg",
    level: "Intermediate",
    link: "https://github.com/Pushkarag/TO-DO-LIST-APP-",
  },
  {  
    title: "AI Food Agent: FoodieBot",
    desc: "AI-powered food recommendation chatbot using Flask, NLP, and external APIs for personalized suggestions.",
    img: "/images/project4.jpg",
    level: "Intermediate",
    link: "https://github.com/Pushkarag/AI-Food-Agent-FoodieBot",
  },
  {
    title: "ESPORTANALYZER",
    desc: "Analyzed PUBG/Fortnite player stats like kills, assists, movement and built dashboards to compare player performance.",
    img: "/images/project5.png",
    level: "Expert",
    link: "https://github.com/Pushkarag/ESPORTANALYZER",
  },

];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <h2 className="text-5xl font-extrabold text-center mb-14 text-gray-100 tracking-wide">
        My Projects 💻
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((p, i) => (
          <motion.a
            href={p.link}
            key={i}
            target="_blank"
            rel="noreferrer"
            className="relative bg-gray-800/70 p-6 rounded-2xl border border-gray-700 text-center hover:scale-105 transition-all overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.05)]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
          >
            {/* Project Image */}
            <motion.div
              className="h-48 w-full overflow-hidden rounded-xl mb-5"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={p.img}
                alt={p.title}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all duration-500"
              />
            </motion.div>

            {/* Project Details */}
            <h3 className="text-2xl font-semibold mb-2 text-gray-200">
              {p.title}
            </h3>
            <p className="text-gray-400 text-sm mb-3">{p.desc}</p>
            <p
              className={`text-sm font-semibold ${
                p.level === "Expert"
                  ? "text-green-400"
                  : p.level === "Intermediate"
                  ? "text-yellow-400"
                  : "text-red-400"
              }`}
            >
              {p.level}
            </p>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
