
import React, { Component, useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import { useState, useEffect } from 'react';
import { render } from 'react-dom';
import DisplayCourse from './components/DisplayCourse';
import "./App.css"


function App() {

    const [state, setState] = useState({ courseinfo: ["hej"], loading: true });
    const [selectedCourses, setSelectedCourses] = useState([]);


    // Getting the storage
//    const retreivedObject = JSON.parse(window.localStorage.getItem('data'))
    //console.log(retreivedObject)



    const [state, setState] = useState({ courseinfo: [], loading: true });
    const [selectedCourses, setSelectedCourses] = React.useState(JSON.parse(localStorage.getItem('myValueInLocalStorage')) || [])

    React.useEffect(() => {
        localStorage.setItem('myValueInLocalStorage', JSON.stringify(selectedCourses));
    }, [selectedCourses]);

    console.log(selectedCourses);

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');


    asyncCall(setState, query);

    //var retreivedObject = JSON.parse(window.localStorage.getItem(courseinfo));
    //console.log(retreivedObject)



    let contents = state.loading
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : rendercourseinfoTable(state.courseinfo, setSelectedCourses, selectedCourses);

    return (
        <div>
            <h1 id="tabelLabel" >Kursval</h1>
            <p>Tabell med kursdata.</p>
            {contents}
        </div>
    );

}


async function asyncCall(setState, query) {
    if (query != null) {
        var response = await fetch("courses/" + query);
    }
    else {
        var response = await fetch("courses");
    }
    const data = await response.json();
    setState({ courseinfo: data, loading: false });
};

function handleSubmit(setSelectedCourses,selectedCourses,courseinfo) {

    setSelectedCourses(courseinfo);
    //console.log(selectedCourses);
    //window.localStorage.setItem('data', JSON.stringify(event.value));
    //const retreivedObject = JSON.parse(window.localStorage.getItem('data'));
    //console.log(retreivedObject);
    //rendercourseinfoTable(event.value);

}

function rendercourseinfoTable(courseinfo,setSelectedCourses,selectedCourses) {

    return (
        <div>
            <SearchBar />
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Kurskod</th>
                        <th>Kursnamn</th>
                        <th>Termin</th>
                        <th>Period</th>
                    </tr>
                </thead>
                <tbody>
                    {courseinfo.map(CourseInfo =>
                        <tr key={CourseInfo.courses}>
                            <td>{CourseInfo.coursecode}</td>
                            <td>{CourseInfo.coursename}</td>
                            <td>{CourseInfo.semester}</td>
                            <td>{CourseInfo.uChosen}</td>
                        </tr>
                    )}
                </tbody>
            </table>
            <form onSubmit={() => handleSubmit(setSelectedCourses, selectedCourses, courseinfo)}> <button type="submit">Copy Text</button> </form >
            <div>selectedCourses[0].coursename</div>
        </div>

            <div class="wrapper">
                <div> </div>
                <div class="left_wrapper">
                    {courseinfo.map(forecast =>
                        DisplayCourse(forecast)
                    )}
                    </div>

                </div>
            <form onSubmit={handleSubmit}> <button type="submit">Copy Text</button> </form >
        </div>
    );
}


export default App;



