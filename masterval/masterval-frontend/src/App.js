import React, { useEffect, useState } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import Loading from "./Pages/Loading";
function App() {
  const [courses, setCourses] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [semesterQuery, setSemesterQuery] = useState(null);
  const [filterQuery, setFilterQuery] = useState(null);

    const vetenskaplig_metod = [{
        area: "Medieteknik,Datateknik",
        courseblock: "3",
        coursecode: "TNM107",
        courselevel: "Avancerad nivå",
        coursename: "Vetenskaplig metod",
        coursepoints: 6,
        period: "2",
        place: "Norrköping",
        progcode: "6CMEN",
        progname: "Civilingenjör i medieteknik",
        semester: 9,
        uChosen: "2.2,2.5,3.2,3.3,4.1,5.1,5.2,5.3,5.5"
    }];

  const [selectedCourses, setSelectedCourses] = useState(
      JSON.parse(localStorage.getItem("myValueInLocalStorage")) || vetenskaplig_metod
  );

  // The courses of the profile that is currently shown
  const [selectedProfileCourses, setSelectedProfileCourses] = useState(
    JSON.parse(localStorage.getItem("selectedProfileCourses")) ||
      selectedCourses
  );
  // The name of the profile that is shown on MyCourses, stored in localstorage since selectedProfileCourses is and they need to match
  const [selectedProfileName, setSelectedProfileName] = useState(
    localStorage.getItem("selectedProfileName") || "Min masterexamen"
  );

  useEffect(() => {
    localStorage.setItem("selectedProfileName", selectedProfileName);
  }, [selectedProfileName]);

  useEffect(() => {
    localStorage.setItem(
      "selectedProfileCourses",
      JSON.stringify(selectedProfileCourses)
    );
  }, [selectedProfileCourses]);

  const [selectedFilters, setSelectedFilters] = useState([]);

   const [isloggedin, setisloggedin] = useState(
     JSON.parse(localStorage.getItem("myValueInLocalStorageforloggedin")) || false
   );

  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  useEffect(() => {
    localStorage.setItem("username", username);
  }, [username]);

  const myFilter = [
    { name: "Grundnivå", checked: false },
    { name: "Avancerad nivå", checked: false },
    { name: "Block 1", checked: false },
    { name: "Block 2", checked: false },
    { name: "Block 3", checked: false },
    { name: "Block 4", checked: false },
    { name: "Helfart", checked: false },
    { name: "Halvfart", checked: false },
    { name: "Hösttermin, åk 4", checked: false },
    { name: "Vårtermin, åk 4", checked: false },
    { name: "Hösttermin, åk 5", checked: false },
    { name: "Period 1", checked: false }, 
    { name: "Period 2", checked: false }];

  const [filters, setFilterState] = useState(myFilter);

  useEffect(() => {
    var myCourses = courses;
    if (searchQuery !== null) {
      myCourses = searchQuery;
    } 
    const myFilt = filters
      .filter((myFilt) => myFilt.checked)
      .map((filt) => filt.name);

    if (filters.map((filt) => filt.checked).includes(true)) {
      var val = [];
      val.push(
        myCourses.filter((course) => {
          if((myFilt.includes("Period 1") && course.period.includes("1")) || (myFilt.includes("Period 2") && course.period.includes("2"))) 
          {
          if((myFilt.includes("Hösttermin, åk 4") && course.semester===7) ||
          (myFilt.includes("Vårtermin, åk 4") && course.semester===8) ||
          (myFilt.includes("Hösttermin, åk 5") && course.semester===9)) {
            if (
              (myFilt.includes("Block 1") && course.courseblock.includes("1")) ||
              (myFilt.includes("Block 2") && course.courseblock.includes("2")) ||
              (myFilt.includes("Block 3") && course.courseblock.includes("3")) ||
              (myFilt.includes("Block 4") && course.courseblock.includes("4"))
            ) {
              if (
                course.courselevel.includes("Avancerad nivå") &&
                myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                course.courselevel.includes("Grundnivå") &&
                myFilt.includes("Grundnivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                !myFilt.includes("Grundnivå") &&
                !myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
            } else if (
              !myFilt.includes("Block 1") &&
              !myFilt.includes("Block 2") &&
              !myFilt.includes("Block 3") &&
              !myFilt.includes("Block 4")
            ) {
              if (
                course.courselevel.includes("Avancerad nivå") &&
                myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                course.courselevel.includes("Grundnivå") &&
                myFilt.includes("Grundnivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                !myFilt.includes("Grundnivå") &&
                !myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
            }
          }
          else if(!myFilt.includes("Hösttermin, åk 4") && !myFilt.includes("Vårtermin, åk 4") && !myFilt.includes("Hösttermin, åk 5")) {
            if (
              (myFilt.includes("Block 1") && course.courseblock.includes("1")) ||
              (myFilt.includes("Block 2") && course.courseblock.includes("2")) ||
              (myFilt.includes("Block 3") && course.courseblock.includes("3")) ||
              (myFilt.includes("Block 4") && course.courseblock.includes("4"))
            ) {
              if (
                course.courselevel.includes("Avancerad nivå") &&
                myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                course.courselevel.includes("Grundnivå") &&
                myFilt.includes("Grundnivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                !myFilt.includes("Grundnivå") &&
                !myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
            }
            else if (
              !myFilt.includes("Block 1") &&
              !myFilt.includes("Block 2") &&
              !myFilt.includes("Block 3") &&
              !myFilt.includes("Block 4")
            ) {
              if (
                course.courselevel.includes("Avancerad nivå") &&
                myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                course.courselevel.includes("Grundnivå") &&
                myFilt.includes("Grundnivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                !myFilt.includes("Grundnivå") &&
                !myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
            }
          }
        }
        else if(!myFilt.includes("Period 1") && !myFilt.includes("Period 2")) {
          if((myFilt.includes("Hösttermin, åk 4") && course.semester===7) ||
          (myFilt.includes("Vårtermin, åk 4") && course.semester===8) ||
          (myFilt.includes("Hösttermin, åk 5") && course.semester===9)) {
            if (
              (myFilt.includes("Block 1") && course.courseblock.includes("1")) ||
              (myFilt.includes("Block 2") && course.courseblock.includes("2")) ||
              (myFilt.includes("Block 3") && course.courseblock.includes("3")) ||
              (myFilt.includes("Block 4") && course.courseblock.includes("4"))
            ) {
              if (
                course.courselevel.includes("Avancerad nivå") &&
                myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                course.courselevel.includes("Grundnivå") &&
                myFilt.includes("Grundnivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                !myFilt.includes("Grundnivå") &&
                !myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
            } else if (
              !myFilt.includes("Block 1") &&
              !myFilt.includes("Block 2") &&
              !myFilt.includes("Block 3") &&
              !myFilt.includes("Block 4")
            ) {
              if (
                course.courselevel.includes("Avancerad nivå") &&
                myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                course.courselevel.includes("Grundnivå") &&
                myFilt.includes("Grundnivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                !myFilt.includes("Grundnivå") &&
                !myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
            }
          }
          else if(!myFilt.includes("Hösttermin, åk 4") && !myFilt.includes("Vårtermin, åk 4") && !myFilt.includes("Hösttermin, åk 5")) {
            if (
              (myFilt.includes("Block 1") && course.courseblock.includes("1")) ||
              (myFilt.includes("Block 2") && course.courseblock.includes("2")) ||
              (myFilt.includes("Block 3") && course.courseblock.includes("3")) ||
              (myFilt.includes("Block 4") && course.courseblock.includes("4"))
            ) {
              if (
                course.courselevel.includes("Avancerad nivå") &&
                myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                course.courselevel.includes("Grundnivå") &&
                myFilt.includes("Grundnivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                !myFilt.includes("Grundnivå") &&
                !myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
            }
            else if (
              !myFilt.includes("Block 1") &&
              !myFilt.includes("Block 2") &&
              !myFilt.includes("Block 3") &&
              !myFilt.includes("Block 4")
            ) {
              if (
                course.courselevel.includes("Avancerad nivå") &&
                myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                course.courselevel.includes("Grundnivå") &&
                myFilt.includes("Grundnivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
              if (
                !myFilt.includes("Grundnivå") &&
                !myFilt.includes("Avancerad nivå")
              ) {
                if (!course.period.includes(",") && myFilt.includes("Helfart")) {
                  return course;
                }
                if (course.period.includes(",") && myFilt.includes("Halvfart")) {
                  return course;
                }
                if (!myFilt.includes("Helfart") && !myFilt.includes("Halvfart")) {
                  return course;
                }
              }
            }
          }
        }
      })
      );
      const removeRepeatCourses = (array) => [...new Set(array)];
      val = removeRepeatCourses(val[0]);
      myCourses = val;
    }
    setFilterQuery(myCourses);
  }, [filters, searchQuery, courses]);

    useEffect(() => {
    var myQuery = null;
    var temp = selectedFilters;
    var temp2 = selectedFilters;
    var myNum = temp.map((selected) => selected.match(/\d+/)).toString();
    var all = temp2
      .map((selected) => (!selected.includes("Block") ? " " + selected : ""))
      .toString();
    if (selectedFilters.length > 0) {
      if (searchQuery !== null) {
        if (semesterQuery !== null) {
          myQuery = semesterQuery.filter((course) => {
            return myNum && all
              ? myNum.includes(
                  course.courseblock.split(",")[0] ||
                    course.courseblock.split(",")[1]
                ) && all.includes(course.courselevel || course.area)
              : myNum
              ? myNum.includes(
                  course.courseblock.split(",")[0] ||
                    course.courseblock.split(",")[1]
                )
              : all
              ? all.includes(course.courselevel || course.area)
              : course;
          });
        } else {
          myQuery = searchQuery.filter((course) => {
            return myNum && all
              ? myNum.includes(
                  course.courseblock.split(",")[0] ||
                    course.courseblock.split(",")[1]
                ) && all.includes(course.courselevel || course.area)
              : myNum
              ? myNum.includes(
                  course.courseblock.split(",")[0] ||
                    course.courseblock.split(",")[1]
                )
              : all
              ? all.includes(course.courselevel || course.area)
              : course;
          });
        }
      } else {
        var myQuery = courses.filter((course) => {
          return myNum && all
            ? myNum.includes(
                course.courseblock.split(",")[0] ||
                  course.courseblock.split(",")[1]
              ) && all.includes(course.courselevel || course.area)
            : myNum
            ? myNum.includes(
                course.courseblock.split(",")[0] ||
                  course.courseblock.split(",")[1]
              )
            : all
            ? all.includes(course.courselevel || course.area)
            : course;
        });
      }
    }
    setSemesterQuery(myQuery);
  }, [selectedFilters]);

  useEffect(() => {
    localStorage.setItem(
      "myValueInLocalStorage",
      JSON.stringify(selectedCourses)
    );
  }, [selectedCourses, searchQuery]);

   useEffect(() => {
     localStorage.setItem(
       "myValueInLocalStorageforloggedin",
       JSON.stringify(isloggedin)
     );
   }, [isloggedin]);

  const searchHandler = (query) => {
    const searchResult = courses.filter((course) => {
      return (
        course.coursename.toLowerCase().includes(query.toLowerCase()) ||
        course.coursecode.toLowerCase().includes(query.toLowerCase())
      );
    });

    setSearchQuery(searchResult);
  };
  const semesterHandler = null;
  // const semesterHandler = (semester) => {
  //   const userInput = parseInt(semester);
  //   var choosenSemester = courses;
  //   if (searchQuery !== null) {
  //     choosenSemester = searchQuery;
  //   }
  //   if (!isNaN(userInput)) {
  //     choosenSemester = choosenSemester.filter(
  //       (course) => course.semester === userInput
  //     );
  //   }
  //   setSemesterQuery(choosenSemester);
  // };

  useEffect(() => {
    fetch("courses")
      .then((res) => res.json())
      .then(
        (result) => {
          setLoaded(true);
          setCourses(result);
        },
        (error) => {
          setLoaded(true);
          setError(error);
        }
      );
  }, []);

  if (error) {
    //laddar om sidan efter 1 sekund om det blir error
    setTimeout(function () {
      window.location.reload();
    }, 1000);
    return <div> </div>;
  } else if (!loaded) {
    return (
      <>
        <Loading />
      </>
    );
  } else {
    return (
      <div>
        <NavBar
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
          selectedProfileCourses={selectedProfileCourses}
          setSelectedProfileCourses={setSelectedProfileCourses}
          courses={ 
            filterQuery !== null 
            ? filterQuery 
            : courses}
          searchHandler={searchHandler}
          semesterHandler={semesterHandler}
          filters={filters}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          isloggedin={isloggedin}
          setisloggedin={setisloggedin}
          username={username}
          setUsername={setUsername}
          selectedProfileName={selectedProfileName}
          setSelectedProfileName={setSelectedProfileName}
          setFilterState={setFilterState}
        />
      </div>
    );
  }
}

export default App;
