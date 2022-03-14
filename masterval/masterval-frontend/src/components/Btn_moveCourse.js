import "../styles/DisplayCourse.css"
import React, { useState } from 'react';
import Popup from './popup.js';


const Btn_moveCourse = ({ courseinfo, setSelectedCourses, selectedCourses }) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    }

    return <div>
        <button className="btn-movecourse"
            onClick={togglePopup}
        > &rarr; </button>
        {isOpen && <Popup
            content={<>
                <b>Design your Popup</b>
                <p></p>

            </>}
            handleClose={togglePopup}
        />}
    </div>

}

//<button className="btn-movecourse" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 	&rarr; </button>

export default Btn_moveCourse;