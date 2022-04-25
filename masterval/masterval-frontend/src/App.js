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

  const [selectedCourses, setSelectedCourses] = useState(
    JSON.parse(localStorage.getItem("myValueInLocalStorage")) || []
  );

  const [isloggedin, setisloggedin] = useState(
    localStorage.getItem("myValueInLocalStorageforloggedin") || false
  );

  const [selectedFilters, setSelectedFilters] = useState([]);
  const filters = [
    "Grundnivå",
    "Avancerad nivå",
    "Medieteknik",
    "Block 1",
    "Block 2",
    "Block 3",
    "Block 4",
    "Helfart",
    "Halvfart",
  ];

  useEffect(() => {
    var filterQuery = null;
    var temp = selectedFilters;
    var temp2 = selectedFilters;
    var myNum = temp.map((selected) => selected.match(/\d+/)).toString();
    var all = temp2
      .map((selected) => (!selected.includes("Block") ? " " + selected : ""))
      .toString();
    if (selectedFilters.length > 0) {
      if (searchQuery !== null) {
        if (semesterQuery !== null) {
          filterQuery = semesterQuery.filter((course) => {
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
          filterQuery = searchQuery.filter((course) => {
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
        var filterQuery = courses.filter((course) => {
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
    setSemesterQuery(filterQuery);
  }, [selectedFilters]);

  useEffect(() => {
    localStorage.setItem(
      "myValueInLocalStorage",
      JSON.stringify(selectedCourses)
    );
  }, [selectedCourses]);

  useEffect(() => {
    localStorage.setItem(
      "myValueInLocalStorageforloggedin",
      JSON.stringify(isloggedin)
    );
  }, [isloggedin]);

  const searchHandler = (query) => {
    console.log(query);
    const searchResult = courses.filter((course) => {
      return (
        course.coursename.toLowerCase().includes(query.toLowerCase()) ||
        course.coursecode.toLowerCase().includes(query.toLowerCase())
      );
    });

    setSearchQuery(searchResult);
  };

  const semesterHandler = (semester) => {
    const userInput = parseInt(semester);
    var choosenSemester = null;
    if (searchQuery !== null) {
      if (!isNaN(userInput)) {
        choosenSemester = searchQuery.filter(
          (course) => course.semester === userInput
        );
      }
    } else {
      choosenSemester = courses.filter(
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
          courses={
            semesterQuery !== null
              ? semesterQuery
              : searchQuery !== null
              ? searchQuery
              : courses
          }
          searchHandler={searchHandler}
          semesterHandler={semesterHandler}
          filters={filters}
          selectedFilters={selectedFilters}
          setSelectedFilters={setSelectedFilters}
          isloggedin={isloggedin}
          setisloggedin={setisloggedin}
        />
      </div>
    );
  }
}

export default App;
