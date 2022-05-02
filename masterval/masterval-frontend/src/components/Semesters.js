import "../styles/MyCourses.css";
import DisplayPeriod from "../components/DisplayPeriod";
import SemesterSelector from "../components/SemesterSelector";
import ProgressBar from "./ProgressBar";

import React, { useState } from "react";

const Semesters = ({
  selectedCourses,
  setSelectedCourses,
  setSelectedProfileCourses,
    selectedProfileCourses,
    selectedProfileCoursesIsLocalStorage,
}) => {
  const [semester, setSemester] = useState(7);

  let HPPerSemester = 0;

  const coursesInSemester = selectedProfileCourses.filter(
    (course) => course.semester === semester
  );
  // const coursesInSemester = selectedProfileCourses.map((course) => console.log(course.semester));

  coursesInSemester.map((course) => (HPPerSemester += course.coursepoints));
  return (
    <>
      <div className="semester_header">
        <SemesterSelector semester={semester} setSemester={setSemester} />
        <h1> Högskolepoäng </h1>
        <div className="progress_bar_wrapper">
          <ProgressBar progress={HPPerSemester / 30} isSmall={true} />
                  <h2 className="semester_header_text">{HPPerSemester} av 30HP</h2>
        </div>

        {HPPerSemester >= 30 ? (
          <h2 className="semester_header_small_text">
            Grattis, du har valt kurser på helfart för terminen
          </h2>
        ) : (
          <h2 className="semester_header_small_text">
            {" "}
            Du har {30 - HPPerSemester} HP kvar för att läsa på helfart den här
            terminen
          </h2>
        )}
          </div>
          
      <DisplayPeriod
        courseinfo={selectedProfileCourses}
        setSelectedCourses={setSelectedCourses}
        selectedCourses={selectedCourses}
        setSelectedProfileCourses={setSelectedProfileCourses}
        selectedProfileCourses={selectedProfileCourses}
        homePage={false}
              semester={semester}
              selectedProfileCoursesIsLocalStorage={selectedProfileCoursesIsLocalStorage}

      />
    </>
  );
};

export default Semesters;
