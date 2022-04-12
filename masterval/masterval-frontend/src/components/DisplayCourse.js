import "../styles/DisplayCourse.css";
import Btn_addcourse from "./Btn_addcourse";
import Btn_removeCourse from "./Btn_removeCourse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn_moveCourse from "./Btn_moveCourse";
import ButtonAddRemoveCourse from "./ButtonAddRemoveCourse";

import React, { Component, useEffect, useState } from "react";
import {
  faAngleDown,
  faAngleUp,
  faCircleHalfStroke,
  faCircle,
  faGraduationCap,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";

const DisplayCourse = ({
  courseinfo,
  setSelectedCourses,
  selectedCourses,
  homePage,
}) => {
  const [showresult, setShowResults] = useState(false);

  const [showAddButton, setShowAddButton] = useState(
    !selectedCourses.includes(courseinfo)
  );

  useEffect(() => {
    setShowAddButton(!selectedCourses.includes(courseinfo));
  });

  const onClick = () => setShowResults(!showresult);

  return (
    <>
      <div className="course_card">
        <div className="top">
          <div className="div_l">
            <div className="title_container">
              <p className="c_title"> {courseinfo.coursename} </p>
              <ShowBlockOfCourse courseinfo={courseinfo}></ShowBlockOfCourse>
            </div>

            <div className="c_info_container">
              <FontAwesomeIcon className="c_info_icon" icon={faGraduationCap} />
              <p className="c_info"> {courseinfo.progname} </p>
            </div>
            <div className="c_info_container">
              <FontAwesomeIcon className="c_info_icon" icon={faCalendar} />
              <p className="c_info"> Termin {courseinfo.semester} </p>
            </div>
            <div className="c_info_container">
              <FontAwesomeIcon className="c_info_icon" icon={faGraduationCap} />
              <p className="c_info"> {courseinfo.courselevel} </p>
            </div>
            {showresult ? <Results courseinfo={courseinfo} /> : null}
          </div>
          <div className="div_r">
            {homePage ? (
              <ButtonAddRemoveCourse
                courseinfo={courseinfo}
                setSelectedCourses={setSelectedCourses}
                selectedCourses={selectedCourses}
                showAddButton={showAddButton}
              />
            ) : (
              <div className="btn-displaycourse">
                <Btn_moveCourse
                  courseinfo={courseinfo}
                  setSelectedCourses={setSelectedCourses}
                  selectedCourses={selectedCourses}
                />
                <ButtonAddRemoveCourse
                  courseinfo={courseinfo}
                  setSelectedCourses={setSelectedCourses}
                  selectedCourses={selectedCourses}
                  showAddButton={showAddButton}
                />
              </div>
            )}

            <ShowPaseOfCourse courseinfo={courseinfo} />
          </div>
        </div>
        <span id="button_show_more" type="button" onClick={onClick}>
          {showresult ? (
            <FontAwesomeIcon className="icon_show_more" icon={faAngleUp} />
          ) : (
            <FontAwesomeIcon className="icon_show_more" icon={faAngleDown} />
          )}
        </span>
      </div>
    </>
  );
};

//"Show more" - information
const Results = ({ courseinfo }) => {
  const link = "https://studieinfo.liu.se/kurs/" + courseinfo.coursecode;
  return (
    <div>
      <p className="c_info"> {courseinfo.coursepoints} HP </p>
      <p className="c_info"> Kurskod: {courseinfo.coursecode} </p>
      <a
        href={link}
        className="course_website"
        target="_blank"
        rel="noreferrer"
      >
        Besök kurshemsidan
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
  return (
    <div className="pase_container">
      {paseIsFull ? (
        <p className="pase_text">Helfart</p>
      ) : (
        <p className="pase_text">Halvfart</p>
      )}{" "}
      {paseIsFull ? (
        <FontAwesomeIcon className="pase_icon_half" icon={faCircle} />
      ) : (
        <FontAwesomeIcon className="pase_icon" icon={faCircleHalfStroke} />
      )}
    </div>
  );
};

const ShowBlockOfCourse = ({ courseinfo }) => {
  let blocks = courseinfo.courseblock.split(",");

  return (
    <div>
      {blocks.map((block, i) => (
        <div key={courseinfo.Id} className="course_block_icon">
          {block}
        </div>
      ))}
    </div>
  );
};

/*{
    homePage ? <> {!selectedCourses.includes(courseinfo) ?
        (<Btn_addcourse
            courseinfo={courseinfo}
            setSelectedCourses={setSelectedCourses}
            selectedCourses={selectedCourses}
        />) : <Btn_removeCourse
            courseinfo={courseinfo}
            setSelectedCourses={setSelectedCourses}
            selectedCourses={selectedCourses}
        />
    }</> : (
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
    )
}
*/

export default DisplayCourse;
