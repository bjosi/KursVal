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
    faBarcode,
    faBookOpen,
    faLocationDot,
    faWindowRestore
} from "@fortawesome/free-solid-svg-icons";

const DisplayCourse = ({
  courseinfo,
  setSelectedCourses,
    selectedCourses,
    setSelectedProfileCourses,
    selectedProfileCourses,
    homePage,
    
}) => {
    const [showresult, setShowResults] = useState(false);
    const [showAddButton, setShowAddButton] = useState(selectedProfileCourses.filter((course) => course.coursename == courseinfo.coursename && course.semester == courseinfo.semester).length == 0);
   
    // Necessary to update the showAddButton state when searching for courses => courseinfo changes
    useEffect(() => {
        setShowAddButton(selectedProfileCourses.filter((course) => course.coursename == courseinfo.coursename && course.semester == courseinfo.semester).length == 0)
    }, [courseinfo])

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
                          <FontAwesomeIcon className="c_info_icon" icon={faBarcode} />
                          <p className="c_info"> {courseinfo.coursecode} </p>
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

                      {homePage ? <ButtonAddRemoveCourse
                          courseinfo={courseinfo}
                          setSelectedCourses={setSelectedCourses}
                          selectedCourses={selectedCourses}
                          showAddButton={showAddButton}
                          setShowAddButton={setShowAddButton}
                          homePage={homePage}
                          setSelectedProfileCourses={setSelectedProfileCourses}
                          selectedProfileCourses={selectedProfileCourses}
                          
                      /> : (
                          <div className="btn-displaycourse">
                              <Btn_moveCourse
                                  courseinfo={courseinfo}
                                  setSelectedCourses={setSelectedCourses}
                                      selectedCourses={selectedCourses}
                                      setSelectedProfileCourses={setSelectedProfileCourses}
                                      selectedProfileCourses={selectedProfileCourses}
                              />
                                  <ButtonAddRemoveCourse
                                      courseinfo={courseinfo}
                                      setSelectedCourses={setSelectedCourses}
                                      selectedCourses={selectedCourses}
                                      showAddButton={false}
                                      setShowAddButton={setShowAddButton}
                                      homePage={homePage}
                                      setSelectedProfileCourses={setSelectedProfileCourses}
                                      selectedProfileCourses={selectedProfileCourses}
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

          <div className="c_info_container">
              <FontAwesomeIcon className="c_info_icon" icon={faBookOpen} />
              <p className="c_info"> {courseinfo.area} </p>
          </div>


          <div className="c_info_container">
              <FontAwesomeIcon className="c_info_icon" icon={faLocationDot} />
              <p className="c_info"> {courseinfo.place} </p>
          </div>


          <div className="c_info_container">
              <FontAwesomeIcon className="c_info_icon" icon={faWindowRestore} />

              <a
                  href={link}
                  className="course_website"
                  target="_blank"
                  rel="noreferrer"
              >
                  Besök kurshemsidan
              </a>          </div>


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
      {blocks.map((block, index) => (
        <div key={index} className="course_block_icon">
          {block}
        </div>
      ))}
    </div>
  );
};



export default DisplayCourse;
