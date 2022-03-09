import "../styles/DisplayCourse.css"


function DisplayCourse(props) {


    return (
    <div class="disp_course">

            <div>
        <div id="div_l">
            <p class="c_name"> {props.coursename} </p>
            <p class="c_info"> {props.progname} </p>
            <p class="c_info"> {props.coursepoints} HP </p>
                <p class="c_info"> {props.courselevel} </p>
        </div>

        <div id="div_r" >
            <button type="button"></button>
        </div>
            </div>

            <div>
                <button type="button"></button>
            </div>


        
    </div>)
}

export default DisplayCourse;