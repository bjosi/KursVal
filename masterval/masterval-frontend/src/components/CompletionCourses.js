import React from "react";
import DisplayCourse from "./DisplayCourse";

const CompletionCourses = ({
  notFullfilled,
  completingCourses,
  selectedCourses,
  setSelectedCourses,
  selectedProfileCourses,
  setSelectedProfileCourses,
}) => {
  return (
    <>
      {notFullfilled.map((goal, index) => {
        return (
          <div key={index}>
            <p> Kurser som uppfyller {goal} </p>
            <div className="section_lower">
              {completingCourses.map((kurs, index) =>
                kurs.uChosen.includes(goal) ? (
                  <DisplayCourse
                    key={index}
                    courseinfo={kurs}
                    homePage={true}
                    selectedCourses={selectedCourses}
                    setSelectedCourses={setSelectedCourses}
                    setSelectedProfileCourses={setSelectedProfileCourses}
                    selectedProfileCourses={selectedProfileCourses}
                  />
                ) : null
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
/*

<DisplayCourse
    courseinfo={kurs}
    homePage={true}
    selectedCourses={selectedCourses}
    setSelectedCourses={setSelectedCourses}
    setSelectedProfileCourses={setSelectedProfileCourses}
    selectedProfileCourses={selectedProfileCourses}
/>
*/
export default CompletionCourses;
