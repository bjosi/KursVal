import React, { useState } from "react";
import "./FilterMenu.css";

const CheckBox = ({ label, name }) => {
  //state
  return (
    <>
      <li className="filter_item">
        <label forhtml={name}>
          <input type="checkbox" name={name} />
          {label}
        </label>
      </li>
    </>
  );
};

export default CheckBox;
