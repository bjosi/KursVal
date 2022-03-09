import "../DisplayCourse.css"


const Btn_addcourse = ({ courseinfo, setSelectedCourses, selectedCourses }) => (


    <button onClick={() => handleSubmit(setSelectedCourses, selectedCourses, courseinfo)}> klicka mig </button>


);

function handleSubmit(setSelectedCourses, selectedCourses, courseinfo) {
    console.log(this.isclicked);
    setSelectedCourses([...selectedCourses, courseinfo]);
  //  console.log(selectedCourses);
   
}

export default Btn_addcourse;