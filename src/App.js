import "./App.css";
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experiences";
import Contact from "./components/Contact";
import React from "react";
function App() {

  return (
    <div className="App">
      <Main />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}

export default App;
