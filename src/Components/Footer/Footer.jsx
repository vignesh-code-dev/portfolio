import "../Footer/Footer.css";
import { FaGithub,FaLinkedin } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="foot-container">
      <div className="foot-items">
        <div className="foot-left">
          <p> &copy; {new Date().getFullYear()} Vignesh M. All Rights Reserved. </p>
        </div>
        <div className="foot-right">
          <div className="foot-right-items">
            <div className="foot-icon-list">
              <span>Follow me </span>
              <a href="https://github.com/vignesh-code-dev">
                {" "}
                <FaGithub size={30} className="foot-con-icon" target="_blank" />
              </a>
              <a href="">
                <FaLinkedin size={30} className="foot-con-icon" target="_blank"  />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
