import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left min-h-screen px-6">
      {/* Left Section — Text */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl font-extrabold text-purple-700">
          Pushkar Agarwal
        </h1>
        <p className="mt-3 text-gray-600 text-lg">
          <span className="font-semibold text-accent">ML Engineer</span> •{" "}
          <span className="font-semibold text-accent">Data Analyst</span> •{" "}
          <span className="font-semibold text-accent">Web Developer</span>
        </p>
        <p className="mt-6 text-gray-500 max-w-md mx-auto md:mx-0">
          I create intelligent data-driven web applications with a mix of
          machine learning, analysis, and creative anime-inspired design 🎨
        </p>

        <div className="mt-8 flex gap-4 justify-center md:justify-start">
          <a
            href="#projects"
            className="px-6 py-2 rounded-full bg-accent text-white glow hover:scale-105 transition"
          >
            View Projects
          </a>
          <a
            href="#skills"
            className="px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-white transition"
          >
            My Skills
          </a>
        </div>
      </motion.div>

      {/* Right Section — Anime Image */}
      <motion.div
        className="flex-1 mt-12 md:mt-0 flex justify-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.img
          src="/images/character-1.png"
          alt="Anime Character"
          className="w-80 md:w-96 rounded-3xl shadow-xl"
          animate={{
            y: [0, -12, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
