import "../styles/MyCourses.css"
import DisplayPeriod from '../components/DisplayPeriod';

const MyCourses = ({ selectedCourses, setSelectedCourses}) => {


    return (
        <div>
            <SplitInPeriod selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses}/>
        </div>)
}

// {selectedCourses.map(forecast => <DisplayCourse courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} /> )}



const SplitInPeriod = ({ selectedCourses, setSelectedCourses }) => {
    
    return (<div>
        <h1> Termin 7 </h1>
        <div className="wrapper-mycourses">
            <DisplayPeriod courseinfo={selectedCourses} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} semester={7}/>
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


export default MyCourses;