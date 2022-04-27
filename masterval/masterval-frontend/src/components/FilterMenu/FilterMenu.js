import React, { useState } from "react";
import "./FilterMenu.css";
import searchValidator from "../../App";
import CheckBox from "./CheckBox";
const FilterMenu = ({
    filters,
    setFilterState,
    setFilteredCourses,
    setSearchQuery,
    courses
}) => {
    
    var [myFilter,setMyFilter] = useState(filters);
    var myCourses = courses;
    const updateCheckStatus = (index) => {
      let filterVal = myFilter.map((filter, currentIndex) =>
          currentIndex === index
              ? { ...filter, checked: !filter.checked }
              : filter
      );
      
      setMyFilter(filterVal);
      setFilterState(filterVal);
      console.log(myFilter);
      const myFilt = filterVal.filter((myFilter) => myFilter.checked).map((filt) => filt.name);
  };
  return (
    <div className="FilterMenu">
        {myFilter.map((filter, index) => (
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
}
export default FilterMenu;