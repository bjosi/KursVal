import React from "react";
import MyCourses from "../Pages/MyCourses";
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

const NavBar = ({ selectedCourses, setSelectedCourses, contents }) => {
    return (
        <>
            <Router>
                <div class="menu">
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
                <Switch>
                    <Route path="/MyCourses">
                        <MyCourses
                            selectedCourses={selectedCourses}
                            setSelectedCourses={setSelectedCourses}
                        />
                    </Route>

                    <Route path="/LogIn">
                        <div>Logga in</div>
                    </Route>
                    <Route path="/">
                        <div>{contents}</div>
                    </Route>
                </Switch>
            </Router>
        </>
    );
};

export default NavBar;