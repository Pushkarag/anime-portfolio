import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Projects from "./components/Projects";

function useTypewriter(text, speed = 25) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      setDisplay((d) => d + (text[i] ?? ""));
      i++;
      if (i >= text.length) clearInterval(t);
    }, speed);
    return () => clearInterval(t);
  }, [text, speed]);
  return display;
}

export default function App() {
  const [openIntern, setOpenIntern] = useState(null);
  const [showResumePreview, setShowResumePreview] = useState(false);

  const subtitle = useTypewriter(
    "Building intelligent systems with data, creativity, and code."
  );

  const categories = {
    "Languages & Tools": [
      { name: "Python", level: 95 },
      { name: "SQL", level: 88 },
      { name: "Power BI", level: 90 },
      { name: "Excel", level: 92 },
    ],
    "Frameworks & Libraries": [
      { name: "Pandas", level: 90 },
      { name: "NumPy", level: 85 },
      { name: "Scikit-learn", level: 85 },
      { name: "TensorFlow", level: 75 },
      { name: "Flask", level: 80 },
      { name: "React", level: 75 },
    ],
    "Soft Skills": [
      { name: "Problem Solving", level: 92 },
      { name: "Communication", level: 88 },
      { name: "Teamwork", level: 90 },
      { name: "Time Management", level: 85 },
    ],
  };

  const internships = [
    {
      id: 0,
      company: "NullClass",
      role: "Data Analyst Intern",
      duration: "Nov 2024 – Feb 2025",
      bullets: [
        "Built interactive Power BI dashboards for KPIs.",
        "Cleaned and analyzed raw datasets using SQL & Excel.",
        "Automated weekly reporting processes and KPI trackers.",
      ],
      rating: 4,
    },
    {
      id: 1,
      company: "Pianalytix",
      role: "Power BI Data Analyst Intern",
      duration: "June 2025 – July 2025",
      bullets: [
        "Developed client dashboards using DAX & optimized visuals.",
        "Integrated multiple SQL datasets into Power BI data models.",
        "Documented analysis workflows and delivered stakeholder reports.",
      ],
      rating: 5,
    },
  ];

  function toggleIntern(id) {
    setOpenIntern((p) => (p === id ? null : id));
  }

  // ✅ FIXED SCROLL TRIGGER — Resume appears only at the END
  useEffect(() => {
    function onScroll() {
      const contactSection = document.getElementById("contact");
      if (!contactSection) return;

      const rect = contactSection.getBoundingClientRect();
      const isNearBottom = rect.bottom < window.innerHeight - 100; // show resume after reaching bottom
      setShowResumePreview(isNearBottom);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const resumeHref = import.meta.env.BASE_URL + "PushkarAG_resume.pdf.pdf";
  const CIRC = 2 * Math.PI * 54;

  return (
    <div className="relative min-h-screen text-white bg-black font-[Inter]">
      {/* BG */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/pushkarbw.jpg')" }}
      />
      <div className="absolute inset-0 bg-black/80 -z-10" />

      {/* Header */}
      <header className="fixed top-6 left-6 right-6 z-40 flex justify-between items-center font-[Poppins]">
        <div>
          <div className="text-lg md:text-xl font-semibold">PUSHKAR AGARWAL</div>
          <div className="text-xs text-white/60">Portfolio</div>
        </div>
        <nav className="flex items-center gap-5 text-sm md:text-base">
          <a href="#about" className="hover:text-[#38bdf8]">About</a>
          <a href="#skills" className="hover:text-[#38bdf8]">Skills</a>
          <a href="#internships" className="hover:text-[#38bdf8]">Internships</a>
          <a href="#projects" className="hover:text-[#38bdf8]">Projects</a>
          <a href="#contact" className="hover:text-[#38bdf8]">Contact</a>
          <a
            href="https://drive.google.com/uc?export=download&id=1t2C8yWlyfjOlExUbPHiKR0APdbD4C-JQ"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-3 py-2 border border-[#38bdf8]/30 rounded-sm text-sm hover:bg-[#38bdf8]/8"
          >
            Resume
          </a>
        </nav>
      </header>

      {/* Hero */}
      <main className="min-h-screen flex items-center justify-center px-8">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
          <div className="md:col-span-2 pb-12">
            <motion.h1
              className="text-5xl md:text-7xl font-extrabold font-[Poppins] leading-tight text-white"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              CREATIVE <span className="text-white">ML ENGINEER</span> & DEVELOPER.
            </motion.h1>
            <motion.p
              className="mt-6 text-gray-300 text-sm md:text-base max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {subtitle}
            </motion.p>
            <div className="mt-8 flex gap-3">
              <a href="#contact" className="px-5 py-2 border border-white/12 rounded-sm hover:bg-white/5 text-sm">Let's Collaborate</a>
              <a href="#skills" className="px-5 py-2 bg-white/5 rounded-sm border border-white/8 text-sm hover:bg-white/8">View My Skills</a>
            </div>
          </div>

          <aside className="md:col-span-1 flex flex-col items-center md:items-end pb-12">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="w-40 h-40 rounded-full overflow-hidden border border-white/8"
            >
              <img src="/images/pushkarbw.jpg" alt="Pushkar" className="w-full h-full object-cover" />
            </motion.div>
            <div className="mt-4 text-right text-sm text-white/70">
              <div>apushkar269@gmail.com</div>
              <div>+91 6399452494</div>
            </div>
          </aside>
        </div>
      </main>

      {/* About */}
      <section id="about" className="py-24 px-8 bg-black text-gray-200">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-5 font-[Poppins] text-white">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              I’m Pushkar Agarwal — a B.Tech CSE (AI) student passionate about Machine Learning,
              Data Analysis, and Full-Stack Web Development. I enjoy transforming raw data into
              actionable insights and building intelligent systems that simplify decisions.
            </p>
          </div>
        </div>
      </section>
{/* Skills */}
<section id="skills" className="py-20 px-8 bg-black text-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold mb-10 font-[Poppins] text-center text-white">
      Skills
    </h2>

    <div className="grid md:grid-cols-3 gap-8">
      {Object.entries(categories).map(([catName, items], ci) => (
        <div
          key={catName}
          className="p-6 rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_0_20px_rgba(56,189,248,0.1)]"
        >
          <h3 className="text-xl font-semibold mb-6 text-[#38bdf8] text-center">
            {catName}
          </h3>

          <div className="flex flex-wrap justify-center gap-10">
            {items.map((s, i) => {
              const CIRC = 2 * Math.PI * 54;
              return (
                <motion.div
                  key={s.name}
                  className="relative flex flex-col items-center justify-center w-28 h-36 text-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.08 }}
                >
                  <svg
                    className="absolute top-0"
                    width="120"
                    height="120"
                    viewBox="0 0 120 120"
                  >
                    <circle
                      cx="60"
                      cy="60"
                      r="54"
                      stroke="#1f2937"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="54"
                      stroke="#38bdf8"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={CIRC}
                      strokeDashoffset={CIRC * (1 - s.level / 100)}
                      strokeLinecap="round"
                      initial={{ strokeDashoffset: CIRC }}
                      animate={{ strokeDashoffset: CIRC * (1 - s.level / 100) }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                    />
                  </svg>

                  <div className="absolute top-12 text-lg font-bold text-[#38bdf8]">
                    {s.level}%
                  </div>

                  {/* ✅ skill name clearly below the donut */}
                  <div className="absolute bottom-0 text-center text-xs font-medium text-white/90 w-full">
                    {s.name}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>



      {/* Internships */}
      <section id="internships" className="py-20 px-8 bg-black text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 font-[Poppins] text-white">Internships</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {internships.map((it) => {
              const open = openIntern === it.id;
              return (
                <motion.div
                  key={it.id}
                  layout
                  className={`p-6 rounded-xl bg-white/5 border ${
                    open ? "border-[#38bdf8]/40" : "border-white/8"
                  } cursor-pointer`}
                  onClick={() => toggleIntern(it.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-lg font-semibold">{it.role}</div>
                      <div className="text-sm text-white/60">
                        {it.company} · <span>{it.duration}</span>
                      </div>
                    </div>
                  </div>
                  <AnimatePresence>
                    {open && (
                      <motion.ul
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-sm text-white/80 space-y-2"
                      >
                        {it.bullets.map((b, idx) => (
                          <li key={idx} className="list-disc list-inside">
                            {b}
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-8 bg-white text-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 font-[Poppins] text-black">Projects</h2>
          <Projects />
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 px-8 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 font-[Poppins] text-white">Contact</h3>
          <p className="text-white/80 mb-6">
            Reach out for collaborations, internships, or freelance projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:apushkar269@gmail.com" className="px-4 py-2 border border-white/12 rounded-sm">
              apushkar269@gmail.com
            </a>
            <a href="tel:+916399452494" className="px-4 py-2 border border-white/12 rounded-sm">
              +91 6399452494
            </a>
            <a
              href="https://www.linkedin.com/in/pushkar-agarwal-5945b2258/"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-white/12 rounded-sm"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Pushkarag"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 border border-white/12 rounded-sm"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ✅ Resume only appears at the end */}
      <AnimatePresence>
        {showResumePreview && (
          <motion.section
            className="fixed left-1/2 -translate-x-1/2 bottom-6 z-50 w-[90%] md:w-[80%] lg:w-[70%] bg-black/95 border border-white/10 rounded-xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.45 }}
          >
            <div className="flex items-center justify-between p-3 border-b border-white/6">
              <div className="text-sm font-semibold">Resume — Pushkar Agarwal</div>
              <a
                href={resumeHref}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2 border border-[#38bdf8]/30 rounded-sm text-sm hover:bg-[#38bdf8]/8"
              >
                View Full Resume
              </a>
            </div>
            <div className="h-[60vh]">
              <iframe src={resumeHref} title="Resume Preview" className="w-full h-full border-none" />
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      <footer className="py-8 text-center text-xs text-white/50 bg-black">
        © {new Date().getFullYear()} Pushkar Agarwal — Built with ❤️
      </footer>
    </div>
  );
}
