import "../styles/DisplayCourse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareXmark } from "@fortawesome/free-solid-svg-icons";

const Btn_removeCourse = ({
  courseinfo,
  setSelectedCourses,
  selectedCourses,
}) => {
  return (
    <button
      className="btn-removecourse"
      onClick={() =>
        handleSubmit(courseinfo, setSelectedCourses, selectedCourses)
      }
    >
          <FontAwesomeIcon icon={faSquareXmark} />
    </button>
  );
};

function handleSubmit(clickedobjekt, setSelectedCourses, selectedCourses) {
  const newList = selectedCourses.filter(
    (item) => item.coursecode !== clickedobjekt.coursecode
  );

  setSelectedCourses(newList);
}

export default Btn_removeCourse;
