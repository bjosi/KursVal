import React, { useState } from "react";
import "./FilterMenu.css";
import CheckBox from "./CheckBox";

const FilterMenu = () => {
  //states
  const [amountOfFilters, setAmountOfFilters] = useState(0);

  const resetHandler = () => {
    setAmountOfFilters(0);
  };

  const levels = [
    {
      name: "grundnivå",
      label: "Grundnivå",
      checked: false,
    },
    {
      name: "avanceradnivå",
      label: "Avancerad Nivå",
      checked: false,
    },
  ];

  const blocks = [
    {
      name: "block",
      label: "Block 1",
      checked: false,
    },
    {
      name: "block",
      label: "Block 2",
      checked: false,
    },
    {
      name: "block",
      label: "Block 3",
      checked: false,
    },
    {
      name: "block",
      label: "Block 4",
      checked: false,
    },
  ];

  const speeds = [
    {
      name: "fart",
      label: "Helfart",
      checked: false,
    },
    {
      name: "fart",
      label: "Halvfart",
      checked: false,
    },
  ];

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
          {levels.map(({ name, label }) => (
            <CheckBox name={name} label={label} />
          ))}
        </div>
        <hr />
        <div className="filter_item">
          <h2>Huvudområde</h2>
          <CheckBox name="huvudområde" label="Medieteknik" />
        </div>
        <hr />
        <div className="filter_item">
          <h2>Block</h2>
          {blocks.map(({ name, label }) => (
            <CheckBox name={name} label={label} />
          ))}
        </div>
        <hr />
        <div className="filter_item">
          <h2>Fart</h2>
          {speeds.map(({ name, label }) => (
            <CheckBox name={name} label={label} />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default FilterMenu;
