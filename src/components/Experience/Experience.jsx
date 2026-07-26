import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Rocket } from "lucide-react";

const timeline = [
  {
    year: "2025",
    title: "Frontend Developer",
    company: "Freelance",
    icon: GraduationCap,
    description:
      "Started building responsive websites using HTML, CSS, JavaScript and React.",
  },
  {
    year: "2025",
    title: "Full Stack Developer",
    company: "Professional Projects",
    icon: Briefcase,
    description:
      "Developed business websites, employee management systems, payroll software, and custom web applications.",
  },
  {
    year: "2026 - Present",
    title: "Junior Software Engineer",
    company: "Varahi Info Tech",
    icon: Rocket,
    description:
      "Leading website development, software solutions, Android applications, UI/UX design, and digital transformation projects.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Experience
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            My Professional Journey
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
            Every project has helped me improve my skills, solve real-world
            problems, and deliver better digital experiences.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Center Line */}
          <div className="absolute left-6 top-0 h-full w-1 rounded-full bg-slate-700 md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-16">
            {timeline.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex ${
                    index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {/* Card */}
                  <div className="ml-16 w-full rounded-3xl border border-slate-800 bg-slate-950 p-8 md:ml-0 md:w-[45%]">
                    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                      {item.year}
                    </span>

                    <h3 className="mt-5 text-2xl font-bold">{item.title}</h3>

                    <p className="mt-2 text-blue-400">{item.company}</p>

                    <p className="mt-5 leading-7 text-slate-400">
                      {item.description}
                    </p>
                  </div>

                  {/* Timeline Icon */}
                  <div className="absolute left-6 top-10 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border-4 border-slate-900 bg-gradient-to-r from-blue-600 to-cyan-400 md:left-1/2">
                    <Icon size={22} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
