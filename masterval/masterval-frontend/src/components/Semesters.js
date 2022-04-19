import "../styles/MyCourses.css";
import DisplayPeriod from "../components/DisplayPeriod";
import SemesterSelector from "../components/SemesterSelector";
import ProgressBar from "./ProgressBar";

import React, { useState } from "react";

const Semesters = ({ selectedCourses, setSelectedCourses, setSelectedProfileCourses, selectedProfileCourses }) => {

    const [semester, setSemester] = useState(7);

    let HPPerSemester = 0;
    console.log(selectedProfileCourses);

    const coursesInSemester = selectedProfileCourses.filter((course) => course.semester === semester);
   // const coursesInSemester = selectedProfileCourses.map((course) => console.log(course.semester));

    coursesInSemester.map((course) => HPPerSemester += course.coursepoints);
    return (
        <>
            <div className='semester_header'>
                <SemesterSelector semester={semester} setSemester={setSemester} />
                <h> Högskolepoäng </h>
                <div className='progress_bar_wrapper'>
                    <ProgressBar progress={HPPerSemester / 30} isSmall={true} />
                    <h>{HPPerSemester} av 30HP</h>
                </div>

                {HPPerSemester >= 30 ? <h className='semester_header_small_text'>Grattis, du har valt kurser på helfart för terminen</h> : <h className='semester_header_small_text'> Du har {30 - HPPerSemester} HP kvar för att läsa på helfart den här terminen</h>}
                
            </div>
            <DisplayPeriod  courseinfo={selectedProfileCourses} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} setSelectedProfileCourses={setSelectedProfileCourses} selectedProfileCourses={selectedProfileCourses}homePage={false} semester={semester} />


        </>)
}

export default Semesters;

