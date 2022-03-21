import React from "react";
import "../styles/FilterMenu.css";

const CheckBox = ({ label, name }) => {
  return (
    <>
      <li className="filter-item">
        <label for={name}>
          <input type="checkbox" name={name} />
          {label}
        </label>
      </li>
    </>
  );
};

export default CheckBox;
