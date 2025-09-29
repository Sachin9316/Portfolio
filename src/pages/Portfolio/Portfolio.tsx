import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

const projects = [
  {
    title: "Urban Ravo",
    description:
      "Tailor admin app (PWA) for managing orders, dashboards, and offline support using Next.js.",
    tech: ["Next.js", "PWA", "TailwindCSS", "Redux Toolkit"],
  },
  {
    title: "Satkar",
    description:
      "Admin panel built with Fuse theme for store, inventory, and staff management.",
    tech: ["React", "Fuse Theme", "Material UI", "Redux"],
  },
  {
    title: "TapNOrder",
    description:
      "Multi-outlet restaurant admin panel with dynamic order handling and outlet performance tracking.",
    tech: ["Next.js", "TailwindCSS", "Redux Toolkit", "Framer Motion"],
  },
];

const shadow = ["shadow-amber-300", "shadow-rose-300", "shadow-green-300"];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const Portfolio = () => {
  const { id } = useParams();
  console.log({ id });
  return (
    <section id="portfolio" className="bg-gradient-to-br md:mt-15 my-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-white md:mb-16 mb-8"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className={`${shadow[index]} relative rounded-2xl overflow-hidden shadow-2xl bg-white backdrop-blur-md border border-white/30 p-6 group hover:scale-[1.03] transition-transform duration-300 hover:shadow-blue-400`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 bg-orange-300 backdrop-blur-sm rounded-full shadow-inner border border-white/40 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
