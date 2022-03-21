import React, { useState } from "react";
import "../styles/FilterMenu.css";
import CheckBox from "./CheckBox";

const FilterMenu = () => {
  //states
  const [amountOfFilters, setAmountOfFilters] = useState(0);

  const resetHandler = () => {
    setAmountOfFilters(0);
  };

  return (
    <div className="filter-menu">
      <div className="filter-header">
        <h1>Filtrera</h1>
        <button onClick={resetHandler}>
          <p>Rensa({amountOfFilters})</p>
        </button>
      </div>
      <ul className="filter-list">
        <div className="filter-item">
          <h2>Välj Nivå</h2>
          <CheckBox name="grundnivå" label="Grundnivå" />
          <CheckBox name="avanceradnivå" label="Avancerad Nivå" />
        </div>
        <div className="filter-item">
          <h2>Huvudområde</h2>
          <CheckBox name="huvudområde" label="Medieteknik" />
        </div>
      </ul>
    </div>
  );
};

export default FilterMenu;
