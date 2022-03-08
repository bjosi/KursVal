
import React, { Component, useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import DisplayCourse from './components/DisplayCourse';
import "./App.css"


function App() {

    const [state, setState] = useState({ courseinfo: ["hej"], loading: true });
    const [selectedCourses, setSelectedCourses] = useState([]);


    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');


    asyncCall(setState, query);

    let contents = state.loading
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : rendercourseinfoTable(state.courseinfo);

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

function handleSubmit() {
    console.log("tjena");
}

function rendercourseinfoTable(courseinfo) {

    return (
        <div>
            <div>
                <SearchBar />

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



