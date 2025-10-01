import "../Contact/Contact.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
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
                <FaLocationDot size={30} style={{ color: "rgb(5, 129, 17)" }} />
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
                  style={{ color: "rgb(5, 129, 17)" }}
                />
                <div>
                  <span className="con-text-heading">Phone</span>
                  <p>+91 9585864091</p>
                </div>
              </div>
              <div className="con-text">
                <MdEmail size={30} style={{ color: "rgb(5, 129, 17)" }} />
                <div>
                  <span className="con-text-heading">Email</span>
                  <p>
                    <a
                      href="mailto:vickyv.developer@gmail.com"
                      target="_blank"
                      className="con-mail"
                    >
                      vickyv.developer@gmail.com
                    </a>
                  </p>
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
