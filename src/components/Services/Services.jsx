import { motion } from "framer-motion";
import {
  Globe,
  MonitorSmartphone,
  Smartphone,
  Database,
  Palette,
  Headset,
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "../Services/Services.css";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description:
      "Modern, responsive and SEO-friendly websites built with React and Tailwind CSS.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Application",
    description:
      "Custom web applications with scalable architecture, authentication and dashboards.",
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    description:
      "High-performance Android applications designed for businesses and startups.",
  },
  {
    icon: Database,
    title: "Software Solutions",
    description:
      "Custom software for payroll, employee management, ERP and workflow automation.",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    description:
      "Beautiful, user-focused interfaces that provide an excellent digital experience.",
  },
  {
    icon: Headset,
    title: "Support & Maintenance",
    description:
      "Continuous support, updates, security improvements and performance optimization.",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Services
          </span>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl test">
            What I Can Do For You
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            I help businesses transform ideas into modern digital products with
            clean code, scalable architecture and outstanding user experience.
          </p>
        </motion.div>

        {/* Cards */}
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={5000}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="services-swiper mt-16 pb-14"
        >
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <SwiperSlide key={service.title} className="h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group flex h-full flex-col rounded-3xl border border-slate-800 bg-slate-950 p-8 transition-all duration-300 hover:border-cyan-500 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="mb-6 inline-flex w-fit rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-4">
                    <Icon size={32} />
                  </div>

                  <h3 className="mb-4 text-2xl font-semibold group-hover:text-cyan-400">
                    {service.title}
                  </h3>

                  <p className="flex-1 leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <button className="mt-8 font-semibold text-cyan-400 transition duration-300 group-hover:translate-x-2">
                    Learn More →
                  </button>
                </motion.div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Services;
