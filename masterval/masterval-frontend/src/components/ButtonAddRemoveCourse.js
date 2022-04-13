import "../styles/DisplayCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState,useEffect } from 'react';


const ButtonAddRemoveCourse = ({
    courseinfo,
    setSelectedCourses,
    selectedCourses,
    setSelectedProfileCourses,
    selectedProfileCourses,
    showAddButton,
    setShowAddButton,
    homePage
    
}) => {
   
    function handleSubmit(clickedobjekt, setSelectedCourses, selectedCourses, setSelectedProfileCourses, selectedProfileCourses) {

        const isLocalStorage = JSON.stringify(selectedCourses) == JSON.stringify(selectedProfileCourses);

        console.log(isLocalStorage);
        console.log(homePage);

        if (homePage) {
            if (showAddButton) {
                var myFilter = selectedProfileCourses.filter(
                    (item) => item.coursecode !== courseinfo.coursecode
                );
                if (!myFilter.includes(courseinfo)) {
                    var allCourses = myFilter.concat(courseinfo);
                    var uniqueSet = new Set(allCourses);
                    var uniqueArray = Array.from(uniqueSet);
                    setShowAddButton(false);

                    if (isLocalStorage) {
                        setSelectedCourses(uniqueArray);
                        setSelectedProfileCourses(uniqueArray)
                    } else {
                        setSelectedProfileCourses(uniqueArray);
                    }
                }

            } else {
                const newList = selectedCourses.filter(
                    (item) => item.coursecode !== clickedobjekt.coursecode
                );
                setShowAddButton(true);
                if (isLocalStorage) {
                    setSelectedCourses(newList);
                    setSelectedProfileCourses(newList)
                } else {
                    setSelectedProfileCourses(newList)

                }
            }

        } else {

            
            if (isLocalStorage) {

                const newList = selectedCourses.filter(
                    (item) => item.coursecode !== clickedobjekt.coursecode
                );
                setSelectedCourses(newList);
                setSelectedProfileCourses(newList)
            } else {
                const newList = selectedProfileCourses.filter(
                    (item) => item.coursecode !== clickedobjekt.coursecode
                );
                setSelectedProfileCourses(newList)

            }
        }


    }







    return (
        <button
            onClick={() =>
                handleSubmit(courseinfo, setSelectedCourses, selectedCourses, setSelectedProfileCourses, selectedProfileCourses)
            }
        >
            <FontAwesomeIcon className={showAddButton ? 'add_course_icon' : 'remove_course_icon'} icon={showAddButton ? faSquarePlus : faSquareXmark
} />
        </button>
    );
};


export default ButtonAddRemoveCourse;
