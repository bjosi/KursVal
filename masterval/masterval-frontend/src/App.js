import React, { useEffect, useState } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";

function App() {
  const [courses, setCourses] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState(
    JSON.parse(localStorage.getItem("myValueInLocalStorage")) || []
  );

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
    if (searchQuery !== null) {
      const choosenSemester = searchQuery.filter(
        (course) => course.semester === userInput
      );

      setSearchQuery(choosenSemester);
    }
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

  useEffect(() => {
    localStorage.setItem(
      "myValueInLocalStorage",
      JSON.stringify(selectedCourses)
    );
  }, [selectedCourses]);

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
          courses={searchQuery !== null ? searchQuery : courses}
          searchHandler={searchHandler}
          semesterHandler={semesterHandler}
        />
      </div>
    );
  }
}

export default App;
