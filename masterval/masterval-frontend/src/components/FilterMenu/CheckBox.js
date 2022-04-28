import React, { useState } from "react";
import "./FilterMenu.css";

const CheckBox = ({ label, name }) => {
  //state

  const [checked, setChecked] = useState(false);

  const changeHandler = (e) => {
    checked ? setChecked(false) : setChecked(true);
  };

  return <></>;
};

export default CheckBox;
