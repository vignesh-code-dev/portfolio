import { motion } from "framer-motion";
import { Briefcase, Code2, GraduationCap, Award } from "lucide-react";

const cards = [
  {
    icon: Briefcase,
    title: "Experience",
    value: "1+ Years",
  },
  {
    icon: Code2,
    title: "Projects",
    value: "20+ Completed",
  },
  {
    icon: Award,
    title: "Clients",
    value: "15+ Happy Clients",
  },
  {
    icon: GraduationCap,
    title: "Learning",
    value: "Full Stack Development",
  },
];

const About = () => {
  return (
    <section id="about" className="bg-slate-950 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-blue-400 font-semibold uppercase tracking-widest">
            About Me
          </p>

          <h2 className="mt-3 text-4xl md:text-5xl font-bold">
            Passionate Full Stack Developer
          </h2>

          <p className="mx-auto mt-6 max-w-4xl text-slate-400 leading-8">
            I'm <span className="text-white font-semibold">Vignesh M</span>, a
            Full Stack Developer and Working at
            <span className="text-blue-400"> Varahi Info Tech</span>. I
            specialize in building high-performance websites, modern business
            software, Android applications, and user-friendly digital
            experiences.
          </p>
        </motion.div>

        {/* Content */}
        <div className="mt-20 grid gap-14 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold">Building Digital Products</h3>

            <p className="mt-4 text-slate-400 leading-8">
              I love transforming ideas into modern digital products using
              React, Node.js, Express, MySQL, and Tailwind CSS.
            </p>

            <p className="mt-4 text-slate-400 leading-8">
              My focus is writing clean, scalable, maintainable code while
              delivering beautiful user experiences.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-5">
              <div>
                <h4 className="text-blue-400 font-semibold">Name</h4>
                <p className="mt-1 text-slate-300">Vignesh M</p>
              </div>

              <div>
                <h4 className="text-blue-400 font-semibold">Company</h4>
                <p className="mt-1 text-slate-300">Varahi Info Tech</p>
              </div>

              <div>
                <h4 className="text-blue-400 font-semibold">Email</h4>
                <p className="mt-1 text-slate-300">
                  vickyv.developer@gmail.com
                </p>
              </div>

              <div>
                <h4 className="text-blue-400 font-semibold">Location</h4>
                <p className="mt-1 text-slate-300">
                  Tiruchirappalli, Tamil Nadu , India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Cards */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {cards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-slate-800 bg-slate-900 p-4 transition hover:-translate-y-2 hover:border-blue-500"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="inline-flex rounded-full bg-blue-500/10 p-4 text-blue-400">
                      <Icon size={32} />
                    </div>
                    <p className="text-slate-400">{card.title}</p>
                  </div>
                  <h3 className="text-3xl font-bold">{card.value}</h3>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
