import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
function Contact(params) {
  return (
    <div id="contact">
      <div
        className="header"
        style={{ justifyContent: "center", paddingBottom: "2vw" }}
      >
        Want to reach me?
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "15vw",
        }}
      >
        <a href="https://www.linkedin.com/in/thanusun/">
          <i
            className="bi bi-linkedin"
            style={{ color: "black", fontSize: "2vw" }}
          >
            Thanusun Thayaparan
          </i>
        </a>
        <a href="https://github.com/coolmanbat2">
          <i class="bi bi-github" style={{ color: "black", fontSize: "2vw" }}>
            coolmanbat2
          </i>
        </a>
        <a href="https://www.instagram.com/ryekg/">
          <i
            class="bi bi-instagram"
            style={{ color: "black", fontSize: "2vw" }}
          >
            ryekg
          </i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
