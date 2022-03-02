import React, { Component } from 'react';

export default class App extends Component {
    static displayName = App.name;

    constructor(props) {
        super(props);
        this.state = { courseinfo: [], loading: true };
    }

    componentDidMount() {
        this.populateCourseData();
    }

    static rendercourseinfoTable(courseinfo) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Kurskod</th>
                        <th>Kursnamn</th>
                        <th>Termin</th>
                    </tr>
                </thead>
                <tbody>
                    {courseinfo.map(forecast =>
                        <tr key={forecast.courses}>
                            <td>{forecast.kurskod}</td>
                            <td>{forecast.kursnamn}</td>
                            <td>{forecast.termin}</td>
                        </tr>
                    )}
                </tbody>
            </table>
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
        const response = await fetch('kurser');
        const data = await response.json();
        this.setState({ courseinfo: data, loading: false });
    }
}
