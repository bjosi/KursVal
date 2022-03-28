import "../styles/DisplayCourse.css";

const Btn_addcourse = ({ courseinfo, setSelectedCourses, selectedCourses }) => {
  return (
    <button
      onClick={() =>
        handleSubmit(setSelectedCourses, selectedCourses, courseinfo)
      }
    >
      {" "}
      lagg till{" "}
    </button>
  );
};

function handleSubmit(setSelectedCourses, selectedCourses, courseinfo) {
  console.log(courseinfo);
  console.log(selectedCourses);
  var allCourses = selectedCourses.concat(courseinfo);
  var jsonObject = allCourses.map(JSON.stringify);

  var uniqueSet = new Set(jsonObject);
  var uniqueArray = Array.from(uniqueSet).map(JSON.parse);
  uniqueArray[uniqueArray.length - 1].choosensemester = courseinfo.semester;
  console.log(uniqueArray);
  setSelectedCourses(uniqueArray);
}

export default Btn_addcourse;
