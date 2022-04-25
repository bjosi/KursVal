import React from "react";
import DisplayCourse from "./DisplayCourse";

const CompletionCourses = ({
  completingCourses,
  selectedCourses,
  setSelectedCourses,
  selectedProfileCourses,
  setSelectedProfileCourses,
}) => {
  console.log(completingCourses);
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
            setSelectedProfileCourses={setSelectedProfileCourses}
            selectedProfileCourses={selectedProfileCourses}
          />
        );
      })}
    </>
  );
};

export default CompletionCourses;
