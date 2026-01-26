import "./App.css";
import Main from "./pages/Main";
import Projects from "./pages/Projects";
import Experiences from "./pages/Experiences";
import Image from "./components/Image";
import React from "react";
function App() {

  return (
    <div className="App">
      <Main />
      <Image/>
      <Projects/>
      <Experiences />
    </div>
  );
}

export default App;
