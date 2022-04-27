import React, { useState, useEffect } from "react";
import CompletionCourses from "../CompletionCourses";
import "./Matrix.css";

const MatrixInfo = ({
  uppfyllda,
  kunskaper,
  courses,
  selectedCourses,
  setSelectedCourses,
  selectedProfileCourses,
  setSelectedProfileCourses,
}) => {
  kunskaper = kunskaper.filter((goal) => goal !== "Mål");

  const [completingCourses, setCompletingCourses] = useState([]);
  const [notFullfilled, setNotFullfilled] = useState([]);

  // const stringOfGoals = notFullfilled.join();

  useEffect(() => {
    console.log(notFullfilled);
    var test1 = courses.filter((course) =>
      notFullfilled.find((goal) => course.uChosen.includes(goal))
    );
    console.log(test1);

    // const test3 = test1.filter(
    //   (course1) =>
    //     !selectedProfileCourses.find(
    //       (course2) => course1.coursecode === course2.coursecode
    //     )
    // );
    // console.log(test3);
    const test2 = kunskaper.filter((mål) => !uppfyllda.includes(mål));

    setCompletingCourses(test1);
    setNotFullfilled(test2);
    console.log(notFullfilled);
  }, [[]]);

  return (
    <>
      <div className="matrix_info">
        <div className="section_upper">
          <h2>Kurser som uppfyller mål:</h2>
          <ul>
            {notFullfilled.map((goal) => (
              <li>{goal}</li>
            ))}
          </ul>
        </div>
        <div className="section_lower">
          {notFullfilled.length > 0 ? (
            <CompletionCourses
              completingCourses={completingCourses}
              selectedCourses={selectedCourses}
              setSelectedCourses={setSelectedCourses}
              selectedProfileCourses={selectedProfileCourses}
              setSelectedProfileCourses={setSelectedProfileCourses}
            />
          ) : (
            <h1>Alla programmål uppfyllda min fucking broder</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default MatrixInfo;
