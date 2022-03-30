import "../styles/DisplayCourse.css"
import React, { useState } from 'react';
import Popup from './popup.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";


const Btn_moveCourse = ({ courseinfo, setSelectedCourses, selectedCourses }) => {
    const [isOpen, setIsOpen] = useState(false);

    let newTerm;

    if (courseinfo.semester == 7) {
        newTerm = 9
    } else {
        newTerm = 7;
    }

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    const handleConfirm = () => {


        setSelectedCourses(
            selectedCourses.map(item =>
                item.coursecode === courseinfo.coursecode
                    ? { ...item, semester: newTerm }
                    : item
            ))



    }


    return <>
        <button className={courseinfo.semester == 8 ? 'btn-movecoursehidden' : "btn-movecourse"}
            onClick={togglePopup}> <FontAwesomeIcon icon={faSquareCaretRight} /> </button>
        {isOpen && <Popup handleClose={togglePopup} handleConfirm={handleConfirm} newTerm={newTerm}/>}
    </>

}



//<button className="btn-movecourse" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 	&rarr; </button>

export default Btn_moveCourse;