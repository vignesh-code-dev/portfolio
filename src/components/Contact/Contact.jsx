import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaWhatsapp, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Contact
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold">
            Let's Work Together
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Have a project in mind? Feel free to contact me. I'll be happy to
            discuss your ideas and build something amazing together.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold">Get In Touch</h3>

            <div className="mt-10 space-y-8">
              <div className="flex gap-5">
                <div className="rounded-full bg-cyan-500/10 p-4 text-cyan-400">
                  <Mail size={24} />
                </div>

                <div>
                  <h4 className="font-semibold">Email</h4>

                  <p className="text-slate-400">vickyv.developer@gmail.com</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="rounded-full bg-cyan-500/10 p-4 text-cyan-400">
                  <Phone size={24} />
                </div>

                <div>
                  <h4 className="font-semibold">Phone</h4>

                  <p className="text-slate-400">+91 9585864091</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="rounded-full bg-cyan-500/10 p-4 text-cyan-400">
                  <MapPin size={24} />
                </div>

                <div>
                  <h4 className="font-semibold">Location</h4>

                  <p className="text-slate-400">
                    Tiruchirappalli, Tamil Nadu , India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-5">
              <a
                href="#"
                className="rounded-full bg-slate-800 p-4 transition hover:bg-cyan-500"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-4 transition hover:bg-cyan-500"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-4 transition hover:bg-cyan-500"
              >
                <FaInstagram size={20} />
              </a>

              <a
                href="https://wa.me/919585864091"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-green-600 p-4"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto w-full max-w-md rounded-2xl border border-slate-800 bg-slate-950 p-6"
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-500"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-500"
              />

              <textarea
                rows={4}
                placeholder="Write your message..."
                className="w-full rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 outline-none transition focus:border-cyan-500 resize-none"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center cursor-pointer gap-2 rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 py-3 font-semibold transition hover:opacity-90"
              >
                <Send size={18} />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
