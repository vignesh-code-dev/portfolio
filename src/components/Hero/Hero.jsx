import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 text-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2563eb33,transparent_45%),radial-gradient(circle_at_bottom_left,#06b6d433,transparent_45%)]" />

      {/* Floating Blur */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="mt-6 text-5xl font-extrabold leading-tight md:text-7xl">
              Hi,
              <br />
              I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Vignesh M
              </span>
            </h1>

            <div className="mt-6 text-2xl font-semibold text-cyan-300">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "Working @ Varahi Info Tech",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
              I build modern websites, business applications, Android apps, and
              digital solutions that help businesses grow with clean, scalable
              and user-friendly experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700"
              >
                View Projects
                <ArrowRight size={18} />
              </a>

              <a
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-slate-600 px-7 py-3 font-semibold transition hover:border-blue-500 hover:bg-slate-900"
              >
                Download Resume
                <Download size={18} />
              </a>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-blue-600/30 blur-3xl" />

              {/* Profile Image */}
              <img
                src={`${import.meta.env.BASE_URL}/profile.png`}
                alt="Profile Image"
                className="relative h-80 w-80 rounded-full border-4 border-blue-500 object-cover shadow-2xl md:h-[420px] md:w-[420px]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
