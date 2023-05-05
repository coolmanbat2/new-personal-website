import React from "react";
import resume from "../static/ThanusunResume.pdf";
import "../css/Resume.css";
function Resume(params) {
  return (
    <div id="resume">
      <div className="header">Resume</div>
      <hr className="line-break" />
      <object
        className="resume"
        data={resume + "#view=FitH"}
        type="application/pdf"
      >
        <p>Unable to Display PDF</p>
      </object>
    </div>
  );
}

export default Resume;
