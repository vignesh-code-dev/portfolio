import React from "react";
import { Element } from "react-scroll";
import "../Skill/Skill.css";
const data = [
  {
    id: "1",
    img: "images/html.svg",
    name: "HTML 5",
    dec: "I have a good understanding of HTML and use semantic tags like  header, section, and footer to create clean layouts. I can build forms using input elements, create tables for data, images, videos, and links to web pages.These skills are shown in my projects like personal websites and landing pages.",
  },
  {
    id: "2",
    img: "images/css.svg",
    name: "CSS 3",
    dec: "I use CSS to style web pages and make them visually appealing and responsive. I'm comfortable with selectors, colors, fonts, box model, flexbox, and grid. I also create responsive designs using media queries. My projects include clean layouts, hover effects, and mobile friendly pages using modern CSS techniques.",
  },
  {
    id: "3",
    img: "images/javascript.svg",
    name: "JavaScript",
    dec: "I use JavaScript to add interactivity and dynamic features to web pages. I have experience with variables, functions, loops, events, and DOM manipulation.I’ve built small projects like form validation, sliders, and interactive UI elements to practice my skills.",
  },
  {
    id: "4",
    img: "images/react.svg",
    name: "React JS",
    dec: "I use React to build dynamic and reusable components for web applications. I have experience with JSX, props, state, and handling events. I’ve created simple projects like to-do apps and portfolio pages using React, and I also use React Router for navigation.",
  },
  {
    id: "5",
    img: "images/java.svg",
    name: "JAVA",
    dec: "Proficient in Core Java with a strong understanding of Object-Oriented Programming (OOP) concepts such as Encapsulation, Inheritance, Polymorphism and Abstraction. Knowledgeable in Collections Framework, Exception Handling, File Handling and basic Multithreading.",
  },
];

const Skill = () => {
  return (
    <Element name="skill">
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
            {data.map((d) => (
              <div className="item" key={d.id}>
                <div className="image">
                  <div>
                    <img src={d.img} alt="" className="skill-image" />
                  </div>
                </div>
                <div className="pro-text">
                  <h1 className="pro-text-name">{d.name}</h1>
                  <p className="pro-text-dec">{d.dec}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Skill;
