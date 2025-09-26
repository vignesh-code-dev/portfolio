import "../Contact/Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { GrConnect } from "react-icons/gr";
import { Element } from "react-scroll";
const Contact = () => {
  return (
    <Element name="contact">
      <section className="con-container">
        <div className="con-head">
          <h1>Contact</h1>
        </div>
        <div className="contact-container">
          <div className="contact">
            <div className="text-container">
              <div className="con-text">
                <FaLocationDot
                  size={30}
                  style={{ color: "rgb(242, 255, 0)" }}
                />
                <div>
                  <span className="con-text-heading"> Address</span>
                  <p>
                    2/1,Melakurichi,kurichi,
                    <br />
                    kulithalai(TK),Karur(Dt).
                    <br />
                    Pin-639110
                  </p>
                </div>
              </div>
              <div className="con-text">
                <FaPhoneSquareAlt
                  size={30}
                  style={{ color: "rgb(242, 255, 0)" }}
                />
                <div>
                  <span className="con-text-heading">Phone</span>
                  <p>+91 9585864091</p>
                </div>
              </div>
              <div className="con-text">
                <MdEmail size={30} style={{ color: "rgb(242, 255, 0)" }} />
                <div>
                  <span className="con-text-heading">Email</span>
                  <p>vickyv.developer@gmail.com</p>
                </div>
              </div>
              <div className="con-text">
                <GrConnect size={30} style={{ color: "rgb(242, 255, 0)" }} />
                <div>
                  <span className="con-text-heading">Connect with me</span>
                  <div className="con-icon-list">
                    <FaLinkedin size={20} className="con-icon" />
                    <FaXTwitter size={20} className="con-icon" />
                    <FaFacebookSquare size={20} className="con-icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-message">
            <form className="con-form" action="">
              <div className="con-input">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" />
              </div>
              <div className="con-input">
                <label htmlFor="mail">Your Mail</label>
                <input type="mail" id="mail" />
              </div>
              <div className="con-input-message">
                {/* <label for="message">Message</label> */}
                <textarea
                  name="message"
                  id="message"
                  rows="10"
                  cols="10"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="con-input">
                <button className="con-btn">Send</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Contact;
