import React, { useEffect, useState } from "react";
import "./styles/App.css";
import NavBar from "./components/NavBar";

function App() {
  const [courses, setCourses] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [selectedCourses, setSelectedCourses] = useState(
    JSON.parse(localStorage.getItem("myValueInLocalStorage")) || []
  );

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

  const { search } = window.location;
  //const query = new URLSearchParams(search).get("s");
  var filter = new URLSearchParams(search).get("f");
  const query = new URLSearchParams(search).get("s");

  filter = parseInt(filter);
  if (isNaN(filter)) {
    filter = 0;
  }

  asyncCall(setCourses, query, filter);

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
          courses={courses}
        />
      </div>
    );
  }

  async function asyncCall(setCourses, query, filter) {
    if (query != null) {
      var response = await fetch("courses/" + query);
      const data = await response.json();
      if (filter === 0) {
        const filteredData = data.filter(
          (myCourse) =>
            myCourse.semester == 7 ||
            myCourse.semester == 8 ||
            myCourse.semester == 9 ||
            myCourse.semester == 10
        );
        setCourses(filteredData);
      } else {
        const filteredData = data.filter(
          (myCourse) => myCourse.semester == filter
        );
        setCourses(filteredData);
      }
    }

    //console.log(courses);
  }
}

export default App;
