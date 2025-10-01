import { Link } from "react-scroll";
import "../NavBar/NavBar.css";
import { TiThMenu } from "react-icons/ti";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const NavBar = () => {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked(!clicked);
  }

  return (
    <nav className="navbar">
      <span className="logo">
        Web <span> Developer</span>
      </span>
      <div className="hamburger" onClick={handleClick}>
        {!clicked ? (
          <TiThMenu size={30} role="button" />
        ) : (
          <IoCloseOutline size={40} role="button" />
        )}
      </div>
      <div className={!clicked?"menu":"menu-active"}>
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
