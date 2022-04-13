import React, { useState } from 'react';
import SearchHeader from "../components/SearchHeader";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import DisplayCourse from "../components/DisplayCourse";
import Backdrop from "../components/Backdrop/Backdrop";
import "./Browse.css";

const Browse = ({
  courses,
  searchHandler,
  semesterHandler,
  selectedCourses,
  setSelectedCourses,
  filters,
  selectedFilters,
    setSelectedFilters,
  selectedProfileCourses,
  setSelectedProfileCourses
}) => {
    const [backdrop, setBackdrop] = useState(false);
    const isLocalStorage = (JSON.stringify(selectedCourses) == JSON.stringify(selectedProfileCourses));


  return (
    <>
      <SearchHeader
        searchHandler={searchHandler}
        semesterHandler={semesterHandler}
      />
      <div className="container">
        <div className="div_filter">
          <button className="button_filter" onClick={() => setBackdrop(true)}>
            Filter
          </button>
        </div>
        <Backdrop onClose={() => setBackdrop(false)} open={backdrop}>
          <div style={{ width: "300px", backgroundColor: "white", position: "relative" }}>
            <FilterMenu
              filters={filters}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
            <div className="close_button_container">
              <div className="close_button" onClick={() => setBackdrop(false)}>
                X
              </div>
            </div>
          </div>
        </Backdrop>
        <div className="wrapper">
          <div className="left-section">
            <FilterMenu
              filters={filters}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </div>
          <div className="right-section">
            {courses.map((course) => (
              <DisplayCourse
                    key={course.Id}
                    courseinfo={course}
                    homePage={true}
                    setSelectedCourses={setSelectedCourses}
                    selectedCourses={selectedCourses}
                    setSelectedProfileCourses={setSelectedProfileCourses}
                    selectedProfileCourses={selectedProfileCourses}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Browse;
