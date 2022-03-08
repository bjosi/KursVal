import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import { useState } from 'react';
import { render } from 'react-dom';




function App() {

    //const selectedCourses = [{ coursename: 'foo' }, { coursename: 'foo'}];

    // Saving to storage
   //window.localStorage.setItem('data', JSON.stringify(selectedCourses))

    // Getting the storage
//    const retreivedObject = JSON.parse(window.localStorage.getItem('data'))
    //console.log(retreivedObject)



    const [state, setState] = useState({ courseinfo: [], loading: true });
    //const [selectedCourses, setSelectedCourses] = useState([]);

    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');


    asyncCall(setState, query);

    var retreivedObject = JSON.parse(window.localStorage.getItem(courseinfo));
    console.log(retreivedObject)



    let contents = state.loading
        ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
        : rendercourseinfoTable(state.courseinfo, retreivedObject);

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

function handleSubmit(event) {

    console.log()
    //window.localStorage.setItem('data', JSON.stringify(event.value));
    //const retreivedObject = JSON.parse(window.localStorage.getItem('data'));
    //console.log(retreivedObject);

}

function rendercourseinfoTable(courseinfo, retrievedObject) {


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
            <form onSubmit={handleSubmit}> <button type="submit" value={courseinfo}>Copy Text</button> </form >
            <div>{retrievedObject[0].coursename}</div>
        </div>

    );
}



/*
export default class App extends Component {
    static displayName = App.name;
    //static course_list = useState([]);

    constructor(props) {
        super(props);
        this.state = { courseinfo: [], loading: true };
        //this.state = { course_list: [] }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    //filterPosts(posts, query) {
    //    if (!query) {
    //        return posts;
    //    }

    //    return posts.filter((post) => {
    //        const postName = post.name.toLowerCase();
    //        return postName.includes(query);
    //    });
    //}

    getvalue() {
        console.log("hejGet");
        return this.state.value;

    }

    handleChange() {
        console.log("hejChange");
    }

    handleSubmit() {
        console.log("hejSub");
    }

    componentDidMount() {
        this.populateCourseData();
    }

    static rendercourseinfoTable(courseinfo) {
        return (
            <div>
                <SearchBar/>
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Termin</th>
                        <th>Period</th>
                        <th>Kursblock</th>
                        <th>Kurskod</th>
                        <th>Kursnamn</th>
                        <th>Kursnivå</th>
                        <th>IUA-matris uppfyllda</th>
                    </tr>
                </thead>
                <tbody>
                    {courseinfo.map(CourseInfo =>
                        <tr key={CourseInfo.courses}>
                            <td>{CourseInfo.semester}</td>
                            <td>{CourseInfo.period}</td>
                            <td>{CourseInfo.courseblock}</td>
                            <td>{CourseInfo.coursecode}</td>
                            <td>{CourseInfo.coursename}</td>
                            <td>{CourseInfo.courselevel}</td>
                            <td>{CourseInfo.uChosen}</td>
                        </tr>
                    )}
                </tbody>
                </table>
            </div>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
            : App.rendercourseinfoTable(this.state.courseinfo);

        return (
            <div>
                <h1 id="tabelLabel" >Kursval</h1>
                <p>Tabell med kursdata.</p>
                {contents}
            </div>
        );
    }

    async populateCourseData() {

        const { search } = window.location;
        const query = new URLSearchParams(search).get('s');
        //console.log(query);
        
        var response;
        //var filteredPosts;
        if (query != null) {
            //query = query.toLowerCase();
            response = await fetch("courses/"+query);
        }
        else {
            response = await fetch("courses");
        
        }
        const data = await response.json();
        console.log(data);

        this.setState({ courseinfo: data, loading: false });
        
        
    }
}
*/
export default App;
