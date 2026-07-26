import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 92 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 92 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "Express.js", level: 85 },
      { name: "MySQL", level: 90 },
      { name: "REST API", level: 88 },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Figma", level: 80 },
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            Skills
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I build modern web applications using the latest frontend, backend,
            and development tools.
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              className="rounded-3xl border border-slate-800 bg-slate-900 p-8"
            >
              <h3 className="mb-8 text-2xl font-bold text-cyan-400">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium">{skill.name}</span>

                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>

                    <div className="h-3 overflow-hidden rounded-full bg-slate-700">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                        }}
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {[
            "Responsive Design",
            "REST API",
            "Authentication",
            "Performance Optimization",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 text-center transition hover:border-cyan-500"
            >
              <h4 className="font-semibold text-cyan-300">{item}</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
