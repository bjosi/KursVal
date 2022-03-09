import "../styles/DisplayCourse.css"


const Btn_moveCourse = ({ courseinfo, setSelectedCourses, selectedCourses }) => {
    return(<button onClick={() => handleSubmit(setSelectedCourses, selectedCourses, courseinfo)}> flytta mig </button>)
}

function handleSubmit(setSelectedCourses, selectedCourses, courseinfo) {
   

}

export default Btn_moveCourse;