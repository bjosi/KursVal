import DisplayCourse from '../components/DisplayCourse';



const DisplayPeriod = ({ courseinfo, setSelectedCourses, selectedCourses, semester }) => {

    const newListperiodone = courseinfo.filter((item) => item.semester == semester && item.period == 1);
    
    const newListperiodtwo = courseinfo.filter((item) => item.semester == semester && item.period == 2);


    return (<div>

        <DisplayP newListperid={newListperiodone}/>
        {newListperiodone.map(forecast => <DisplayCourse courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} />)
        }

        <DisplayP newListperid={newListperiodtwo} />
        {newListperiodtwo.map(forecast => <DisplayCourse courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} />)
        }
    </div>
        )
}


const DisplayP = ({ newListperid }) => {

    if (newListperid.length != 0) {
         
        return (
            <h1>
                {newListperid[0].period}
              </h1>
            )
    }
    return ("")

}

export default DisplayPeriod