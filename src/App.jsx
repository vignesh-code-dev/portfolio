import NavBar from "./Components/NavBar/NavBar";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Skill from "./Components/Skill/Skill";
import "./App.css";
const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Skill/>
      <Projects />
      <Contact />
      <Footer/>
    </div>
  );
};
export default App;
