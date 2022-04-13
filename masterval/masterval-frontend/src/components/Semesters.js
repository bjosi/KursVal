import "../styles/MyCourses.css";
import DisplayPeriod from "../components/DisplayPeriod";
import SemesterSelector from "../components/SemesterSelector";
import ProgressBar from "./ProgressBar";

import React, { useState } from "react";

const Semesters = ({ selectedCourses, setSelectedCourses }) => {
  const [semester, setSemester] = useState(7);

  let HPPerSemester = 0;

  const coursesInSemester = selectedCourses.filter(
    (course) => course.semester == semester
  );
  coursesInSemester.map((course) => (HPPerSemester += course.coursepoints));
  console.log(HPPerSemester);
  return (
    <>
      <div className="semester_header">
        <SemesterSelector semester={semester} setSemester={setSemester} />
        <h1> Högskolepoäng </h1>
        <div className="progress_bar_wrapper">
          <ProgressBar progress={HPPerSemester / 30} isSmall={true} />
          <h4>{HPPerSemester} av 30HP</h4>
        </div>

        {HPPerSemester >= 30 ? (
          <h4 className="semester_header_small_text">
            Grattis, du har valt kurser på helfart för terminen
          </h4>
        ) : (
          <h4 className="semester_header_small_text">
            {" "}
            Du har {30 - HPPerSemester} HP kvar för att läsa på helfart den här
            terminen
          </h4>
        )}
      </div>
      <DisplayPeriod
        courseinfo={selectedCourses}
        setSelectedCourses={setSelectedCourses}
        selectedCourses={selectedCourses}
        homePage={false}
        semester={semester}
      />
    </>
  );
};

export default Semesters;
