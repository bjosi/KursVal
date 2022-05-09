import "../styles/DisplayCourse.css";
import Btn_addcourse from "./Btn_addcourse";
import Btn_removeCourse from "./Btn_removeCourse";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Btn_moveCourse from "./Btn_moveCourse";
import ButtonAddRemoveCourse from "./ButtonAddRemoveCourse";

import React, { useEffect, useState } from "react";
import {
  faAngleDown,
  faAngleUp,
  faCircleHalfStroke,
  faCircle,
  faSignal,
  faBarcode,
  faBookOpen,
  faLocationDot,
  faWindowRestore,
  faDatabase,
  faTimeline,
} from "@fortawesome/free-solid-svg-icons";

const DisplayCourse = ({
  courseinfo,
  setSelectedCourses,
  selectedCourses,
  setSelectedProfileCourses,
  selectedProfileCourses,
  homePage,
  selectedProfileCoursesIsLocalStorage,
}) => {
  const [showresult, setShowResults] = useState(false);

  const [ismandatory, setismandatory] = useState(false);

  const [showAddButton, setShowAddButton] = useState(
    selectedProfileCourses.filter(
      (course) => course.coursecode == courseinfo.coursecode
    ).length == 0
  );

  // Necessary to update the showAddButton state when searching for courses => courseinfo changes
  useEffect(() => {
    setShowAddButton(
      selectedProfileCourses.filter(
        (course) => course.coursecode == courseinfo.coursecode
      ).length == 0
    );
  }, [courseinfo]);

  const showbuttons = () => {
    if (homePage) {
      if (courseinfo.coursecode === "TNM107") {
        return <h2> Obligatorisk kurs </h2>;
      } else {
        return (
          <ButtonAddRemoveCourse
            courseinfo={courseinfo}
            setSelectedCourses={setSelectedCourses}
            selectedCourses={selectedCourses}
            showAddButton={showAddButton}
            setShowAddButton={setShowAddButton}
            homePage={homePage}
            setSelectedProfileCourses={setSelectedProfileCourses}
            selectedProfileCourses={selectedProfileCourses}
          />
        );
      }
    } else {
      if (courseinfo.coursecode === "TNM107") {
        return (
          <div className="btn-displaycourse">
            <Btn_moveCourse
              courseinfo={courseinfo}
              setSelectedCourses={setSelectedCourses}
              selectedCourses={selectedCourses}
              setSelectedProfileCourses={setSelectedProfileCourses}
              selectedProfileCourses={selectedProfileCourses}
              selectedProfileCoursesIsLocalStorage={
                selectedProfileCoursesIsLocalStorage
              }
            />
          </div>
        );
      } else {
        return (
          <div className="btn-displaycourse">
            <Btn_moveCourse
              courseinfo={courseinfo}
              setSelectedCourses={setSelectedCourses}
              selectedCourses={selectedCourses}
              setSelectedProfileCourses={setSelectedProfileCourses}
              selectedProfileCourses={selectedProfileCourses}
              selectedProfileCoursesIsLocalStorage={
                selectedProfileCoursesIsLocalStorage
              }
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
        );
      }
    }
  };

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
              <MySvg className="c_info_icon" />
              <p className="c_info">
                {courseinfo.semester === 8 ? (
                  "Vårtermin, åk 4"
                ) : (
                  <>
                    {courseinfo.semester === 7
                      ? "Hösttermin, åk 4"
                      : "Hösttermin, åk 5"}
                  </>
                )}
              </p>
            </div>

            <div className="c_info_container">
              <FontAwesomeIcon className="c_info_icon" icon={faTimeline} />
              <p className="c_info"> Period {courseinfo.period} </p>
            </div>

            <div className="c_info_container">
              <FontAwesomeIcon className="c_info_icon" icon={faSignal} />
              <p className="c_info"> {courseinfo.courselevel} </p>
            </div>

            <div className="c_info_container">
              <FontAwesomeIcon className="c_info_icon" icon={faBarcode} />
              <p className="c_info"> {courseinfo.coursecode} </p>
            </div>
            {showresult ? <Results courseinfo={courseinfo} /> : null}
          </div>

          <div className="div_r">
            {showbuttons()}

            <ShowPaseOfCourse courseinfo={courseinfo} />
          </div>
        </div>
        <span id="button_show_more" type="button">
          {showresult ? (
            <FontAwesomeIcon
              className="icon_show_more"
              icon={faAngleUp}
              onClick={onClick}
            />
          ) : (
            <FontAwesomeIcon
              className="icon_show_more"
              icon={faAngleDown}
              onClick={onClick}
            />
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
        <p className="c_info">
          {courseinfo.area === "" ? "-" : courseinfo.area}
        </p>
      </div>
      <div className="c_info_container">
        <FontAwesomeIcon className="c_info_icon" icon={faDatabase} />

        <p className="c_info"> {courseinfo.coursepoints} HP </p>
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
          Gå till kursplanen
        </a>{" "}
      </div>
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

export const CalendarIcon = () => {
  return (
    <svg
      style={{ width: "inherit", height: "inherit" }}
      version="1.1"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      width="10%"
    >
      <path
        strokeWidth="2"
        d="M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"
      />
    </svg>
  );
};

const MySvg = (props) => {
  return (
    // With Styling
    <div
      style={{
        width: "20",
        height: "20",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="c_info_icon"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        fill="currentColor"
        className="bi bi-calendar"
        viewBox="0 0 16 16"
      >
        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
      </svg>
    </div>
  );
};

export default DisplayCourse;
