import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Contact.css";
import "../css/Main.css";

function Contact() {
  return (
    <div className="contact">
      <div className="icons">
        <a
          href="https://www.linkedin.com/in/thanusun-thayaparan/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <i className="bi bi-linkedin icon main-color" />
        </a>
        <a
          href="https://github.com/coolmanbat2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <i className="bi bi-github icon main-color" />
        </a>
        <a
          href="https://www.instagram.com/ryekg/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile"
        >
          <i className="bi bi-instagram icon main-color" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
