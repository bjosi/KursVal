import React, { useState } from "react";
import "./FilterMenu.css";
const CheckBox = ({ isChecked, label, checkHandler, index }) => {
  return (
    <div>
      {index === 0 ? (
        <h2>Välj nivå</h2>
      ) : index === 2 ? (
        <h2>Välj block</h2>
      ) : index === 6 ? (
        <h2>Välj fart</h2>
      ) : index === 8 ? (
        <h2> Välj termin</h2>) 
        : null}
      <input
        type="checkbox"
        id={`checkbox-${index}`}
        checked={isChecked}
        onChange={checkHandler}
      />
      <label className="filter_list" htmlFor={`checkbox-${index}`}>
        {label}
      </label>
      {label === "Avancerad nivå" ? (
        <hr />
      ) : label === "Block 4" ? (
        <hr />
      ) : label === "Halvfart" ? (
        <hr /> 
      ) : null}
    </div>
  );
};
export default CheckBox;
