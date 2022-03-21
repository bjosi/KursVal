import "../styles/DisplayCourse.css";

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
      {" "}
      &#9747;{" "}
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
