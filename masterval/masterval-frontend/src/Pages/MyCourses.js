import "../styles/MyCourses.css";
import "../styles/App.css";
import Semesters from '../components/Semesters';
import Overview from '../components/Overview';
import Backdrop from "../components/Backdrop/Backdrop";

import ToggleOverviewButton from '../components/ToggleOverviewButton';
import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart, faPen, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";

const MyCourses = ({ selectedCourses, setSelectedCourses, selectedProfileCourses,setSelectedProfileCourses }) => {

    const [showOverview, setShowOverview] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const [isFirstClick, setIsFirstClick] = useState(true);
    const [editableText, setEditableText] = useState(false);

    const [selectedProfileName, setSelectedProfileName] = useState((localStorage.getItem("selectedProfileName")) || "Min masterexamen");
    const [profiles, setProfiles] = useState([]);
    const [allCourses, setAllCourses] = useState([]);
    const [selectedProfileCoursesIsLocalStorage, setSelectedProfileCoursesIsLocalStorage] = useState(JSON.stringify(selectedCourses) == JSON.stringify(selectedProfileCourses));
    const [localStorageProfileName, setLocalStorageProfileName] = useState("Min masterexamen");
    const [temporaryProfileName, setTemporaryProfileName] = useState("");

    console.log(selectedCourses);
    console.log(selectedProfileCourses);

    useEffect(() => {fetch("courses")
        .then((res) => res.json())
        .then(
            (result) => {
                setAllCourses(result);
            }
        ); }, []);



    useEffect(() => {
        localStorage.setItem("selectedProfileName", selectedProfileName);
    }, [selectedProfileName]);


    const updateProfileName = (e) => {
        setTemporaryProfileName(e.target.value);
    }

    const editName = () => {
        setEditableText(!editableText);
        if (editableText) {

            if (selectedProfileCoursesIsLocalStorage) {
                setLocalStorageProfileName(temporaryProfileName);
                setSelectedProfileName(temporaryProfileName);
                setTemporaryProfileName("");
            } else {


                let data = "";
                selectedProfileCourses.map((course) => data += ("," + course.coursecode + "," + course.semester))
                //"save/username:minexamen:TNM02:1"

                const username = "usernamebla," + selectedProfileName;
                fetch("save/" + username + "/" + data + "/" + temporaryProfileName)
                    .then((res) => res.json())
                    .then(
                        (result) => {
                        }
                    );

                setSelectedProfileName(temporaryProfileName);
                setTemporaryProfileName("");

            }
        }

    }

    const updateSelectedProfile = (e) => {

        setSelectedProfileName(e.target.value);

        if (e.target.value != localStorageProfileName) {
            setSelectedProfileCoursesIsLocalStorage(false);
            let transformedProfileCourses = [];

            const preTransformedProfileCourses = profiles.find((profile) => profile.name == e.target.value);
            preTransformedProfileCourses.courselist.map((profile) => transformedProfileCourses.push(allCourses.find((course) => course.coursecode == profile.coursecode && course.semester == profile.choosensemester)))
            setSelectedProfileCourses(transformedProfileCourses);
        } else {
            setSelectedProfileCoursesIsLocalStorage(true);
            setSelectedProfileCourses(selectedCourses);
        }

    }


    const onSave = () => {

        

        let data = "";
        selectedProfileCourses.map((course) => data += ("," + course.coursecode + "," + course.semester))
        //"save/username:minexamen:TNM02:1"

        const username = "usernamebla," + selectedProfileName;
        fetch("save/" + username + "/" + data +"/" + "false")
            .then((res) => res.json())
            .then(
                (result) => {
                }
        );
        if (selectedProfileCoursesIsLocalStorage) {
            setSelectedCourses([]);
            setLocalStorageProfileName("Min masterexamen");
            setSelectedProfileCourses(selectedCourses);
        }    }


    useEffect(() => {
        // If the person is logged in
        if (true) {
            const username = "usernamebla";

            fetch("courses/profiles/" + username)
                .then((res) => res.json())
                .then(
                    (result) => {
                        setProfiles(result);
                    }
                );
        }

    }, [ selectedProfileName,isFirstClick,localStorageProfileName]);


    const onEdit = () => {
        
        if (isFirstClick) {

            if (!selectedProfileCoursesIsLocalStorage) {

                let transformedProfileCourses = [];

                const preTransformedProfileCourses = profiles.find((profile) => profile.name == selectedProfileName);
                if (preTransformedProfileCourses != null) {
                    preTransformedProfileCourses.courselist.map((profile) => transformedProfileCourses.push(allCourses.find((course) => course.coursecode == profile.coursecode && course.semester == profile.choosensemester)))
                }
                if (JSON.stringify(transformedProfileCourses) != JSON.stringify(selectedProfileCourses)) {
                    setBackdrop(true);
                }
            }

            setIsFirstClick(false);

        } else {
            setIsFirstClick(true);
        }
    }


  return (
      <div>
          <Backdrop onClose={() => setBackdrop(false)} open={backdrop}>
              <div style={{ width: "400px", backgroundColor: "white", position: "relative", padding:"1rem"}}>
                  <h1 className="save_changes">Vill du spara dina ändringar?</h1> <br/>
                  <button onClick={function () { onSave(); setBackdrop(false) }} className="upper_header_link">
                      Spara ändringar
                      <FontAwesomeIcon className="upper_header_icon" icon={faArrowsRotate} />
                  </button>
                  <div className="close_button_container">
                      <div className="close_button" onClick={() => setBackdrop(false)}>
                          X
                      </div>
                  </div>
              </div>
          </Backdrop>


          <div className="my_courses_header">

              <div className="upper_header">
                  <Link to={{ pathname: "/", state: {selectedProfileName:selectedProfileName}}} className="upper_header_link">{" "}
            <FontAwesomeIcon className="upper_header_icon" icon={faArrowLeft} />
                      Hitta fler kurser{" "}</Link>



                  {selectedProfileCoursesIsLocalStorage ?
                      <button onClick={onSave} className="upper_header_link">
                          Spara profil

                          <FontAwesomeIcon className="upper_header_icon" icon={faHeart} />
                      </button> : <button onClick={onSave} className="upper_header_link">
                      Uppdatera profil
                      <FontAwesomeIcon className="upper_header_icon" icon={faArrowsRotate} />
                  </button>}
                  

                  
        </div>
        <h className="exam_name">
                  {" "}

                  {editableText ?
                      
                      <input type="text" onChange={(e) => updateProfileName(e)} />
                          
                      : <select onClick={onEdit} onChange={(e) => updateSelectedProfile(e)}  >
                          <option value={localStorageProfileName}>{localStorageProfileName}</option>
                          {profiles.map((profile) => <option selected={profile.name==selectedProfileName ? "selected" : "" } value={profile.name}>{profile.name}</option>)}
                  </select>}

                  
                  <FontAwesomeIcon onClick={editName}className="exam_name_icon" icon={faPen} />
        </h>
        <ToggleOverviewButton
          showOverview={showOverview}
          setShowOverview={setShowOverview}
        />
      </div>
      {showOverview ? (
        <Overview
                  selectedCourses={selectedProfileCoursesIsLocalStorage ? selectedCourses : selectedProfileCourses}
                  selectedProfileName={selectedProfileName}
        />
      ) : (
        <Semesters
                      selectedCourses={selectedCourses}
                      setSelectedCourses={setSelectedCourses}
                      setSelectedProfileCourses={setSelectedProfileCourses}
                      selectedProfileCourses={selectedProfileCourses}
        />
      )}
    </div>
  );
};

// {selectedCourses.map(forecast => <DisplayCourse courseinfo={forecast} setSelectedCourses={setSelectedCourses} selectedCourses={selectedCourses} homePage={false} /> )}

export default MyCourses;
