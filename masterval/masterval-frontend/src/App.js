import React, { Component } from 'react';
import SearchBar from './components/SearchBar';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { courseinfo: [], loading: true };
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
                            <td>{CourseInfo.period}</td>
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
