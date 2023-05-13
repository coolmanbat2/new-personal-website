import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../css/Contact.css";

function Contact(params) {
  return (
    <div id="contact">
      <div className="header contact-adj">Want to reach me?</div>
      <div className="icons">
        <a href="https://www.linkedin.com/in/thanusun/">
          <i className="bi bi-linkedin icon">Thanusun Thayaparan</i>
        </a>
        <a href="https://github.com/coolmanbat2">
          <i class="bi bi-github icon">coolmanbat2</i>
        </a>
        <a href="https://www.instagram.com/ryekg/">
          <i class="bi bi-instagram icon">ryekg</i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
