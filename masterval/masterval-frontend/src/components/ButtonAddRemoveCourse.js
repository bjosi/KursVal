import "../styles/DisplayCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from 'react';


const ButtonAddRemoveCourse = ({
    courseinfo,
    setSelectedCourses,
    selectedCourses,
    showAddButton
}) => {



    function handleSubmit(clickedobjekt, setSelectedCourses, selectedCourses, showAddButton) {
        if (showAddButton) {
            var myFilter = selectedCourses.filter(
                (item) => item.coursecode !== courseinfo.coursecode
            );
            if (!myFilter.includes(courseinfo)) {
                var allCourses = myFilter.concat(courseinfo);
                var uniqueSet = new Set(allCourses);
                var uniqueArray = Array.from(uniqueSet);
                console.log(uniqueArray);
                setSelectedCourses(uniqueArray);
            }

        } else {
            const newList = selectedCourses.filter(
                (item) => item.coursecode !== clickedobjekt.coursecode
            );

            setSelectedCourses(newList);
        }


    }







    return (
        <button
            onClick={() =>
                handleSubmit(courseinfo, setSelectedCourses, selectedCourses, showAddButton)
            }
        >
            <FontAwesomeIcon className={showAddButton ? 'add_course_icon' : 'remove_course_icon'} icon={showAddButton ? faSquarePlus : faSquareXmark
} />
        </button>
    );
};


export default ButtonAddRemoveCourse;
