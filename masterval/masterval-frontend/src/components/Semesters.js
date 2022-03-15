import "../styles/MyCourses.css"
import DisplayPeriod from '../components/DisplayPeriod';
import SemesterSelector from '../components/SemesterSelector';

import React, {useState } from 'react';



const Semesters = ({ selectedCourses, setSelectedCourses }) => {

    const [semester, setSemester] = useState(7);

    return (<div>
        <SemesterSelector semester={semester} setSemester={setSemester} />

        <div className="wrapper-mycourses">
            <DisplayPeriod courseinfo={selectedCourses} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} semester={semester} />
        </div>
       
    </div>)
}

export default Semesters;