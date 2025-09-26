import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../About/About.css";
import { Element } from "react-scroll";
const data = [
  {
    id: "1",
    img: "public/images/html.svg",
    name: "HTML 5",
    dec: "I have a good understanding of HTML and use semantic tags like  header, section, and footer to create clean layouts. I can build forms using input elements, create tables for data, and add images, videos, and links to web pages.These skills are shown in my projects like personal websites and landing pages.",
  },
  {
    id: "2",
    img: "public/images/css.svg",
    name: "CSS 3",
    dec: "I use CSS to style web pages and make them visually appealing and responsive. I'm comfortable with selectors, colors, fonts, box model, flexbox, and grid. I also create responsive designs using media queries. My projects include clean layouts, hover effects, and mobile friendly pages using modern CSS techniques.",
  },
  {
    id: "3",
    img: "public/images/javascript.svg",
    name: "JavaScript",
    dec: "I use JavaScript to add interactivity and dynamic features to web pages. I have experience with variables, functions, loops, events, and DOM manipulation.I’ve built small projects like form validation, sliders, and interactive UI elements to practice my skills.",
  },
  {
    id: "4",
    img: "public/images/react.svg",
    name: "React JS",
    dec: "I use React to build dynamic and reusable components for web applications. I have experience with JSX, props, state, and handling events. I’ve created simple projects like to-do apps and portfolio pages using React, and I also use React Router for navigation.",
  },
  {
    id: "5",
    img: "public/images/java.svg",
    name: "JAVA",
    dec: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit sed quasi natus quas. Aut nemo deleniti quibusdam neque, iure est doloribus fuga ea tempora, vitae, unde voluptate quos qui.",
  },
];

const Sliderr = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <Element name="about">
      <section className="main">
        <div className="title">
          <h1>About Me</h1>
        </div>
        <p className="skill-para">
          Hi, I'm <span className="para-name">Vignesh</span>, a passionate
          Frontend Developer. I specialize in crafting responsive,
          <br /> user-friendly websites and applications using HTML, CSS,
          JavaScript, and modern frameworks like React js.
        </p>
        <div className="skill-header">
          <h1>Technical Skills</h1>
        </div>

        <div className="container">
          <div className="box">
            <Slider {...settings}>
              {data.map((d) => (
                <div className="item" key={d.id}>
                  <div className="image">
                    <div >
                      <img src={d.img} alt="" className="skill-image"/>
                    </div>
                  </div>
                  <div className="pro-text">
                    <h1 className="pro-text-name">{d.name}</h1>
                    <p className="pro-text-dec">{d.dec}</p>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Sliderr;
