import "../css/CollapsibleSection.css";
import React, { useState } from "react";

function CollapsibleSection({ title, children, defaultOpen = false }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  return (
    <div className="collapsible-section">
      <button
        className="collapsible-button"
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className={`collapsible-arrow ${isOpen ? "open" : ""}`}>▼</span>
      </button>
      {isOpen && <div className="collapsible-content">{children}</div>}
    </div>
  );
}

export default CollapsibleSection;
