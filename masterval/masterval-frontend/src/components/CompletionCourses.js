import React from "react";
import DisplayCourse from "./DisplayCourse";

const CompletionCourses = ({
  completingCourses,
  selectedCourses,
  setSelectedCourses,
}) => {
  return (
    <>
      <h2>Kurser som uppfyller mål:</h2>
      {completingCourses.map((course) => {
        return (
          <DisplayCourse
            courseinfo={course}
            homePage={true}
            selectedCourses={selectedCourses}
            setSelectedCourses={setSelectedCourses}
          />
        );
      })}
    </>
  );
};

export default CompletionCourses;
