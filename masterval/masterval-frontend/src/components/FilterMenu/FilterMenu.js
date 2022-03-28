import React, { useState } from "react";
import "./FilterMenu.css";
import CheckBox from "./CheckBox";

const FilterMenu = () => {
  //states
  const [amountOfFilters, setAmountOfFilters] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const filters = [
    "Grundnivå",
    "Avancerad Nivå",
    "Medieteknik",
    "Block 1",
    "Block 2",
    "Block 3",
    "Block 4",
    "Helfart",
    "Halvfart",
  ];

  const resetHandler = () => {
    setAmountOfFilters(0);
  };

  const selectHandler = (filter) => {
    const isSelected = selectedFilters.includes(filter);

    const newSelection = isSelected
      ? selectedFilters.filter((currentFilter) => currentFilter !== filter)
      : [...selectedFilters, filter];
  };

  return (
    <div className="filter_menu">
      <div className="filter_header">
        <h1>Filtrera</h1>
        <button onClick={resetHandler}>
          <p>Rensa({amountOfFilters})</p>
        </button>
      </div>
      <ul className="filter_list">
        <div className="filter_item">
          <h2>Välj Nivå</h2>
          <CheckBox name="Grundnivå" label="Grundnivå" />
          <CheckBox name="Avancerad Nivå" label="Avancerad Nivå" />
        </div>
        <hr />
        <div className="filter_item">
          <h2>Huvudområde</h2>
          <CheckBox name="huvudområde" label="Medieteknik" />
        </div>
        <hr />
        <div className="filter_item">
          <h2>Block</h2>
          <CheckBox name="Block 1" label="Block 1" />
          <CheckBox name="Block 2" label="Block 2" />
          <CheckBox name="Block 3" label="Block 3" />
          <CheckBox name="Block 4" label="Block 4" />
        </div>
        <hr />
        <div className="filter_item">
          <h2>Fart</h2>
          <CheckBox name="Helfart" label="Helfart" />
          <CheckBox name="Halvfart" label="Halvfart" />
        </div>
      </ul>
    </div>
  );
};

export default FilterMenu;
