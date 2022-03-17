import "../styles/MyCourses.css"
import Semesters from '../components/Semesters';
import Overview from '../components/Overview';
import ToggleOverviewButton from '../components/ToggleOverviewButton';

import React, {useState } from 'react';



const MyCourses = ({ selectedCourses, setSelectedCourses}) => {

    const [showOverview, setShowOverview] = useState(false);

    const handleSubmit = () => {


        const data = {
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue',
        };

        /*
        fetch('/test',
            {
                method: "POST",
                body: data
            });

        fetch('/Home/test', selectedCourses[0])
            .then(function (response) {
                return response;

            });*/
            
                


        /*var request = new XMLHttpRequest();
        request.open('POST', '/my/url', true);
        request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
        request.send(JSON.stringify(data));*/

        /*fetch('/post', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                firstParam: 'yourValue',
                secondParam: 'yourOtherValue',
            })
        })*/

    }

    const useEffect = () => {
        // POST request using fetch inside useEffect React hook
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks POST Request Example' })
        };
        fetch('/MyCourses', requestOptions)
            .then(function (response) {
                if (!response.ok) {
                    // make the promise be rejected if we didn't get a 2xx response
                    const err = new Error("Not 2xx response");
                    err.response = response;
                    throw err;
                } else {
                    // go the desired response
                }
            }).catch(function (err) {
                // some error here
            });
        

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    };

    return (
        <div>
            <button style={{ marginTop: "300px" }} onClick={useEffect()}>Hej</button>
            <ToggleOverviewButton showOverview={showOverview} setShowOverview={setShowOverview} />
            {showOverview ? <Overview selectedCourses= { selectedCourses } setSelectedCourses={setSelectedCourses}/> : <Semesters selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses} />}
        </div>)
}

// {selectedCourses.map(forecast => <DisplayCourse courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} /> )}


export default MyCourses;