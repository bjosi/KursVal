import React, { useEffect, useState } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";

function App() {
  const [courses, setCourses] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [semesterQuery, setSemesterQuery] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState(
    JSON.parse(localStorage.getItem("myValueInLocalStorage")) || []
  );
  const [filter, setFilter] = useState({
    semester: null,
    level: null,
    area: null,
    block: null,
    speed: null,
  });

  useEffect(() => {
    localStorage.setItem(
      "myValueInLocalStorage",
      JSON.stringify(selectedCourses)
    );
  }, [selectedCourses]);

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
    // Kika på om man kan söka och välja semester separat
    // sedan skkicka till en gemensam array och filtrera den
    console.log(semester);
      const userInput = parseInt(semester);
      console.log(userInput);
      var choosenSemester = null; 
      if (searchQuery !== null) {
          if (!isNaN(userInput)) {
              choosenSemester = searchQuery.filter(
                  (course) => course.semester === userInput
              );
          }
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
    return <div>Error: {error.message} </div>;
  } else if (!loaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <NavBar
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
          courses={semesterQuery !== null ? semesterQuery : searchQuery !== null ? searchQuery : courses }
          searchHandler={searchHandler}
          semesterHandler={semesterHandler}
        />
      </div>
    );
  }
}

export default App;
