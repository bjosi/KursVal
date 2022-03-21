import React, { Component, useEffect, useState } from "react";
import SearchHeader from "./components/SearchHeader";
import { render } from "react-dom";
import DisplayCourse from "./components/DisplayCourse";
import MyCourses from "./Pages/MyCourses";
import "./styles/App.css";
import NavBar from "./components/NavBar";
import FilterMenu from "./components/FilterMenu";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [state, setState] = useState({ courseinfo: [], loading: true });
  const [selectedCourses, setSelectedCourses] = React.useState(
    JSON.parse(localStorage.getItem("myValueInLocalStorage")) || []
  );

  React.useEffect(() => {
    localStorage.setItem(
      "myValueInLocalStorage",
      JSON.stringify(selectedCourses)
    );
  }, [selectedCourses]);

  console.log(selectedCourses);

  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  var filter = new URLSearchParams(search).get("f");
  console.log("filter:" + filter);
  filter = parseInt(filter);
  if (isNaN(filter)) {
    filter = 0;
  }
  console.log(filter);
  asyncCall(setState, query, filter);

  //var retreivedObject = JSON.parse(window.localStorage.getItem(courseinfo));
  //console.log(retreivedObject)

  //console.log(selectedCourses);

  let contents = state.loading ? (
    <p>
      <em>
        Loading... Please refresh once the ASP.NET backend has started. See{" "}
        <a href="https://aka.ms/jspsintegrationreact">
          https://aka.ms/jspsintegrationreact
        </a>{" "}
        for more details.
      </em>
    </p>
  ) : (
    rendercourseinfoTable(state.courseinfo, setSelectedCourses, selectedCourses)
  );

  return (
    <>
      <NavBar
        selectedCourses={selectedCourses}
        setSelectedCourses={setSelectedCourses}
        contents={contents}
      />
    </>
  );
}

async function asyncCall(setState, query, filter) {
  if (query != null) {
    var response = await fetch("courses/" + query);
  } else {
    var response = await fetch("courses");
  }
  const data = await response.json();
  if (filter === 0) {
    var courses = data.filter(
      (myCourse) =>
        myCourse.semester == 7 ||
        myCourse.semester == 8 ||
        myCourse.semester == 9 ||
        myCourse.semester == 10
    );
  } else {
    var courses = data.filter((myCourse) => myCourse.semester == filter);
  }

  //console.log(courses);
  setState({ courseinfo: courses, loading: false });
}

function rendercourseinfoTable(
  courseinfo,
  setSelectedCourses,
  selectedCourses
) {
  return (
    <div>
      <SearchHeader />
      <div class="wrapper">
        <div class="left-section">
                  <FilterMenu />
        </div>
        <div className="right-section">
          {courseinfo.map((courses) => (
            <DisplayCourse
              courseinfo={courses}
              setSelectedCourses={setSelectedCourses}
              selectedCourses={selectedCourses}
              homePage={true}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
