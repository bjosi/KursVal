import DisplayCourse from "../components/DisplayCourse";
import "../styles/App.css";

const DisplayPeriod = ({
  courseinfo,
  setSelectedCourses,
  selectedCourses,
    semester,
    setSelectedProfileCourses,
    selectedProfileCourses,
  
}) => {
  const newListperiodone = courseinfo.filter(
    (item) => item.semester === semester && item.period === "1"
  );

  const newListperiodtwo = courseinfo.filter(
    (item) => item.semester === semester && item.period === "2"
    );

    const newListPeriodOneAndTwo = courseinfo.filter((item) => item.semester === semester && item.period === "1,2");

    return (

        <div className='outer_wrapper_my_courses'>

            <div className='inner_wrapper_my_courses'>

                <div className='period_1'>
                    <h className='text_period_1'> Period 1 </h>
                    {newListperiodone.length > 0 ? newListperiodone.map(forecast => <DisplayCourse homePage={ false} courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} setSelectedProfileCourses={setSelectedProfileCourses} selectedProfileCourses={selectedProfileCourses} homePage={false} />) : <div className='empty_period'> </div>
                    }
                </div>

                <div className='period_2'>
                    <h className='text_period_2'> Period 2 </h>
                    {newListperiodtwo.length > 0 ? newListperiodtwo.map(forecast => <DisplayCourse homePage={false} courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} setSelectedProfileCourses={setSelectedProfileCourses} selectedProfileCourses={selectedProfileCourses} homePage={false} />) : <div className='empty_period'> </div>}
                </div>
            </div>

            <div className='period_1_2'>
                <h> Period 1 och 2 </h>
                {newListPeriodOneAndTwo.length > 0 ? newListPeriodOneAndTwo.map(forecast => <DisplayCourse homePage={false} courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} setSelectedProfileCourses={setSelectedProfileCourses} selectedProfileCourses={selectedProfileCourses}  homePage={false} />) : <div className='empty_period'> </div>
                }
            </div>


  return (
    <div className="outer_wrapper_my_courses">
      <div className="inner_wrapper_my_courses">
        <div className="period_1">
          <h2 className="text_period_1"> Period 1 </h2>
          {newListperiodone.length > 0 ? (
            newListperiodone.map((forecast, index) => (
              <DisplayCourse
                key={index}
                courseinfo={forecast}
                setSelectedCourses={setSelectedCourses}
                selectedCourses={selectedCourses}
                homePage={false}
              />
            ))
          ) : (
            <div className="empty_period"> </div>
          )}
        </div>

        <div className="period_2">
          <h2 className="text_period_2"> Period 2 </h2>
          {newListperiodtwo.length > 0 ? (
            newListperiodtwo.map((forecast, index) => (
              <DisplayCourse
                key={index}
                courseinfo={forecast}
                setSelectedCourses={setSelectedCourses}
                selectedCourses={selectedCourses}
                homePage={false}
              />
            ))
          ) : (
            <div className="empty_period"> </div>
          )}
        </div>
      </div>

      <div className="period_1_2">
        <h2> Period 1 och 2 </h2>
        {newListPeriodOneAndTwo.length > 0 ? (
          newListPeriodOneAndTwo.map((forecast, index) => (
            <DisplayCourse
              key={index}
              courseinfo={forecast}
              setSelectedCourses={setSelectedCourses}
              selectedCourses={selectedCourses}
              homePage={false}
            />
          ))
        ) : (
          <div className="empty_period"> </div>
        )}
      </div>
    </div>
  );
};


export default DisplayPeriod
