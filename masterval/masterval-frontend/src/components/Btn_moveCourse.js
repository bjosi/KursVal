import "../styles/DisplayCourse.css"
import React, { useState } from 'react';
import Popup from './popup.js';


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

        console.log("hh");

        console.log(selectedCourses);

    }

    return <div>
        <button className="btn-movecourse" onClick={togglePopup}> &rarr; </button>
        {isOpen && <Popup handleClose={togglePopup} handleConfirm={handleConfirm} newTerm={newTerm}/>}
    </div>

}



//<button className="btn-movecourse" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 	&rarr; </button>

export default Btn_moveCourse;