import "../css/Dropdown.css";
import React, { useEffect, useRef, useState } from "react";

function Dropdown({ label, items }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown" ref={containerRef}>
      <button
        className="dropdown-button"
        type="button"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        {label}
      </button>
      {isOpen && (
        <div className="dropdown-menu" role="menu">
          {items.map((item) => (
            <a key={item.id} className="dropdown-item" href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
