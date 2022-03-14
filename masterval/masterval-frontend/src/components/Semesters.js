import "../styles/MyCourses.css"
import DisplayPeriod from '../components/DisplayPeriod';



const Semesters = ({ selectedCourses, setSelectedCourses }) => {

    return (<div>
        <h1> Termin 7 </h1>
        <div className="wrapper-mycourses">
            <DisplayPeriod courseinfo={selectedCourses} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} semester={7} />
        </div>
        <h1> Termin 8 </h1>
        <div className="wrapper-mycourses">
            <DisplayPeriod courseinfo={selectedCourses} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} semester={8} />
        </div>

        <h1> Termin 9 </h1>
        <div className="wrapper-mycourses">

            <DisplayPeriod courseinfo={selectedCourses} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} semester={9} />


        </div>
    </div>)
}

export default Semesters;