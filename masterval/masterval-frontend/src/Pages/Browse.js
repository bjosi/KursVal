import React, { useEffect } from "react";
import SearchHeader from "../components/SearchHeader";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import DisplayCourse from "../components/DisplayCourse";

const Browse = ({ courses, searchHandler, setSelectedCourses, selectedCourses }) => {
  return (
    <>
      <SearchHeader searchHandler={searchHandler} />
      <div className="wrapper">
        <div className="left-section">
          <FilterMenu />
        </div>
        <div className="right-section">
                  {courses.map((course) => (
                      <DisplayCourse courseinfo={course} homePage={true} setSelectedCourses={setSelectedCourses} selectedCourses={ selectedCourses} />
          ))}
        </div>
      </div>
    </>
  );
};
export default Browse;
