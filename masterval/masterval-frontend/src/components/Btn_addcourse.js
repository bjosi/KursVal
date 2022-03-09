import "../styles/DisplayCourse.css"


const Btn_addcourse = ({ courseinfo, setSelectedCourses, selectedCourses }) => {
    return(
        <button onClick={() => handleSubmit(setSelectedCourses, selectedCourses, courseinfo)}> lagg till </button>
    )
}

function handleSubmit(setSelectedCourses, selectedCourses, courseinfo) {
    var allCourses = selectedCourses.concat(courseinfo);
    var jsonObject = allCourses.map(JSON.stringify);

    var uniqueSet = new Set(jsonObject);
    var uniqueArray = Array.from(uniqueSet).map(JSON.parse);
    setSelectedCourses(uniqueArray);
    console.log(selectedCourses);
   
}

export default Btn_addcourse;