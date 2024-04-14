import "./App.css";
import Main from "./components/Main";
import Projects from "./components/Projects";
import Experience from "./components/Experiences";
import Image from "./components/Image";
import React from "react";
function App() {

  return (
    <div className="App">
      <Main />
      <Image/>
      <Projects/>
      <Experience />
    </div>
  );
}

export default App;
