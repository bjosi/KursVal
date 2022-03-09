import "../styles/MyCourses.css"
import DisplayCourse from '../components/DisplayCourse';

const MyCourses = ({ selectedCourses, setSelectedCourses}) => {


    return (
        <div>
            <SplitInPeriod selectedCourses={selectedCourses} setSelectedCourses={setSelectedCourses}/>
        </div>)
}

// {selectedCourses.map(forecast => <DisplayCourse courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} /> )}



const SplitInPeriod = ({ selectedCourses, setSelectedCourses }) => {

    const firstPeriod = selectedCourses.filter((item) => item.period == 1);
    const secondPeriod = selectedCourses.filter((item) => item.period == 2);

    return (
        <div>
            {firstPeriod.length !== 0 ? <h1> 1a Period </h1> : null}

            {firstPeriod.map(forecast => <DisplayCourse courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} />
            )}
            {secondPeriod.length !== 0 ? <h1> 2a Period </h1> : null}

            {secondPeriod.map(forecast => <DisplayCourse courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} />
            )}
      
    
        </div>)
}


export default MyCourses;