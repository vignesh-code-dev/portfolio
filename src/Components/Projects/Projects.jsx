import "../Projects/Projects.css";
import { Element } from "react-scroll";

const data = [
  {
    id: "1",
    title: "Calculator",
    dec: "This is a simple yet functional calculator built using plain JavaScript. It supports basic arithmetic operations such as addition, subtraction, multiplication, and division.",
    image: "public/images/calc.png",
    src: "https://vignesh-code-dev.github.io/calculator/",
  },
  {
    id: "2",
    title: "To-Do List",
    dec: "A simple and interactive To-Do List application built with React.js, allowing users to manage their daily tasks efficiently.",
    image: "public/images/todo.png",
    src: "https://vignesh-code-dev.github.io/to-do-list/",
  },
  {
    id: "3",
    title: "Form",
    dec: "A responsive and user-friendly form validation project developed using pure HTML, CSS, and JavaScript. The application validates user inputs in real-time and prevents form submission until all fields meet the required conditions.",
    image: "public/images/form.png",
    src: "https://vignesh-code-dev.github.io/Form-validation/",
  },
];

const Projects = () => {
  return (
    <Element name="projects">
      <section className="pro-container">
        <div className="pro-head">
          <h1>My Projects</h1>
        </div>
        <div className="pro-box">
          {data.map((d) => (
            <div className="pro-items" key={d.id}>
              <div className="item-text">
                <div className="item-title">
                  <h1>{d.title}</h1>
                </div>
                <div className="item-dec">
                  <p>{d.dec}</p>
                </div>
              </div>
              <div>
                <a href={d.src}>
                  <button className="pro-btn">view project</button>
                </a>
              </div>
              <div className="item-img">
                <img src={d.image} alt="" className="pro-img" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </Element>
  );
};

export default Projects;
