import "../styles/DisplayCourse.css"
import { faSquarePlus} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Btn_addcourse = ({ courseinfo, setSelectedCourses, selectedCourses }) => {
    return(
        <button onClick={() => handleSubmit(setSelectedCourses, selectedCourses, courseinfo)}> <FontAwesomeIcon className="add_course_icon" icon={faSquarePlus}/> </button>
    )
}

function handleSubmit(setSelectedCourses, selectedCourses, courseinfo) {
    var allCourses = selectedCourses.concat(courseinfo);
    var jsonObject = allCourses.map(JSON.stringify);

    var uniqueSet = new Set(jsonObject);
    var uniqueArray = Array.from(uniqueSet).map(JSON.parse);
    uniqueArray[uniqueArray.length - 1].choosensemester = courseinfo.semester;
    console.log(uniqueArray);
    setSelectedCourses(uniqueArray);
}

export default Btn_addcourse;