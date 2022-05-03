import "../styles/DisplayCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState,useEffect } from 'react';
import SlideInCard from "../components/SlideInCard/SlideInCard";


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
    const[slideInCard, setSlideInCard] = useState(false);

    function handleSubmit(clickedobjekt, setSelectedCourses, selectedCourses, setSelectedProfileCourses, selectedProfileCourses) {    
        const isLocalStorage = JSON.stringify(selectedCourses) == JSON.stringify(selectedProfileCourses);

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

                    setSelectedProfileCourses(uniqueArray);

                    if (isLocalStorage) {
                        setSelectedCourses(uniqueArray);
                    }
                }

            } else {
                const newList = selectedProfileCourses.filter(
                    (item) => item.coursecode !== clickedobjekt.coursecode
                );
                setShowAddButton(true);

                setSelectedProfileCourses(newList)

                if (isLocalStorage) {
                    setSelectedCourses(newList);
                } 
            }
        } else {

            const newList = selectedProfileCourses.filter(
                (item) => item.coursecode !== clickedobjekt.coursecode
            );

            setSelectedProfileCourses(newList)

            if (isLocalStorage) {
                setSelectedCourses(newList);
            } 
        }
        setSlideInCard(true);
    }


    return (
        <>
        {showAddButton ? <SlideInCard setSlideInCard={setSlideInCard} slideInCard={slideInCard}>Kursen borttagen</SlideInCard> : <SlideInCard setSlideInCard={setSlideInCard} slideInCard={slideInCard}>Kursen tillagd</SlideInCard>}
        
            <button className=" btn-movecourse"
            onClick={() =>
                handleSubmit(courseinfo, setSelectedCourses, selectedCourses, setSelectedProfileCourses, selectedProfileCourses)
            }
        >
            <FontAwesomeIcon className={showAddButton ? 'add_course_icon' : 'remove_course_icon'} icon={showAddButton ? faSquarePlus : faSquareXmark
} />
        </button>
        </>
    );
};


export default ButtonAddRemoveCourse;
