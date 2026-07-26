import { ChevronUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold">
              Vignesh
              <span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-5 leading-7 text-slate-400">
              Full Stack Developer & Partner at
              <span className="font-semibold text-cyan-400">
                {" "}
                Varahi Info Tech
              </span>
              . Building modern websites, software solutions, Android
              applications and scalable digital products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold">Quick Links</h3>

            <div className="mt-6 flex flex-col gap-3">
              {[
                "Home",
                "About",
                "Services",
                "Skills",
                "Experience",
                "Projects",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-400 transition hover:text-cyan-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold">Contact</h3>

            <div className="mt-6 space-y-3 text-slate-400">
              <p>📍 Tiruchirappalli, Tamil Nadu</p>
              <p>📞 +91 9585864091</p>
              <p>📧 vickyv.developer@gmail.com</p>
            </div>

            {/* Social */}
            <div className="mt-8 flex gap-4">
              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
              >
                <FaLinkedin />
              </a>

              <a
                href="#"
                className="rounded-full bg-slate-800 p-3 transition hover:bg-cyan-500"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/919585864091"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-green-600 p-3"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-slate-800"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <p className="text-sm text-slate-500">
            © {year} Vignesh M. All Rights Reserved.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 p-3 transition hover:scale-110"
          >
            <ChevronUp size={22} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
