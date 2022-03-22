import "../styles/MyCourses.css"
import DisplayPeriod from '../components/DisplayPeriod';
import SemesterSelector from '../components/SemesterSelector';

import React, { useState } from 'react';



const Semesters = ({ selectedCourses, setSelectedCourses }) => {

    const [semester, setSemester] = useState(7);

    return (
        <>
            <div className='semester_header'>
                <SemesterSelector semester={semester} setSemester={setSemester} />
                <h> Högskolepoäng </h>
            </div>
            <DisplayPeriod courseinfo={selectedCourses} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} semester={semester} />


        </>)
}

export default Semesters;