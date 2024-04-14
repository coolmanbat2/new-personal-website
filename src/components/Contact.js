import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Contact.css";
import "../css/Main.css"

function Contact(params) {
  return (
    <div className="contact">
      <div className="icons">
        <a href="https://www.linkedin.com/in/thanusun/">
          <i className="bi bi-linkedin icon main-color"/>
        </a>
        <a href="https://github.com/coolmanbat2">
          <i class="bi bi-github icon main-color"/>
        </a>
        <a href="https://www.instagram.com/ryekg/">
          <i class="bi bi-instagram icon main-color"/>
        </a>
      </div>
    </div>
  );
}

export default Contact;
