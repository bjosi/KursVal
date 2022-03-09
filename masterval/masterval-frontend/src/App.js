
import React, { Component, useEffect, useState } from 'react';
import SearchHeader from './components/SearchHeader';
import { render } from 'react-dom';
import DisplayCourse from './components/DisplayCourse';
import "./styles/App.css"


function App() {



    const [state, setState] = useState({ courseinfo: [], loading: true });
    const [selectedCourses, setSelectedCourses] = React.useState(JSON.parse(localStorage.getItem('myValueInLocalStorage')) || [])

    React.useEffect(() => {
        localStorage.setItem('myValueInLocalStorage', JSON.stringify(selectedCourses));
    }, [selectedCourses]);

    //console.log(selectedCourses);

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');


    asyncCall(setState, query);

    //var retreivedObject = JSON.parse(window.localStorage.getItem(courseinfo));
    //console.log(retreivedObject)

    //console.log(selectedCourses);

    let contents = state.loading
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : rendercourseinfoTable(state.courseinfo, setSelectedCourses, selectedCourses);

    return (
        <div>{contents}
            {console.log(selectedCourses)}
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
    
    setSelectedCourses(selectedCourses.concat(courseinfo));


}

function rendercourseinfoTable(courseinfo,setSelectedCourses,selectedCourses) {

    return (
        <div>
            <SearchHeader/>
            <div class="wrapper">
                <div> </div>
                <div class="left_wrapper">
                    {courseinfo.map(forecast =>
                        DisplayCourse(forecast)
                    )}
                    </div>
                </div>

            <form onSubmit={() => handleSubmit(setSelectedCourses, selectedCourses, courseinfo)}> <button type="submit">Copy Text</button> </form >
            <div> {selectedCourses.map(forecast => DisplayCourse(forecast))}</div>
        </div>
    );
}


export default App;



