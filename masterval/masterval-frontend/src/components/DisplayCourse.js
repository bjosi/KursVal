import "../styles/DisplayCourse.css";
import Btn_addcourse from "./Btn_addcourse";
import Btn_removeCourse from "./Btn_removeCourse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn_moveCourse from "./Btn_moveCourse";
import React, { Component, useEffect, useState } from "react";
import { faAngleDown, faAngleUp, faCircleHalfStroke, faCircle } from "@fortawesome/free-solid-svg-icons";


const DisplayCourse = ({
  courseinfo,
  setSelectedCourses,
  selectedCourses,
  homePage,
}) => {
  const [showresult, setShowResults] = React.useState(false);
  const onClick = () => setShowResults(!showresult);

  return (
    <div>
      <div className="course_card">
        <div className="top">
          <div className="div_l">
            <div className="title_container">
              <p className="c_title"> {courseinfo.coursename} </p>
              <ShowBlockOfCourse courseinfo={courseinfo}></ShowBlockOfCourse>
            </div>
            <p class="c_info"> {courseinfo.progname} </p>
            <p class="c_info"> Termin {courseinfo.semester} </p>
            <p class="c_info"> {courseinfo.courselevel} </p>
            {showresult ? <Results courseinfo={courseinfo} /> : null}
          </div>
          <div className="div_r">
            {homePage ? (
              <Btn_addcourse
                courseinfo={courseinfo}
                setSelectedCourses={setSelectedCourses}
                selectedCourses={selectedCourses}
              />
            ) : (
              <div className="btn-displaycourse">
                <Btn_moveCourse
                  courseinfo={courseinfo}
                  setSelectedCourses={setSelectedCourses}
                  selectedCourses={selectedCourses}
                />
                <Btn_removeCourse
                  courseinfo={courseinfo}
                  setSelectedCourses={setSelectedCourses}
                  selectedCourses={selectedCourses}
                />
              </div>
            )}
            <ShowPaseOfCourse courseinfo={courseinfo} />
          </div>
        </div>
        <span id="button_show_more" type="button" onClick={onClick}>
          {showresult ? (
            <FontAwesomeIcon icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} />
          )}

        </span>
      </div>
    </div>
  );
};

const Results = ({ courseinfo }) => {
  const link = "https://studieinfo.liu.se/kurs/" + courseinfo.coursecode;
  return (
    <div>
      <p class="c_info"> {courseinfo.coursepoints} HP </p>
      <p class="c_info"> {courseinfo.courselevel} </p>
      <a href={link} target="_blank" rel="noreferrer">
        Besök kurshemsidan!
      </a>
    </div>
  );
};

const ShowPaseOfCourse = ({ courseinfo }) => {
  let blocks = courseinfo.courseblock.split(",");
  let paseIsFull = true;

  if (blocks.length === 2) {
    paseIsFull = false;
  }
  return <div className="pase_container">{paseIsFull ? <p className="pase_text">Helfart</p> : <p className="pase_text">Halvfart</p>} {paseIsFull ? <FontAwesomeIcon className="pase_icon_half" icon={faCircle}/> : <FontAwesomeIcon className="pase_icon" icon={faCircleHalfStroke}/>}</div>;
};

const ShowBlockOfCourse = ({ courseinfo }) => {
  let blocks = courseinfo.courseblock.split(",");
  return (
    <div>
    
    {blocks.map((block) => (
    <div className="course_block_icon">{block}</div>
    ))}
    </div>
  )
};



export default DisplayCourse;
