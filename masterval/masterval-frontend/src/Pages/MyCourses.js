import "../styles/MyCourses.css"
import DisplayCourse from '../components/DisplayCourse';

const MyCourses = ({ selectedCourses, setSelectedCourses}) => {


    return (
        <div>
            {selectedCourses.map(forecast => <DisplayCourse courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} />
            )}

        </div>)
}



export default MyCourses;