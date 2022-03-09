import DisplayCourse from "./DisplayCourse"; 
import React from "react";

const CourseSection = ({courses, courseinfo, setSelectedCourses, selectedCourses}) => {

    return (
        <div class="wrapper">
        <div class="left_wrapper">
            {courseinfo.map(courses => <DisplayCourse courseinfo={courses} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} />
            )}
        </div>
        </div>
    )
}

export default CourseSection; 