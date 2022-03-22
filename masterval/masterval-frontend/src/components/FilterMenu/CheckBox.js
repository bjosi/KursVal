import React, { useState } from "react";
import "./FilterMenu.css";

const CheckBox = ({ label, name, checked, CheckBox, setCheckBox }) => {
  //state

  const changeHandler = (e) => {
    console.log(e.target.checked);
    setCheckBox({ ...CheckBox, checked: e.target.checked });
  };

  return (
    <>
      <li className="filter_item">
        <label forhtml={name}>
          <input
            type="checkbox"
            name={name}
            checked={checked}
            onChange={(e) => changeHandler(e)}
          />
          {label}
        </label>
      </li>
    </>
  );
};

export default CheckBox;
