import React from "react";
import "./Backdrop.css";

export default function Backdrop({ children, open, onClose }) {
  const handleCloseModal = (event) => {
    if (event.target.className === "backdrop-close-asfgh") {
      console.log(event.target.className);
      onClose();
    }
  };
  return (
    <div
      className="backdrop-close-asfgh"
      onClick={handleCloseModal}
      style={{
        display: open ? "flex" : "none",
      }}
    >
      {children}
    </div>
  );
}