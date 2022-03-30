import "../styles/MyCourses.css";
import "../styles/App.css";
import Semesters from '../components/Semesters';
import Overview from '../components/Overview';
import ToggleOverviewButton from '../components/ToggleOverviewButton';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart, faPen } from "@fortawesome/free-solid-svg-icons";

const MyCourses = ({ selectedCourses, setSelectedCourses }) => {
  const [showOverview, setShowOverview] = useState(false);

  return (
    <div>
          <div className="my_courses_header">

              <div className="upper_header">
            <Link to="/" className="upper_header_link">{" "}
            <FontAwesomeIcon className="upper_header_icon" icon={faArrowLeft} />
            Hitta fler kurser{" "}</Link>
          
          <a className="upper_header_link">
            {" "}
            Spara profil{" "}
            <FontAwesomeIcon className="upper_header_icon" icon={faHeart} />
          </a>
        </div>
        <h className="exam_name">
          {" "}
          Min masterexamen{" "}
          <FontAwesomeIcon className="exam_name_icon" icon={faPen} />
        </h>
        <ToggleOverviewButton
          showOverview={showOverview}
          setShowOverview={setShowOverview}
        />
      </div>
      {showOverview ? (
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
