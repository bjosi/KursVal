import React, { useState } from "react";
import "./FilterMenu.css";
import searchValidator from "../../App";
import CheckBox from "./CheckBox";
const FilterMenu = ({
  filters,
  setFilterState
}) => {
  const updateCheckStatus = (index) => {
    let filterVal = filters.map((filter, currentIndex) =>
      currentIndex === index ? { ...filter, checked: !filter.checked } : filter
    );
    
    setFilterState(filterVal);
    const myFilt = filterVal
      .filter((filters) => filters.checked)
      .map((filt) => filt.name);
  };
  return (
    <div className="FilterMenu">
      <h1>Filtrera</h1>
      {filters.map((filter, index) => (
        <CheckBox
          key={filter.name}
          isChecked={filter.checked}
          checkHandler={() => updateCheckStatus(index)}
          label={filter.name}
          index={index}
        />
      ))}
    </div>
  );
};
export default FilterMenu;
