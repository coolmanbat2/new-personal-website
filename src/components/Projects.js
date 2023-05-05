import "../css/Projects.css";

import houseparty from "../static/houseparty.png";
import netcon from "../static/netcon.jpg";
import orderup from "../static/orderup.jpg";
import Card from "./Card";
import React from "react";

function Projects(params) {
  return (
    <div className="projects" id="projects">
      <div className="header">Projects</div>
      <hr className="line-break" />
      <div>
        <Card
          src={houseparty}
          title="Group Music Controller"
          organization="personal"
          languages="React, Django, Python, JavaScript, HTML, SQLite"
          alt="houseparty"
        >
          <li>
            Constructed custom web pages using React and Material-UI to increase
            possible user rentention by 30%.
          </li>
          <li>
            Reduced navigation time between rooms by 20% by utilizing a robust
            backend
          </li>
          <li>
            Created reusable functional components to decrease development time
            by 40$ by creating code that could easily be resused
          </li>
          <li>
            Applied agile development techniques to increase coding efficency by
            60%
          </li>
        </Card>
        <Card
          src={netcon}
          title="Netcon"
          organization="UofT Local Hack Day"
          languages="HTML, CSS, JavaScript, React, Sass, Python"
          alt="netcon"
        >
          <li>
            Awarded 3rd place out of 77 participants at UofT's Local Hack Day, a
            12-hour hackathon, by applying NFC technology to create an app that
            allowed users to share contact information
          </li>
          <li>
            Designed UI mockups, wireframes, and prototypes for a new web
            application for an improved customer experience.
          </li>
          <li>
            Increased the number of active network connections by 30% by
            creating a custom contact management system with Flask and Python
          </li>
        </Card>
        <Card
          src={orderup}
          title="Orderup"
          organization="TOHacks"
          languages="Unity, C#, AssemblyAI"
          alt="orderup"
        >
          <li>
            Managed a team of 3 by delegating work, coordinating meetings, and
            providing feedback to construct an app that allows users to project
            their voice in a busy environment.
          </li>
          <li>
            Implemented a speech-to-text feature using AssemblyAI API to convert
            speech to text, which reduced the number of failed order placements
            by over 30%.
          </li>
          <li>
            Reduced development time by 50% in a team of 3 using Unity and C# by
            developing a reusable code base.
          </li>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
