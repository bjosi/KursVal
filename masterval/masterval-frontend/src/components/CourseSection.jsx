import DisplayCourse from "./DisplayCourse"; 
import React from "react";

const CourseSection = ({courses, courseinfo, setSelectedCourses, selectedCourses}) => {

    return (
        <div className="wrapper">
            <div className="left_wrapper">
                {courseinfo.map(courses => <DisplayCourse key={courses.Id} courseinfo={courses} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} />
            )}
        </div>
        </div>
    )
}

export default CourseSection; 