import React, { useState, useEffect } from "react";
import "./CoursesCounter.css";

//Display amout of selected course, -1 to remove oligatory course
const CoursesCounter = ({ selectedProfileCourses }) => {
  return (
    <>
      {selectedProfileCourses.length > 1 ? (
        <div className="circle">
          <p className="text">{selectedProfileCourses.length - 1}</p>
        </div>
      ) : (
        ""
      )}
    </>
  );
};
export default CoursesCounter;
