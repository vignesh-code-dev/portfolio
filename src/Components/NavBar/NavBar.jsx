import { Link, Element } from "react-scroll";
import "../NavBar/NavBar.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <span className="logo">
        Web <span> Developer</span>
      </span>
      <div className="menu">
        <Link to="home" className="menulist" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" className="menulist" smooth={true} duration={500}>
          About
        </Link>
        <Link to="projects" className="menulist" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" className="menulist" smooth={true} duration={500}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
