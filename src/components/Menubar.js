import "../css/Menubar.css";
import React from "react";

function Menubar(params) {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary navbar-light menubar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          TT
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#about">
                About
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#project">
                Projects
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#experience">
                Experience
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#resume">
                Resume
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menubar;
