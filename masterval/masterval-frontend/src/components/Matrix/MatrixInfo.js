import React, { useState, useEffect } from "react";
import CompletionCourses from "./CompletionCourses";
import "./Matrix.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

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
  // const update = () => {
  //   setTimeout(function () {
  //     setNotFullfilled(notFullfilled);
  //   }, 1000);
  // };

  useEffect(() => {
    const test2 = kunskaper.filter((mål) => !uppfyllda.includes(mål));

    setNotFullfilled(test2);
  }, [selectedProfileCourses,[]]);
  //DETTA FUNKAR EJ

  useEffect(() => {
    var test1 = courses.filter((course) =>
      notFullfilled.find((goal) => course.uChosen.includes(goal))
    );

    setCompletingCourses(test1);
  }, [notFullfilled]);

  return (
    <>
      <div className="matrix_info">
        {notFullfilled.length > 0 ? (
          <div className="section_upper">
            <h2>Din examen uppfyller ej följande mål: </h2>
            <ul>
              {notFullfilled.map((goal, index) => (
                <li key={index}>{goal}</li>
              ))}
            </ul>
          </div>
        ) : (
          <> </>
        )}
        {notFullfilled.length > 0 ? (
          <CompletionCourses
            notFullfilled={notFullfilled}
            completingCourses={completingCourses}
            selectedCourses={selectedCourses}
            setSelectedCourses={setSelectedCourses}
            selectedProfileCourses={selectedProfileCourses}
            setSelectedProfileCourses={setSelectedProfileCourses}
          />
        ) : (
          <div className="goal_complete_container">
            <FontAwesomeIcon
              className="icon"
              icon={faCheckCircle}
            ></FontAwesomeIcon>
            <p>Alla programmål uppfyllda</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MatrixInfo;
