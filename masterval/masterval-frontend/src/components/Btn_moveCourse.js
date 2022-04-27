import "../styles/DisplayCourse.css";
import "../Pages/Browse.css";
import React, { useState, useEffect } from "react";
import Backdrop from "./Backdrop/Backdrop.js";
import "./Backdrop/Backdrop.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCaretRight } from "@fortawesome/free-solid-svg-icons";


const Btn_moveCourse = ({ courseinfo, setSelectedCourses, selectedCourses,
    setSelectedProfileCourses,
    selectedProfileCourses, selectedProfileCoursesIsLocalStorage,}) => {

    const [backdrop, setBackdrop] = useState(false);

    let newTerm;

    console.log(selectedCourses);
    console.log(selectedProfileCourses);
    if (courseinfo.semester === 7) {
        newTerm = 9
    } else {
        newTerm = 7
    }

  //  const isLocalStorage = JSON.stringify(selectedCourses) === JSON.stringify(selectedProfileCourses);
    useEffect(() => {
        console.log("rad 28");
        console.log(selectedProfileCoursesIsLocalStorage);
        if (selectedProfileCoursesIsLocalStorage) {
            console.log("rad 30");
            setSelectedProfileCourses(selectedCourses);
        }
    }, [selectedCourses]);
   
    const handleConfirm = () => {

        if (selectedProfileCoursesIsLocalStorage) {
            console.log("hör");
            setSelectedCourses(
                selectedCourses.map(item =>
                    item.coursecode === courseinfo.coursecode
                        ? { ...item, semester: newTerm }
                        : item
                )
            );
        } else {
            setSelectedProfileCourses(
                selectedProfileCourses.map(item =>
                    item.coursecode === courseinfo.coursecode
                        ? { ...item, semester: newTerm }
                        : item
                ))
        }
        setBackdrop(false);
    }


    return( <>
        <button className={courseinfo.semester === 8 ? 'btn-movecoursehidden' : "btn-movecourse"}
            onClick={()=>setBackdrop(true)}> <FontAwesomeIcon icon={faSquareCaretRight} /> </button>


        <Backdrop onClose={() => setBackdrop(false)} open={backdrop}>
            <div style={{}}>
                <div className="box">
                    <div className="close_button_container">
                        <div className="close_button" onClick={() => setBackdrop(false)}>
                            X
                        </div>
                    </div>
                    <p> Vill du flytta kursen till termin {newTerm}? </p>
                    <button onClick={handleConfirm}>Okej</button>
                    <button onClick={() => setBackdrop(false)}>Avbryt</button>
                </div>
            </div>
        </Backdrop>


    </>
  );
};

//<button className="btn-movecourse" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}> 	&rarr; </button>

export default Btn_moveCourse;
