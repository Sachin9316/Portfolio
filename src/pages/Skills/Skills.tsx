import { motion } from "framer-motion";

const skillsArr = [
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Native",
    icon: "https://reactnative.dev/img/header_logo.svg",
  },
  {
    name: "NextJs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "PWA-NextJs",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-line.svg",
  },
  {
    name: "TailwindCss",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Formik",
    icon: "https://avatars.githubusercontent.com/u/34775151?s=200&v=4",
  },
  {
    name: "ExpressJs",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "React Form Hook",
    icon: "https://react-hook-form.com/images/logo/react-hook-form-logo-only.png",
  },
  {
    name: "Zod",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8EAI8pr3KrTAQs5QxFSOv5JIareq1q1-aQDdurj6S_A&s",
  },
  {
    name: "Framer Motion",
    icon: "https://github-production-user-asset-6210df.s3.amazonaws.com/7850794/444000081-00d6d1c3-72c4-4c2f-a664-69da13182ffc.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20250928%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250928T070020Z&X-Amz-Expires=300&X-Amz-Signature=9c1d93cf8b6ad2470af842e25266778eed6f5554e6ada30351216ec58b04b1b5&X-Amz-SignedHeaders=host",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  {
    name: "Expo",
    icon: "https://www.svgrepo.com/show/353723/expo-icon.svg",
  },
  {
    name: "Lottie Animations",
    icon: "https://cdn.iconscout.com/icon/free/png-512/free-lottiefiles-logo-icon-svg-download-png-4674917.png?f=webp&w=512",
  },
  {
    name: "C++",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
];

const Skills = () => {
  return (
    <div className="flex justify-center flex-col items-center md:mt-15 mt-10 mb-10">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-10">
        Skills
      </h1>

      <div className="w-full gap-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
        {skillsArr.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="duration-1000 text-base sm:text-lg border w-full text-center p-4 rounded-2xl flex justify-start 
            items-center gap-4 bg-white shadow-md cursor-pointer transition-all shadow-emerald-400"
            whileHover={{ scale: 1.08, rotate: 1 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.1,
            }}
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 object-contain rounded-full"
            />
            <h1 className="text-gray-700 font-semibold max-w-40 truncate">
              {skill.name}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
