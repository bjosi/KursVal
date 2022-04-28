import "../styles/DisplayCourse.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import SlideInCard from "../components/SlideInCard/SlideInCard";

const Btn_addcourse = ({ courseinfo, setSelectedCourses, selectedCourses }) => {

  const[slideInCard, setSlideInCard] = useState(false);

  function handleSubmit(setSelectedCourses, selectedCourses, courseinfo) {
    var myFilter = selectedCourses.filter(
      (item) => item.coursecode !== courseinfo.coursecode
    );
    if (!myFilter.includes(courseinfo)) {
      var allCourses = myFilter.concat(courseinfo);
      var uniqueSet = new Set(allCourses);
      var uniqueArray = Array.from(uniqueSet);
      setSelectedCourses(uniqueArray);
    }
    setSlideInCard(true);
  }

  return (
    <>
    <button onClick={()=> setSlideInCard(true)}>hej</button>
    <SlideInCard setSlideInCard={setSlideInCard} slideInCard={slideInCard}>Kursen tillagd</SlideInCard>
    <button
      onClick={() =>
        handleSubmit(setSelectedCourses, selectedCourses, courseinfo)
      }
    >
      <FontAwesomeIcon className="add_course_icon " icon={faSquarePlus} />
    </button>
    </>
  );
};

export default Btn_addcourse;
