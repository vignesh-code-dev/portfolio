// import introImage from "../../assets/intro-image-png.webp";
import "../Home/Home.css";
import { Link, Element } from "react-scroll";
import img from "../../../public/images/home.webp";
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
          <a href="public/epfo.pdf" className="intro-btn" download>
            Download CV
          </a>
        </div>
        <div className="home-image">
          <img src={img} alt="" className="home-img" />
        </div>
      </section>
    </Element>
  );
};

export default Intro;
