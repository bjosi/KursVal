import React, { useState } from "react";
import MyCourses from "../Pages/MyCourses";
import LogIn from "../Pages/LogIn";
import CoursesCounter from "./CoursesCounter/CourseCounter";
import { signup, useAuth, logout, login } from "../firebase";
import Browse from "../Pages/Browse";
import Loading from "../Pages/Loading";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Backdrop from "../components/Backdrop/Backdrop";
import "../styles/DisplayCourse.css";
import "../Pages/Browse.css";


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
  setFilterState,
}) => {


    const [backdrop, setBackdrop] = useState(false);

  async function handleLogout() {
    console.log(isloggedin);
    try {
      await logout();
      setisloggedin(false);
        console.log(isloggedin);
        setBackdrop(false)
    } catch {}
  }

    return (

    <>
      <Router>
        <div className="menu">
          <div className="menu_container">
            <div className="first-menu-item">
              <Link to="/">
                <div className="menu-item">
                  <FontAwesomeIcon icon={faTag} />
                </div>
              </Link>
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
                <CoursesCounter
                  selectedProfileCourses={selectedProfileCourses}
                />
                <h1>Mina kurser</h1>
              </div>
            </Link>
                        {isloggedin ? (
                            <Link to="/" onClick={() => setBackdrop(true)}>
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


                <Backdrop onClose={() => setBackdrop(false)} open={backdrop}>
                    <div className="logout_popup">
                        <p> Säker på att du vill logga ut? </p>
                        <button className="search_btn_popup" onClick={() => handleLogout()}> Logga ut </button>

                        <div className="close_button_container">
                            <div className="close_button" onClick={() => setBackdrop(false)}>
                                X
                            </div>
                        </div>
                    </div>
                </Backdrop>


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
              setFilterState={setFilterState}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default NavBar;
