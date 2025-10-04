import "../Home/Home.css";
import { Link, Element } from "react-scroll";
const Intro = () => {
  return (
    <Element name="home" className="intro">
      <section className="home-container">
        <div className="intro-content">
          <span className="hi">Hi,</span>
          <span className="intro-text">
            I'm <span className="intro-name">Vignesh</span>
          </span>
          <p className="intro-para">
            I’m a frontend developer focused on building responsive, fast, and
            <br />
            accessible websites using HTML, CSS, JavaScript, and React js.
            <br /> Currently looking for opportunities to contribute <br />
            and grow in a professional environment.
          </p>
          <a href="public/VIGNESH Resume.pdf" className="intro-btn" download="VIGNESH Resume.pdf" rel="noopener">
            Download CV
          </a>
        </div>
      </section>
    </Element>
  );
};

export default Intro;
