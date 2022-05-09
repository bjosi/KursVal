import "../styles/MyCourses.css";
import "../styles/App.css";

import Semesters from "../components/Semesters";
import Overview from "../components/Overview";
import Backdrop from "../components/Backdrop/Backdrop";
import ToggleOverviewButton from "../components/ToggleOverviewButton";
import React, { useEffect, useState, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faHeart,
  faPen,
  faArrowsRotate,
  faCircleCheck,
  faTrashCan,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";
import ProfileSelector from "../components/ProfileSelector";
import { useAuth } from "../firebase";

import TableMatrix from "../components/Matrix/TableMatrix";
import OverviewTerms from "../components/OverviewTerms";

const MyCourses = ({
  selectedCourses,
  setSelectedCourses,
  selectedProfileCourses,
  setSelectedProfileCourses,
  isloggedin,
  username,
  selectedProfileName,
  setSelectedProfileName,
  courses,
}) => {
  const [showOverview, setShowOverview] = useState(false);
  const [backdrop, setBackdrop] = useState(false);
  const [editableText, setEditableText] = useState(false);

  // All the profiles saved in the database under the username that is logged in
  const [profiles, setProfiles] = useState([]);
  // All courses from database, needed to transform the simplified courses in the "Saved" database
  const [allCourses, setAllCourses] = useState([]);

  const [localStorageProfileName, setLocalStorageProfileName] =
    useState("Min masterexamen");

  // Is the profile that is shown from local storage? (or from the database)
  const [
    selectedProfileCoursesIsLocalStorage,
    setSelectedProfileCoursesIsLocalStorage,
  ] = useState(
    JSON.stringify(selectedCourses) ===
      JSON.stringify(selectedProfileCourses) &&
      localStorageProfileName === selectedProfileName
  );

  // used when editing a profile name
  const [temporaryProfileName, setTemporaryProfileName] = useState("");
  // used when saving with "Do you want to save changes" :)
  const [
    temporaryProfileNameUpdateProfile,
    setTemporaryProfileNameUpdateProfile,
  ] = useState("");
  const [
    temporarySelectedCoursesUpdateProfile,
    setTemporarySelectedCoursesUpdateProfile,
  ] = useState([]);

  const [test, setTest] = useState(false);
  const [fetchSucceeded, setFetchSucceeded] = useState(false);
  const [showMatrix, setShowMatrix] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  useEffect(() => {
    console.log("fetch");
    fetch("courses")
      .then((res) => res.json())
      .then((result) => {
        setAllCourses(result);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("courses/profiles/" + username).then((res) =>
        res.json()
      );
      setProfiles(response);
    };

    if (isloggedin) {
      fetchData();
    }
  }, [
    test,
    selectedProfileName,
    localStorageProfileName,
    temporaryProfileNameUpdateProfile,
  ]);

  const onChangeProfileName = (e) => {
    setTemporaryProfileName(e.target.value);
  };


    const editName = async () => {
        setEditableText(true);
    }


  const onChangeSelectedProfile = (e) => {
    // "Vill du spara dina ändringar?"
    if (!selectedProfileCoursesIsLocalStorage) {
      let transformedProfileCourses1 = [];
      const preTransformedProfileCourses = profiles.find(
        (profile) => profile.name == selectedProfileName
      );

      if (preTransformedProfileCourses.courselist) {
        preTransformedProfileCourses.courselist.map((profile) => {
          const index = allCourses.findIndex(
            (course) => course.coursecode == profile.coursecode
          );

          let element = { ...allCourses[index] };
          element.semester = parseInt(profile.choosensemester);

          transformedProfileCourses1.push(element);
        });
      }

      let hasChanges = false;
      if (transformedProfileCourses1.length != selectedProfileCourses.length) {
        hasChanges = true;
      }

      transformedProfileCourses1.map((item1) =>
        !selectedProfileCourses.find(
          (item2) =>
            item2.coursecode === item1.coursecode &&
            item2.semester === item1.semester
        )
          ? (hasChanges = true)
          : ""
      );

      if (hasChanges) {
        setTemporaryProfileNameUpdateProfile(selectedProfileName);
        setTemporarySelectedCoursesUpdateProfile(selectedProfileCourses);
        setBackdrop(true);
      }
    }

    setSelectedProfileName(e.target.value);

    if (e.target.value != localStorageProfileName) {
      setSelectedProfileCoursesIsLocalStorage(false);
      let transformedProfileCourses2 = [];

      const preTransformedProfileCourses = profiles.find(
        (profile) => profile.name == e.target.value
      );

      if (preTransformedProfileCourses.courselist) {
        preTransformedProfileCourses.courselist.map((profile) => {
          const index = allCourses.findIndex(
            (course) => course.coursecode == profile.coursecode
          );

          let element = { ...allCourses[index] };
          element.semester = parseInt(profile.choosensemester);

          transformedProfileCourses2.push(element);
        });
      }

      setSelectedProfileCourses(transformedProfileCourses2);
    } else {
      setSelectedProfileCoursesIsLocalStorage(true);
      setSelectedProfileCourses(selectedCourses);
    }
  };

    const onSave = async () => {



        const vetenskaplig_metod = [{
            area: "Medieteknik,Datateknik",
            courseblock: "3",
            coursecode: "TNM107",
            courselevel: "Avancerad nivå",
            coursename: "Vetenskaplig metod",
            coursepoints: 6,
            period: "2",
            place: "Norrköping",
            progcode: "6CMEN",
            progname: "Civilingenjör i medieteknik",
            semester: 9,
            uChosen: "2.2,2.5,3.2,3.3,4.1,5.1,5.2,5.3,5.5"
        }];

        let profileName;
        let coursesSelected;

        if (temporaryProfileNameUpdateProfile !== "") {
            profileName = temporaryProfileNameUpdateProfile;
            coursesSelected = temporarySelectedCoursesUpdateProfile;
        } else {
            profileName = selectedProfileName;

            coursesSelected = selectedProfileCourses;
        }


        let newProfileName = "false";
        
        if (editableText) {
            if (temporaryProfileName.trim() != "") {

                if (profiles.find((profile) => profile.name === temporaryProfileName) && profiles.find((profile) => profile.name === temporaryProfileName).name !== selectedProfileName) {
                    setShowErrorMessage(true);
                    setTimeout(() => setShowErrorMessage(false), 2000);
                    return;
                }


                if (temporaryProfileName === "Min masterexamen") {
                        setShowErrorMessage(true);
                        setTimeout(() => setShowErrorMessage(false), 2000);
                        return;
                }

                if (!selectedProfileCoursesIsLocalStorage) {
                    newProfileName = temporaryProfileName;
                } else {
                    profileName = temporaryProfileName;
                }
            }


            setTemporaryProfileName("");
        } 



        if (selectedProfileCoursesIsLocalStorage && profileName === "Min masterexamen") {
            setShowErrorMessage(true);
            setTimeout(() => setShowErrorMessage(false), 2000);
            return;
        }


    let data = ",";
    coursesSelected.map(
      (course) => (data += "," + course.coursecode + "," + course.semester)
    );


        
     await fetch(
            "save/" + username + "," + profileName + "/" + data + "/" + newProfileName
    ).then(setFetchSucceeded(true));

    setTimeout(() => setFetchSucceeded(false), 2000);

        if (newProfileName != "false") {
            setSelectedProfileName(newProfileName);
        } else {
            if (selectedProfileCoursesIsLocalStorage && editableText) {
                console.log("här");
                setSelectedProfileName(profileName);
                setSelectedProfileCoursesIsLocalStorage(false);

                setSelectedCourses(vetenskaplig_metod);
                setTest(!test);

            }
        }



    setTemporaryProfileNameUpdateProfile("");
    setTemporarySelectedCoursesUpdateProfile([]);
        setEditableText(false);

    setTest(!test);
  };

  const onDelete = async () => {
    const username1 = username + "," + selectedProfileName;
    await fetch("delete/" + username1).then(console.log("deleted"));
    setSelectedProfileCourses(selectedCourses);
    setSelectedProfileName(localStorageProfileName);
    setSelectedProfileCoursesIsLocalStorage(true);
    setTest(!test);
  };

  return (
    <div>
      <Backdrop onClose={() => setBackdrop(false)} open={backdrop}>
        <div
          style={{
            width: "400px",
            backgroundColor: "white",
            position: "relative",
            padding: "1rem",
          }}
        >
          <h1 className="save_changes">
            Vill du spara dina ändringar till "
            {temporaryProfileNameUpdateProfile}"?
          </h1>{" "}
          <br />
          <button
            onClick={function () {
              onSave();
              setBackdrop(false);
            }}
            className="upper_header_link"
          >
            Spara ändringar
            <FontAwesomeIcon
              className="upper_header_icon"
              icon={faArrowsRotate}
            />
          </button>
          <div className="close_button_container">
            <div className="close_button" onClick={() => setBackdrop(false)}>
              X
            </div>
          </div>
        </div>
      </Backdrop>

      {fetchSucceeded ? (
        <div className="profile_update_succeeded">
          <h4>Profil uppdaterad</h4>
        </div>
      ) : null}

      <div className="my_courses_header">
        <div className="upper_header">
          <Link to="/" className="upper_header_link">
            {" "}
            <FontAwesomeIcon className="upper_header_icon" icon={faArrowLeft} />
            Hitta fler kurser{" "}
          </Link>
          {isloggedin ? (
            <div className="upper_header_link_right_section">
              {selectedProfileCoursesIsLocalStorage ? (
                <button
                  onClick={onSave}
                  className="upper_header_link upper_header_link_margin"
                >
                  Spara ny profil
                  <FontAwesomeIcon
                    className="upper_header_icon"
                    icon={faHeart}
                  />
                </button>
              ) : (
                <>
                  <button
                    onClick={onSave}
                    className="upper_header_link upper_header_link_margin"
                  >
                    Uppdatera profil
                    <FontAwesomeIcon
                      className="upper_header_icon"
                      icon={faArrowsRotate}
                    />
                  </button>

                  <button onClick={onDelete} className="upper_header_link">
                    {" "}
                    Ta bort profil{" "}
                    <FontAwesomeIcon
                      className="upper_header_icon"
                      icon={faTrashCan}
                    />
                  </button>
                </>
              )}
            </div>
          ) : (
            <h1 className="upper_header_link not_logged_in">
              Logga in för att spara profil
            </h1>
          )}
        </div>

        <h3 className="profile_name">
          {" "}
          {editableText ? (
            <input
              className="select_profile"
              type="text"
              onChange={(e) => onChangeProfileName(e)}
              placeholder={
                selectedProfileCoursesIsLocalStorage
                  ? localStorageProfileName
                  : selectedProfileName
              }
            />
          ) : (
            <select
              className="select_profile"
              onChange={(e) => onChangeSelectedProfile(e)}
            >
              <option value={localStorageProfileName}>
                {localStorageProfileName}
              </option>
              {profiles.map((profile, index) => (
                <option
                  key={index}
                  selected={
                    profile.name === selectedProfileName ? "selected" : ""
                  }
                  value={profile.name}
                >
                  {profile.name}
                </option>
              ))}
            </select>
          )}

                  { isloggedin? 
                      <> {editableText ? null  : <FontAwesomeIcon
                          onClick={editName}
                          className="change_profile_name_icon"
                          icon={faPen}
                      />
                      }</> : null
                  }

        </h3>

        <h6
          className={
            showErrorMessage
              ? "profilename_error profilename_show_error"
              : "profilename_error"
          }
        >
          Ange annat profilnamn
              </h6>
              {isloggedin && selectedProfileCoursesIsLocalStorage ?
                  <h6 className="save_profile_explanation_text">Detta är en temporär profil. Ge den ett nytt namn och klicka på "Spara profil" för att spara den till din samling av profiler.</h6>
                  :
                  null
              }
        <ToggleOverviewButton
          showOverview={showOverview}
          setShowOverview={setShowOverview}
          showMatrix={showMatrix}
          setShowMatrix={setShowMatrix}
        />
      </div>
      {showMatrix ? (
        <TableMatrix
          selectedCourses={selectedCourses}
          setSelectedCourses={setSelectedCourses}
          courses={courses}
          setSelectedProfileCourses={setSelectedProfileCourses}
          selectedProfileCourses={selectedProfileCourses}
        />
      ) : showOverview ? (
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
          selectedProfileCoursesIsLocalStorage={
            selectedProfileCoursesIsLocalStorage
          }
        />
      )}

      {showOverview ? (
        <OverviewTerms selectedCourses={selectedProfileCourses} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyCourses;
