import "../styles/MyCourses.css";
import "../styles/App.css";
import Semesters from "../components/Semesters";
import Overview from "../components/Overview";
import ToggleOverviewButton from "../components/ToggleOverviewButton";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TableMatrix from "../components/Matrix/TableMatrix";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHeart,
  faL,
  faPen,
} from "@fortawesome/free-solid-svg-icons";

const MyCourses = ({ selectedCourses, setSelectedCourses, courses }) => {
  const [showOverview, setShowOverview] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);

  const onSave = () => {
    let data = "";
    console.log(data);

    selectedCourses.map(
      (course) => (data += "," + course.coursecode + "," + course.semester)
    );

    console.log(data);

    //"save/username:minexamen:TNM02:1"

    const username = "usernamebla,minexamen";

    fetch("save/" + username + "/" + data);
  };

  const onDelete = () => {
    const username = "usernamebla,minexamen";

    fetch("delete/" + username);
  };

  return (
    <div>
      <div className="my_courses_header">
        <div className="upper_header">
          <Link to="/" className="upper_header_link">
            {" "}
            <FontAwesomeIcon className="upper_header_icon" icon={faArrowLeft} />
            Hitta fler kurser{" "}
          </Link>

          <button onClick={onSave} className="upper_header_link">
            {" "}
            Spara profil{" "}
            <FontAwesomeIcon className="upper_header_icon" icon={faHeart} />
          </button>

          <button onClick={onDelete} className="upper_header_link">
            {" "}
            ta bort profil{" "}
            <FontAwesomeIcon className="upper_header_icon" icon={faHeart} />
          </button>
        </div>
        <h1 className="exam_name">
          Min masterexamen
          <FontAwesomeIcon className="exam_name_icon" icon={faPen} />
        </h1>
        <ToggleOverviewButton
          showOverview={showOverview}
          setShowOverview={setShowOverview}
          showMatrix={showMatrix}
          setShowMatrix={setShowMatrix}
        />
      </div>
      {showMatrix ? (
        <TableMatrix
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
          courses={courses}
        />
      ) : showOverview ? (
        <Overview
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
        />
      ) : (
        <Semesters
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
        />
      )}
    </div>
  );
};

// {selectedCourses.map(forecast => <DisplayCourse courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} /> )}

export default MyCourses;
