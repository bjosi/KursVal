
import React, { Component, useEffect, useState } from 'react';
import SearchHeader from './components/SearchHeader';
import { render } from 'react-dom';
import DisplayCourse from './components/DisplayCourse';
import "./styles/App.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";


function App() {

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

    //console.log(selectedCourses);

    let contents = state.loading
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : rendercourseinfoTable(state.courseinfo, setSelectedCourses, selectedCourses);

    return (

        <div >
            <Router>
                <div class="Footer">
                    <Link to="/MyCourses">Mina kurser</Link>
                    <Link to="/LogIn">Logga in</Link>
                    <Link to="/">Hem</Link>
                </div>
                <Switch>
                    <Route path="/MyCourses">
                        <div>Mina kurser</div>
                    </Route>

                    <Route path="/LogIn">
                        <div>Logga in
                        </div>
                    </Route>
                    <Route path="/">
                        <div>{contents}
                        </div>
                    </Route>
                </Switch>
                
            </Router>
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



function rendercourseinfoTable(courseinfo,setSelectedCourses,selectedCourses) {

    return (
        <div>
            <SearchHeader/>
            <div class="wrapper">
                <div> </div>
                <div class="left_wrapper">
                    {courseinfo.map(forecast => <DisplayCourse courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses}  />
                    )}
                    </div>
                </div>

            </div>
    );
}
// <form onSubmit={() => handleSubmit(setSelectedCourses, selectedCourses, courseinfo)}> <button type="submit">Copy Text</button> </form >

//<div> {selectedCourses.map(forecast => DisplayCourse(forecast))}</div>


export default App;



