import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Employee Management System",
    image: "/projects/employee.png",
    description:
      "A complete employee management solution with authentication, attendance, payroll and reports.",
    technologies: ["React", "Node.js", "Express", "MySQL"],
  },
  {
    title: "Portfolio Website",
    image: "/projects/portfolio.png",
    description:
      "Premium personal portfolio showcasing projects, skills and experience with modern animations.",
    technologies: ["React", "Framer Motion"],
  },
  {
    title: "Bus Booking System",
    image: "/projects/bus.png",
    description:
      "Online ticket booking platform with route management, seat selection and user dashboard.",
    technologies: ["React", "Express", "MySQL"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-slate-950 py-24 text-white">
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
            Portfolio
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Here are some of the projects I've developed using modern
            technologies with a focus on performance, scalability and user
            experience.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{ y: -10 }}
              className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-500 hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>

                <p className="mt-4 leading-7 text-slate-400">
                  {project.description}
                </p>

                {/* Tech */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-cyan-500/10 px-3 py-1 text-sm text-cyan-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
