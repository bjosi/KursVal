import "../styles/MyCourses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

const SemesterSelector = ({ semester, setSemester }) => {
  const retstring = () => {
    if (semester === 7) return "Hösttermin, åk 4";
    else if (semester === 8) return "Vårterming, åk 4";
    else return "Hösttermin, åk 5";
  };

  const onClick = (props) => {
    if (props === "increase") {
      if (semester !== 9) {
        setSemester(++semester);
      }
    } else {
      //decrease
      if (semester !== 7) {
        setSemester(--semester);
      }
    }
  };

  return (
    <div className="semester_selector">
      <span onClick={() => onClick("decrease")}>
        {" "}
        <FontAwesomeIcon
          className={
            semester === 7 ? "arrow_icon arrow_icon_disabled" : "arrow_icon"
          }
          icon={faAngleLeft}
        />
      </span>
      {retstring()}
      <span onClick={() => onClick("increase")}>
        {" "}
        <FontAwesomeIcon
          className={
            semester === 9 ? "arrow_icon arrow_icon_disabled" : "arrow_icon"
          }
          icon={faAngleRight}
        />{" "}
      </span>
    </div>
  );
};

export default SemesterSelector;
