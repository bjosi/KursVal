import "../styles/MyCourses.css";
import "../styles/App.css";

import Semesters from '../components/Semesters';
import Overview from '../components/Overview';
import Backdrop from "../components/Backdrop/Backdrop";
import ToggleOverviewButton from '../components/ToggleOverviewButton';
import React, { useEffect,useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart, faPen, faArrowsRotate, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import ProfileSelector from "../components/ProfileSelector";
import {  useAuth } from "../firebase";


import TableMatrix from "../components/TableMatrix";
import OverviewTerms from "../components/OverviewTerms";

const MyCourses = ({ selectedCourses, setSelectedCourses, selectedProfileCourses, setSelectedProfileCourses,isloggedin,username }) => {

    const [showOverview, setShowOverview] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const [editableText, setEditableText] = useState(false);
    
    // The name of the profile that is shown on MyCourses, stored in localstorage since selectedProfileCourses is and they need to match
    const [selectedProfileName, setSelectedProfileName] = useState((localStorage.getItem("selectedProfileName")) || "Min masterexamen");
    // All the profiles saved in the database under the username that is logged in
    const [profiles, setProfiles] = useState([]);
    // All courses from database, needed to transform the simplified courses in the "Saved" database
    const [allCourses, setAllCourses] = useState([]);
    // Is the profile that is shown from local storage? (or from the database)
    const [selectedProfileCoursesIsLocalStorage, setSelectedProfileCoursesIsLocalStorage] = useState(JSON.stringify(selectedCourses) == JSON.stringify(selectedProfileCourses));

    const [localStorageProfileName, setLocalStorageProfileName] = useState("Min masterexamen");
    // used when editing a profile name
    const [temporaryProfileName, setTemporaryProfileName] = useState("");
    // used when saving with "Do you want to save changes" :)
    const [temporaryProfileNameUpdateProfile, setTemporaryProfileNameUpdateProfile] = useState("");
    const [temporarySelectedCoursesUpdateProfile, setTemporarySelectedCoursesUpdateProfile] = useState([]);


    const [test, setTest] = useState(false);

    console.log(profiles);
    console.log(selectedProfileCourses);

    useEffect(() => {

        console.log("fetch")
        fetch("courses")
        .then((res) => res.json())
        .then(
            (result) => {
                setAllCourses(result);
            }
        ); }, []);

    useEffect(() => {
        localStorage.setItem("selectedProfileName", selectedProfileName);
    }, [selectedProfileName]);


    useEffect(() => {


        const fetchData = async () => {
            const response = await fetch("courses/profiles/" + username)
                .then((res) => res.json());
            setProfiles(response);

            console.log("fetching data");
        }

        if (isloggedin) {
            fetchData();

          /*  fetch("courses/profiles/" + username)
                .then((res) => res.json())
                .then(
                    (result) => {
                        setProfiles(result);
                        console.log(result);
                    }
            );*/
        }

    } , [test,selectedProfileName, localStorageProfileName, temporaryProfileNameUpdateProfile]
);

    
    const onChangeProfileName = (e) => {
        setTemporaryProfileName(e.target.value);
    }

    const editName = () => {
        if (editableText && temporaryProfileName.trim()!="") {

            if (selectedProfileCoursesIsLocalStorage) {
                setLocalStorageProfileName(temporaryProfileName);
            } else {
                let data = "";
                selectedProfileCourses.map((course) => data += ("," + course.coursecode + "," + course.semester))
                //"save/username:minexamen:TNM02:1"

                const username1 =username+"," + selectedProfileName;
                fetch("save/" + username1 + "/" + data + "/" + temporaryProfileName);
               
            }


            setSelectedProfileName(temporaryProfileName);
            setTemporaryProfileName("");
        }
        setEditableText(!editableText);

    }

    const onChangeSelectedProfile = (e) => {


        // "Vill du spara dina ändringar?"
        if (!selectedProfileCoursesIsLocalStorage) {
            let transformedProfileCourses = [];
            const preTransformedProfileCourses = profiles.find((profile) => profile.name == selectedProfileName);
            preTransformedProfileCourses.courselist.map((profile) => transformedProfileCourses.push(allCourses.find((course) => course.coursecode == profile.coursecode && course.semester == profile.choosensemester)))

            console.log(JSON.stringify(transformedProfileCourses));
            console.log(JSON.stringify(selectedProfileCourses));

            let hasChanges = false;
            if (transformedProfileCourses.length != selectedProfileCourses.length) {
                hasChanges = true;
            }


            transformedProfileCourses.map((item1) => !(selectedProfileCourses.find((item2) =>  (item2.coursecode === item1.coursecode && item2.semester === item1.semester) )) ? hasChanges = true : "")
            //transformedProfileCourses.map((item1) => console.log(selectedProfileCourses.find((item2) => (item2.coursecode === item1.coursecode && item2.semester === item1.semester))))



            if (hasChanges) {
            //if (JSON.stringify(transformedProfileCourses) !== JSON.stringify(selectedProfileCourses)) {
                setTemporaryProfileNameUpdateProfile(selectedProfileName);
                setTemporarySelectedCoursesUpdateProfile(selectedProfileCourses);
                setBackdrop(true);
            }
        }

        setSelectedProfileName(e.target.value);

        if (e.target.value != localStorageProfileName) {
            setSelectedProfileCoursesIsLocalStorage(false);
            let transformedProfileCourses = [];

            const preTransformedProfileCourses = profiles.find((profile) => profile.name == e.target.value);
            preTransformedProfileCourses.courselist.map((profileCourse) => transformedProfileCourses.push(allCourses.find((course) => course.coursecode == profileCourse.coursecode && course.semester == profileCourse.choosensemester)))
            setSelectedProfileCourses(transformedProfileCourses);
        } else {
            setSelectedProfileCoursesIsLocalStorage(true);
            setSelectedProfileCourses(selectedCourses);
        }


    }
    
    const onSave = async () => {

        let profileName;
        let coursesSelected;

        if (temporaryProfileNameUpdateProfile !== "") {
            profileName = temporaryProfileNameUpdateProfile;
            coursesSelected = temporarySelectedCoursesUpdateProfile
        } else {
            profileName = selectedProfileName;
            coursesSelected = selectedProfileCourses;
        }

        let data = "";
        coursesSelected.map((course) => data += ("," + course.coursecode + "," + course.semester))

        console.log(username)
        console.log(profileName)
        console.log(data)


       await fetch("save/" + username + "," + profileName + "/" + data + "/" + "false").then(console.log("data saved"));

        console.log(selectedProfileCoursesIsLocalStorage);
        if (selectedProfileCoursesIsLocalStorage) {
            setSelectedCourses([]);
            setLocalStorageProfileName("Min masterexamen");
            //setSelectedProfileCourses(selectedCourses);
        }


        setTemporaryProfileNameUpdateProfile("");
        setTemporarySelectedCoursesUpdateProfile([]);
        setTest(!test);

    };


    const onDelete = ()  => {
        const username1 = username+"," + selectedProfileName;
       fetch("delete/" + username1).then(console.log("deleted"));
        setSelectedProfileCourses(selectedCourses);
        setSelectedProfileName(localStorageProfileName);
        setSelectedProfileCoursesIsLocalStorage(true);
        setTest(!test);
    };
    
    

  return (
      <div>
          <Backdrop onClose={() => setBackdrop(false)} open={backdrop}>
              <div style={{ width: "400px", backgroundColor: "white", position: "relative", padding: "1rem" }}>
                  <h1 className="save_changes">Vill du spara dina �ndringar till "{temporaryProfileNameUpdateProfile}"?</h1> <br />
                  <button onClick={function () { onSave(); setBackdrop(false) }} className="upper_header_link">
                      Spara �ndringar
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
                  <Link to="/" className="upper_header_link">{" "}
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

                  <button onClick={onDelete} className="upper_header_link">
                      {" "}
                      ta bort profil{" "}
                      <FontAwesomeIcon className="upper_header_icon" icon={faHeart} />
                  </button>

              </div>

              {/*<ProfileSelector
                  onChangeProfileName={onChangeProfileName}
                  onClickSelectProfile={onClickSelectProfile}
                  onChangeSelectedProfile={onChangeSelectedProfile}
                  editName={editName}
                  selectedProfileName={selectedProfileName}
                  localStorageProfileName={localStorageProfileName}
                  profiles={profiles}
                  editableText={editableText}
              />
              */}

              <h3 className="profile_name">
                  {" "}
                  {editableText ?
                      <input className="select_profile" type="text" onChange={(e) => onChangeProfileName(e)} placeholder={selectedProfileName} />
                      : <select className="select_profile"  onChange={(e) => onChangeSelectedProfile(e)}  >
                          <option value={localStorageProfileName}>{localStorageProfileName}</option>
                          {profiles.map((profile) => <option selected={profile.name == selectedProfileName ? "selected" : ""} value={profile.name}>{profile.name}</option>)}
                      </select>}
                  <FontAwesomeIcon onClick={editName} className="change_profile_name_icon" icon={editableText ? faCircleCheck : faPen} />
              </h3>
             
           
        <ToggleOverviewButton
          showOverview={showOverview}
          setShowOverview={setShowOverview}
        />
      </div>
      {showOverview ? (
        <Overview
            selectedCourses={selectedProfileCourses}
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

          {showOverview ? (

              <OverviewTerms selectedCourses={selectedCourses} />
    ) : (
              <></>
          )}




      <TableMatrix selectedCourses={selectedCourses} />
    </div>
  );
};


export default MyCourses;
