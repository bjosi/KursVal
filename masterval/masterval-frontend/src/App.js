import React, { useEffect, useState, useRef } from "react";
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
  const [selectedCourses, setSelectedCourses] = useState(
    JSON.parse(localStorage.getItem("myValueInLocalStorage")) || []
  );

  // const [isloggedin, setisloggedin] = useState(
  //     localStorage.getItem("myValueInLocalStorageforloggedin") || false
  // );

  const [selectedFilters, setSelectedFilters] = useState([]);

  const myFilter = [
    { name: "Grundnivå", checked: false },
    { name: "Avancerad nivå", checked: false },
    { name: "Block 1", checked: false },
    { name: "Block 2", checked: false },
    { name: "Block 3", checked: false },
    { name: "Block 4", checked: false },
    { name: "Helfart", checked: false },
    { name: "Halvfart", checked: false },
  ];
  const [filters, setFilterState] = useState(myFilter);

  useEffect(() => {
    var myCourses = courses;
    if (semesterQuery !== null && searchQuery !== null) {
      myCourses = semesterQuery;
    } else if (searchQuery !== null) {
      myCourses = searchQuery;
    } else if (semesterQuery !== null) {
      myCourses = semesterQuery;
    }
    const myFilt = filters
      .filter((myFilt) => myFilt.checked)
      .map((filt) => filt.name);
    console.log(myFilt);
    if (filters.map((filt) => filt.checked).includes(true)) {
      var val = [];
      val.push(
        myCourses.filter((course) => {
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
        })
      );
      const removeRepeatCourses = (array) => [...new Set(array)];
      val = removeRepeatCourses(val[0]);
      console.log(val);
      myCourses = val;
    }
    setFilterQuery(myCourses);
  }, [filters, searchQuery, semesterQuery, courses]);

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

  // useEffect(() => {
  //     localStorage.setItem(
  //         "myValueInLocalStorageforloggedin",
  //         JSON.stringify(isloggedin)
  //     );
  // }, [isloggedin]);

  const searchHandler = (query) => {
    console.log(query);
    var myCourses = courses;
    const searchResult = myCourses.filter((course) => {
      return (
        course.coursename.toLowerCase().includes(query.toLowerCase()) ||
        course.coursecode.toLowerCase().includes(query.toLowerCase())
      );
    });
    setSearchQuery(searchResult);
  };

  const semesterHandler = (semester) => {
    console.log(filters);
    const userInput = parseInt(semester);
    var choosenSemester = courses;
    if (searchQuery !== null) {
      choosenSemester = searchQuery;
    }
    if (!isNaN(userInput)) {
      choosenSemester = choosenSemester.filter(
        (course) => course.semester === userInput
      );
    }
    setSemesterQuery(choosenSemester);
  };

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
          setFilterState={setFilterState}
          courses={filterQuery !== null ? filterQuery : courses}
          searchHandler={searchHandler}
          semesterHandler={semesterHandler}
          filters={filters}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          // isloggedin={isloggedin}
          // setisloggedin={setisloggedin}
        />
      </div>
    );
  }
}

export default App;
