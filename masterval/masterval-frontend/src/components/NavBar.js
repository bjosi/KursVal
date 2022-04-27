import React, { useState } from "react";
import MyCourses from "../Pages/MyCourses";
import LogIn from "../Pages/LogIn";
import { signup, useAuth, logout, login } from "../firebase";
import Browse from "../Pages/Browse";
import Loading from "../Pages/Loading";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faUser,
  faFloppyDisk,
  faSuitcase,
  faTag,
  faHouse,
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
  selectedProfileCourses,
  setSelectedProfileCourses,
  isloggedin,
  setisloggedin,
  username,
  setUsername,
  selectedProfileName,
  setSelectedProfileName,
}) => {
  async function handleLogout() {
    console.log(isloggedin);
    try {
      await logout();
      setisloggedin(false);
      console.log(isloggedin);
    } catch {}
  }

  return (
    <>
      <Router>
        <div className="menu">
          <div className="menu_container">
            <div className="first-menu-item">
              <FontAwesomeIcon icon={faTag} />
            </div>
            <Link to="/">
              <div className="menu-item">
                <FontAwesomeIcon icon={faHouse} />
                <h1>Hem</h1>
              </div>
            </Link>
            <Link to="/MyCourses">
              <div className="menu-item">
                <FontAwesomeIcon icon={faSuitcase} />
                <h1>Mina kurser</h1>
              </div>
            </Link>
            {isloggedin ? (
              <Link to="/" onClick={handleLogout}>
                <div className="menu-item">
                  <FontAwesomeIcon icon={faUser} />
                  <h1>Logga ut</h1>
                </div>
              </Link>
            ) : (
              <Link to="/LogIn">
                <div className="menu-item">
                  <FontAwesomeIcon icon={faUser} />
                  <h1>Logga in</h1>
                </div>
              </Link>
            )}
          </div>
        </div>
        <Switch>
          <Route path="/MyCourses">
            <MyCourses
              selectedCourses={selectedCourses}
              setSelectedCourses={setSelectedCourses}
              selectedProfileCourses={selectedProfileCourses}
              setSelectedProfileCourses={setSelectedProfileCourses}
              isloggedin={isloggedin}
              username={username}
              selectedProfileName={selectedProfileName}
              setSelectedProfileName={setSelectedProfileName}
              filters={filters}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              courses={courses}
              searchHandler={searchHandler}
              semesterHandler={semesterHandler}
            />
          </Route>

          <Route path="/Loading">
            <Loading />
          </Route>

          <Route path="/Loading">
            <Loading />
          </Route>

          <Route path="/LogIn">
            <LogIn
              isloggedin={isloggedin}
              setisloggedin={setisloggedin}
              username={username}
              setUsername={setUsername}
              setSelectedProfileName={setSelectedProfileName}
              setSelectedProfileCourses={setSelectedProfileCourses}
              selectedCourses={selectedCourses}
            />
          </Route>
          <Route path="/">
            <Browse
              courses={courses}
              searchHandler={searchHandler}
              semesterHandler={semesterHandler}
              selectedCourses={selectedCourses}
              setSelectedCourses={setSelectedCourses}
              selectedProfileCourses={selectedProfileCourses}
              setSelectedProfileCourses={setSelectedProfileCourses}
              filters={filters}
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
              setSelectedProfileCourses={setSelectedProfileCourses}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default NavBar;
