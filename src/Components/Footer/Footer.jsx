import "../Footer/Footer.css";
// import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    // <footer className="foot-container">
    //   <div className="foot-items">
    //     <div className="foot-left">
    //       <p className="text-sm">
    //         &copy; {new Date().getFullYear()} Vignesh M. All rights reserved.
    //       </p>
    //     </div>
    //     <div className="foot-right">
    //       <div>
    //         <span className="foot-right-title">Connect with me</span>
    //       </div>
    //       <div className="foot-right-items">
    //         <div>
    //           <span>Mail : </span>
    //           <a href="mailto:vickyv.developer@gmail.com" className="foot-mail">
    //             vickyv.developer@gmail.com
    //           </a>
    //         </div>
    //         <div className="">
    //           <div className="foot-icon-list">
    //             <a href="https://github.com/vignesh-code-dev">
    //               {" "}
    //               <FaGithub size={30} className="foot-con-icon" />
    //             </a>
    //             <a href="">
    //               <FaLinkedin size={30} className="foot-con-icon" />
    //             </a>
    //             <a href="">
    //               {" "}
    //               <FaFacebookSquare size={30} className="foot-con-icon" />
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </footer>

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
                <FaGithub size={30} className="foot-con-icon" />
              </a>
              <a href="">
                <FaLinkedin size={30} className="foot-con-icon" />
              </a>
              <a href="">
                {" "}
                <FaFacebookSquare size={30} className="foot-con-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
