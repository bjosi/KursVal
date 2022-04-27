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

    const displayTheCourses = (goal, completingCourses) => {
        const test1 = completingCourses.filter((course) =>
            completingCourses.find((goal) => completingCourses.uChosen.includes(goal))
        );
        return (<>
            {completingCourses.map((kurs) => {


            })}
            </>)

    }

  return (
      <>

          {notFullfilled.map((goal) => {
              return (<>
                  

            <p> Kurser som uppfyller {goal} </p>
                  <div className="section_lower">
                      {completingCourses.map((kurs) => (
                          kurs.uChosen.includes(goal)?
                          <DisplayCourse
                              courseinfo={kurs}
                              homePage={true}
                              selectedCourses={selectedCourses}
                              setSelectedCourses={setSelectedCourses}
                              setSelectedProfileCourses={setSelectedProfileCourses}
                              selectedProfileCourses={selectedProfileCourses}
                          />: <></>
                      ))}
             </div>
      </>  );
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
