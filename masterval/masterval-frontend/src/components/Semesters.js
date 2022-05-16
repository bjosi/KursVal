import "../styles/MyCourses.css";
import DisplayPeriod from "../components/DisplayPeriod";
import SemesterSelector from "../components/SemesterSelector";
import ProgressBar from "./ProgressBar";

import React, { useState } from "react";

const Semesters = ({
  selectedCourses,
  setSelectedCourses,
  setSelectedProfileCourses,
  selectedProfileCourses,
  selectedProfileCoursesIsLocalStorage,
}) => {
  const [semester, setSemester] = useState(7);

  let HPPerSemester = 0;

  const coursesInSemester = selectedProfileCourses.filter(
    (course) => course.semester === semester
  );
  // const coursesInSemester = selectedProfileCourses.map((course) => console.log(course.semester));

  const CollisionOfBlocks = ({}) => {
    const corsesInPeriod1Block1 = selectedProfileCourses.filter(
      (item) =>
        item.semester === semester &&
        (item.courseblock === "1" ||
          item.courseblock === "1,1" ||
          item.courseblock === "1,2" ||
          item.courseblock === "1,3" ||
          item.courseblock === "1,4") &&
        (item.period === "1" || item.period === "1,2")
    );
    const corsesInPeriod1Block2 = selectedProfileCourses.filter(
      (item) =>
        item.semester === semester &&
        (item.courseblock === "2" ||
          item.courseblock === "2,1" ||
          item.courseblock === "2,2" ||
          item.courseblock === "2,3" ||
          item.courseblock === "2,4") &&
        (item.period === "1" || item.period === "1,2")
    );
    const corsesInPeriod1Block3 = selectedProfileCourses.filter(
      (item) =>
        item.semester === semester &&
        (item.courseblock === "3" ||
          item.courseblock === "3,1" ||
          item.courseblock === "3,2" ||
          item.courseblock === "3,3" ||
          item.courseblock === "3,4") &&
        (item.period === "1" || item.period === "1,2")
    );
    const corsesInPeriod1Block4 = selectedProfileCourses.filter(
      (item) =>
        item.semester === semester &&
        (item.courseblock === "4" ||
          item.courseblock === "4,1" ||
          item.courseblock === "4,2" ||
          item.courseblock === "4,3" ||
          item.courseblock === "4,4") &&
        (item.period === "1" || item.period === "1,2")
    );
    const corsesInPeriod2Block1 = selectedProfileCourses.filter(
      (item) =>
        item.semester === semester &&
        (item.courseblock === "1" ||
          item.courseblock === "1,1" ||
          item.courseblock === "2,1" ||
          item.courseblock === "3,1" ||
          item.courseblock === "4,1") &&
        (item.period === "2" || item.period === "1,2")
    );
    const corsesInPeriod2Block2 = selectedProfileCourses.filter(
      (item) =>
        item.semester === semester &&
        (item.courseblock === "2" ||
          item.courseblock === "1,2" ||
          item.courseblock === "2,2" ||
          item.courseblock === "3,2" ||
          item.courseblock === "4,2") &&
        (item.period === "2" || item.period === "1,2")
    );
    const corsesInPeriod2Block3 = selectedProfileCourses.filter(
      (item) =>
        item.semester === semester &&
        (item.courseblock === "3" ||
          item.courseblock === "1,3" ||
          item.courseblock === "2,3" ||
          item.courseblock === "3,3" ||
          item.courseblock === "4,3") &&
        (item.period === "2" || item.period === "1,2")
    );
    const corsesInPeriod2Block4 = selectedProfileCourses.filter(
      (item) =>
        item.semester === semester &&
        (item.courseblock === "4" ||
          item.courseblock === "1,4" ||
          item.courseblock === "2,4" ||
          item.courseblock === "3,4" ||
          item.courseblock === "4,4") &&
        (item.period === "2" || item.period === "1,2")
    );

    const corseshej = selectedProfileCourses.filter((item) =>
      console.log(item)
    );

    let collisionCounter = 0;
    if (corsesInPeriod1Block1.length > 1) collisionCounter++;
    if (corsesInPeriod1Block2.length > 1) collisionCounter++;
    if (corsesInPeriod1Block3.length > 1) collisionCounter++;
    if (corsesInPeriod1Block4.length > 1) collisionCounter++;
    if (corsesInPeriod2Block1.length > 1) collisionCounter++;
    if (corsesInPeriod2Block2.length > 1) collisionCounter++;
    if (corsesInPeriod2Block3.length > 1) collisionCounter++;
    if (corsesInPeriod2Block4.length > 1) collisionCounter++;

    console.log(corsesInPeriod2Block4);
    return (
      <div className="semester_block_collision_container">
        <div className="semester_block_collision">
          {collisionCounter > 0 ? (
            <div className="semester_block_collision">
              <div className="warning_box">OBS!</div> Block-krock under:{" "}
            </div>
          ) : (
            ""
          )}
          <ul>
            {corsesInPeriod1Block1.length > 1 ? (
              <div className="semester_block_collision">
                <Dot />
                <div className="text"> Period 1, block 1</div>
              </div>
            ) : (
              ""
            )}
            {corsesInPeriod1Block2.length > 1 ? (
              <div className="semester_block_collision">
                <Dot />
                <div className="text"> Period 1, block 2</div>
              </div>
            ) : (
              ""
            )}
            {corsesInPeriod1Block3.length > 1 ? (
              <div className="semester_block_collision">
                <Dot />
                <div className="text"> Period 1, block 3</div>
              </div>
            ) : (
              ""
            )}
            {corsesInPeriod1Block4.length > 1 ? (
              <div className="semester_block_collision">
                <Dot />
                <div className="text"> Period 1, block 4</div>
              </div>
            ) : (
              ""
            )}
            {corsesInPeriod2Block1.length > 1 ? (
              <div className="semester_block_collision">
                <Dot />
                <div className="text"> Period 2, block 1</div>
              </div>
            ) : (
              ""
            )}
            {corsesInPeriod2Block2.length > 1 ? (
              <div className="semester_block_collision">
                <Dot />
                <div className="text"> Period 2, block 2</div>
              </div>
            ) : (
              ""
            )}
            {corsesInPeriod2Block3.length > 1 ? (
              <div className="semester_block_collision">
                <Dot />
                <div className="text"> Period 2, block 3</div>
              </div>
            ) : (
              ""
            )}
            {corsesInPeriod2Block4.length > 1 ? (
              <div className="semester_block_collision">
                <Dot />
                <div className="text"> Period 2, block 4</div>
              </div>
            ) : (
              ""
            )}
          </ul>
        </div>
      </div>
    );
  };

  coursesInSemester.map((course) => (HPPerSemester += course.coursepoints));
  return (
    <>
      <div className="semester_header">
        <SemesterSelector semester={semester} setSemester={setSemester} />
        <h1> Högskolepoäng </h1>
        <div className="progress_bar_wrapper">
          <ProgressBar progress={HPPerSemester / 30} isSmall={true} />
          <h2 className="semester_header_text">{HPPerSemester} av 30HP</h2>
        </div>

        {HPPerSemester >= 30 ? (
          <h2 className="semester_header_small_text">
            Grattis, du har valt kurser på helfart för terminen
          </h2>
        ) : (
          <h2 className="semester_header_small_text">
            {" "}
            Du har {30 - HPPerSemester} HP kvar för att läsa på helfart den här
            terminen
          </h2>
        )}

        <CollisionOfBlocks></CollisionOfBlocks>
      </div>

      <DisplayPeriod
        courseinfo={selectedProfileCourses}
        setSelectedCourses={setSelectedCourses}
        selectedCourses={selectedCourses}
        setSelectedProfileCourses={setSelectedProfileCourses}
        selectedProfileCourses={selectedProfileCourses}
        homePage={false}
        semester={semester}
        selectedProfileCoursesIsLocalStorage={
          selectedProfileCoursesIsLocalStorage
        }
      />
    </>
  );
};

const Dot = ({}) => {
  return <div className="dot"></div>;
};

export default Semesters;
