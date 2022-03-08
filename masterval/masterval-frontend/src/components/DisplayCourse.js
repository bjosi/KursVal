import "../DisplayCourse.css"


function DisplayCourse(props) {


    return (
    <div class="disp_course">

        <div id="div_l">
            <p class="c_name"> {props.coursename} </p>
            <p class="c_info"> Kurskod: {props.coursecode} </p>
            <p class="c_info"> Termin: {props.semester} </p>
            <p class="c_info"> Termin: {props.semester} </p>
        </div>

        <div id="div_r" >
            <button type="button"></button>
        </div>


        
    </div>)
}

export default DisplayCourse;