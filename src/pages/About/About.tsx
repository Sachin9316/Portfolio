import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="px-3 md:mt-15 mt-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-white text-xl font-bold leading-relaxed text-left ease-in-out delay-150"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I’m a React and Next.js developer with 1 year of professional
          experience building high-performance admin dashboards and progressive
          web apps (PWAs). I’ve worked on a range of projects such as tailor
          management systems, multi-restaurant admin panels, and inventory
          management tools.
          <br />
          <br />
          I'm passionate about writing clean, scalable code, and creating smooth
          user experiences using modern tools like Tailwind CSS, Redux Toolkit,
          and Framer Motion.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
