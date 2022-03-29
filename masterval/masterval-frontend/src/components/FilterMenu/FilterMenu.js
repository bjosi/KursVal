import React, { useState } from "react";
import "./FilterMenu.css";

const FilterMenu = ({ filters, selectedFilters, setSelectedFilters }) => {
  //states
  const [amountOfFilters, setAmountOfFilters] = useState(0);

  const resetHandler = () => {
    setAmountOfFilters(0);
    setSelectedFilters([]);
  };

  const selectHandler = (filter) => {
    const isSelected = selectedFilters.includes(filter);

    const newSelection = isSelected
      ? selectedFilters.filter((currentFilter) => currentFilter !== filter)
      : [...selectedFilters, filter];
    setSelectedFilters(newSelection);
    console.log(selectedFilters);
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
        {filters.map((filter, index) => {
          const isSelected = selectedFilters.includes(filter);
          return (
            <li className="filter_item">
              <label forhtml={filter}>
                <input
                  type="checkbox"
                  name={filter}
                  onChange={() => selectHandler(filter)}
                />
                {filter}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FilterMenu;
