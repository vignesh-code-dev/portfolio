// import introImage from "../../assets/intro-image-png.webp";
import "../Home/Home.css";
import { Link, Element } from "react-scroll";
const Intro = () => {
  return (
    <Element name="home" className="intro">  
      <section  >
        <div className="intro-content">
          <span className="hi">Hi,</span>
          <span className="intro-text">
            I'm <span className="intro-name">Vignesh</span>
          </span>
          <p className="intro-para">
            I’m a frontend developer focused on building responsive, fast, and
            <br />
            accessible websites using HTML, CSS, JavaScript, and React.
            <br /> Currently looking for opportunities to contribute <br />
            and grow in a professional environment.
          </p>
          <Link>
            <button className="intro-btn">Hire me</button>
          </Link>
        </div>
      </section>
    </Element>
  );
};

export default Intro;
