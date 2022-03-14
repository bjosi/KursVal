import "../styles/MyCourses.css"
import Semesters from '../components/Semesters';
import Overview from '../components/Overview';
import ToggleOverviewButton from '../components/ToggleOverviewButton';

import React, {useState } from 'react';



const MyCourses = ({ selectedCourses, setSelectedCourses}) => {

    const [showOverview, setShowOverview] = useState(false);


    return (
        <div>
            <ToggleOverviewButton showOverview={showOverview} setShowOverview={setShowOverview} />
            {showOverview ? <Overview selectedCourses= { selectedCourses } setSelectedCourses={setSelectedCourses}/> : <Semesters selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />}
        </div>)
}

// {selectedCourses.map(forecast => <DisplayCourse courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} /> )}


export default MyCourses;