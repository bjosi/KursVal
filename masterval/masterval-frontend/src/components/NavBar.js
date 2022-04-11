import React from "react";
import MyCourses from "../Pages/MyCourses";
import LogIn from "../Pages/LogIn";

import Browse from "../Pages/Browse";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faFloppyDisk,
  faBars,
  faTag,
} from "@fortawesome/free-solid-svg-icons";

//stylesheet
import "../styles/NavBar.css";

const NavBar = ({
  selectedCourses,
  setSelectedCourses,
  courses,
  searchHandler,
  semesterHandler,
  filters,
  selectedFilters,
  setSelectedFilters,
}) => {
  return (
    <>
      <Router>
        <div className="menu">
          <div className="menu_container">
            <div className="first-menu-item">
              <FontAwesomeIcon icon={faTag} />
            </div>

            <Link to="/MyCourses">
              <div className="menu-item">
                <FontAwesomeIcon icon={faFloppyDisk} />
                <h1>Mina kurser</h1>
              </div>
            </Link>
            <Link to="/LogIn">
              <div className="menu-item">
                <FontAwesomeIcon icon={faUser} />

                <h1>Logga in</h1>
              </div>
            </Link>
            <Link to="/">
              <div className="menu-item">
                <FontAwesomeIcon icon={faBars} />
                <h1>Hem</h1>
              </div>
            </Link>
          </div>
        </div>
        <Switch>
          <Route path="/MyCourses">
            <MyCourses
                          courses={courses}
                          searchHandler={searchHandler}
                          semesterHandler={semesterHandler}
                          selectedCourses={selectedCourses}
                          setSelectedCourses={setSelectedCourses}
                          filters={filters}
                          selectedFilters={selectedFilters}
                          setSelectedFilters={setSelectedFilters}
            />
          </Route>

                  <Route path="/LogIn">
                    <LogIn/>  
            </Route>
          <Route path="/">
            <Browse
              courses={courses}
              searchHandler={searchHandler}
              semesterHandler={semesterHandler}
              selectedCourses={selectedCourses}
              setSelectedCourses={setSelectedCourses}
              filters={filters}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default NavBar;
