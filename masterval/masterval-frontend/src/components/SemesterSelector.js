import "../styles/MyCourses.css"



const SemesterSelector = ({ semester, setSemester }) => {

    const onClick = props => {
        if (props === "increase") {
            if (semester !== 9) {
                setSemester(++semester);
            }
        }
        else { //decrease
            if (semester !== 7) {
                setSemester(--semester);
            }
        }
    }


    return (<div className='semester_selector'>
        <span className='arrow_button' id={semester === 7 ? 'disabled' : null} onClick={() => onClick("decrease")}> &larr; </span>
        Termin {semester}
        <span className='arrow_button' id={semester === 9 ? 'disabled' : null} onClick={() => onClick("increase")}> &rarr; </span>
     
    </div>)
}

export default SemesterSelector;