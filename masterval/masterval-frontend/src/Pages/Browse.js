import React from "react";
import SearchHeader from "../components/SearchHeader";
import FilterMenu from "../components/FilterMenu/FilterMenu";
import DisplayCourse from "../components/DisplayCourse";
import "./Browse.css";

const Browse = ({
  courses,
  searchHandler,
  semesterHandler,
  setSelectedCourses,
  selectedCourses,
}) => {
  const [showFilter, setShowFilter] = React.useState(false);
  const filterToggle = () => setShowFilter(!showFilter);
  return (
    <>
      <SearchHeader
        searchHandler={searchHandler}
        semesterHandler={semesterHandler}
      />
      <div className="container">
        <button className="button_filter" onClick={filterToggle}>Filter</button>
        <div className="wrapper">
          <div className="left-section">
            <FilterMenu showFilter={showFilter} setShowFilter={setShowFilter} />
          </div>
          <div className="right-section">
            {courses.map((course) => (
              <DisplayCourse
                key={course.Id}
                courseinfo={course}
                homePage={true}
                setSelectedCourses={setSelectedCourses}
                selectedCourses={selectedCourses}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};


export default Browse;
