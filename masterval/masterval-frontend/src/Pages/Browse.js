import React, { useState } from "react";
import SearchHeader from "../components/SearchHeader";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import DisplayCourse from "../components/DisplayCourse";
import Backdrop from "../components/Backdrop/Backdrop";
import "../styles/DisplayCourse.css";
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
  setSelectedProfileCourses,
  setFilterState,
}) => {
  const [backdrop, setBackdrop] = useState(false);

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

        <div className="div_info">
          <p> visar {courses.length} resultat </p>
          <div className="show_info_block">
            <div className="course_block_icon"></div>
            <p> - Block </p>
          </div>
        </div>
        <Backdrop onClose={() => setBackdrop(false)} open={backdrop}>
          <div
            style={{
              width: "300px",
              position: "relative",
            }}
          >
            <FilterMenu
              filters={filters}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              setFilterState={setFilterState}
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
              setFilterState={setFilterState}
            />
          </div>
          <div className="right-section">
            {courses.map((course, index) => (
              <DisplayCourse
                key={index}
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
