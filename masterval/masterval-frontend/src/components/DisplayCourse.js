import "../DisplayCourse.css"
import Btn_addcourse from "./Btn_addcourse";

import React, { Component, useEffect, useState } from 'react';


const DisplayCourse = ({ courseinfo, setSelectedCourses, selectedCourses }) => {
    const [showresult, setShowResults] = React.useState(false);
    const onClick = () => setShowResults(!showresult);

    return(
    <div class="disp_course">

        <div>
            <div id="div_l">
                <p className="c_name"> {courseinfo.coursename} </p>
                <p class="c_info"> {courseinfo.progname} </p>
                <p class="c_info"> {courseinfo.coursepoints} HP </p>
                    <p class="c_info"> {courseinfo.courselevel} </p>
                    {showresult ? <Results courseinfo={courseinfo}/> : null}
            </div>

            <div id="div_r" >
                    <button id="btnShowMore" type="button" onClick={onClick} ></button>
               

            </div>
        </div>
        <div>
            <Btn_addcourse courseinfo={courseinfo} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} />
        </div>
    </div>

)
}


const Results = ({ courseinfo }) => {

    var link = "https://studieinfo.liu.se/kurs/" + courseinfo.coursecode;
    return(<div>
        <p class="c_info"> {courseinfo.coursepoints} HP </p>
        <p class="c_info"> {courseinfo.courselevel} </p>
        <a href={link} target="_blank">Besök kurshemsidan!</a>

    </div>
)
}



export default DisplayCourse;