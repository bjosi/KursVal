import "../styles/DisplayCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";

const Btn_addcourse = ({ courseinfo, setSelectedCourses, selectedCourses}) => {
    function handleSubmit(setSelectedCourses, selectedCourses, courseinfo) {
        var myFilter = selectedCourses.filter(
            (item) => item.coursecode !== courseinfo.coursecode
        );
        if (!myFilter.includes(courseinfo)) {
            var allCourses = myFilter.concat(courseinfo);
            var uniqueSet = new Set(allCourses);
            var uniqueArray = Array.from(uniqueSet);
            console.log(uniqueArray);
            setSelectedCourses(uniqueArray);
        }


        
    }

  return (
    <button
      onClick={() =>
        handleSubmit(setSelectedCourses, selectedCourses, courseinfo)
      }
    >
      <FontAwesomeIcon className="add_course_icon " icon={faSquarePlus} />
    </button>
  );
};



export default Btn_addcourse;
