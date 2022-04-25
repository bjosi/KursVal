import React, { useState, useEffect } from "react";
import CompletionCourses from "../CompletionCourses";
import DisplayCourse from "../DisplayCourse";
import "./Matrix.css";

const MatrixInfo = ({
  uppfyllda,
  kunskaper,
  courses,
  selectedCourses,
  setSelectedCourses,
}) => {
  kunskaper = kunskaper.filter((goal) => goal !== "Mål");

  const [completingCourses, setCompletingCourses] = useState([]);
  const [notFullfilled, setNotFullfilled] = useState([]);

  const stringOfGoals = notFullfilled.join();

  useEffect(() => {
    var test1 = courses.filter((course) => {
      return !stringOfGoals.includes(course.uChosen);
    });
    const test2 = kunskaper.filter((mål) => !uppfyllda.includes(mål));
    test1 = test1.filter((course) => !selectedCourses.includes(course));

    setCompletingCourses(test1);
    setNotFullfilled(test2);
    console.log(completingCourses);
    console.log(selectedCourses);
    console.log(notFullfilled);
  }, [selectedCourses]);

  return (
    <>
      <div className="matrix_info">
        <div className="section">
          <h2 className="matrix_info_header">Ej uppfyllda mål: </h2>
          {notFullfilled.map((goal) => (
            <li>{goal}</li>
          ))}
        </div>
        <div className="section">
          {notFullfilled.length > 0 ? (
            <CompletionCourses
              completingCourses={completingCourses}
              selectedCourses={selectedCourses}
              setSelectedCourses={setSelectedCourses}
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
