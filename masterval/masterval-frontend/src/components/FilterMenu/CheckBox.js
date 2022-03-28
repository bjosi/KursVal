import React, { useState } from "react";
import "./FilterMenu.css";

const CheckBox = ({ label, name }) => {
  //state

  const [checked, setChecked] = useState(false);

  const changeHandler = (e) => {
    checked ? setChecked(false) : setChecked(true);
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
