"use client";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="px-4 lg:mt-15 mt-5">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-white mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>

        <motion.p
          className="text-white mb-10 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          I'm open to freelance opportunities, collaborations, or just a tech chat.
          Feel free to reach out!
        </motion.p>

        <motion.form
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-3 rounded-lg border text-white border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* Optional Social Links */}
        <motion.div
          className="mt-10 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-600 text-xl transition hover:text-white"
      >
        <Github className="w-5 h-5" />
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center opacity-50 hover:opacity-100 gap-2 text-gray-400 hover:text-white text-xl transition"
      >
        <img src="https://img.icons8.com/?size=100&id=xuvGCOXi8Wyg&format=png&color=000000" alt="linkedin" width={25} height={5}/>
        LinkedIn
      </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;