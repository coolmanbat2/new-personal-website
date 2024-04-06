import "./App.css";
import Main from "./components/Main";
import Menubar from "./components/Menubar";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experiences";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import React from "react";
function App() {

  return (
    <div className="App">
      <Main />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
