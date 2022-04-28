import "../styles/MyCourses.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBookOpen,
  faGolfBall,
  faL,
} from "@fortawesome/free-solid-svg-icons";

const ToggleOverviewButton = ({
  showOverview,
  setShowOverview,
  showMatrix,
  setShowMatrix,
}) => {
  const onToggle = (props) => {
    // if (props != showOverview) {
    //   setShowOverview(!showOverview);
    //   console.log(showOverview);
    // }
    setShowMatrix(false);
    setShowOverview(false);
  };

  return (
    <div className="toggle_overview_wrapper">
      <div className="toggle_overview">
        <span className="toggle_button" onClick={() => onToggle()}>
          <div className="title">
            {" "}
            <FontAwesomeIcon className="toggle_icon" icon={faBookOpen} />
            Mina terminer
          </div>
          <div className="underline_toggle_overview">
            <div
              className={
                showOverview || showMatrix
                  ? "underline_left"
                  : "underline_left underline_selected"
              }
            ></div>
          </div>
        </span>
        <span
          className="toggle_button"
          onClick={() => {
            setShowOverview(false);
            setShowMatrix(true);
          }}
        >
          <div className="title">
            <FontAwesomeIcon className="toggle_icon" icon={faGolfBall} />
            Programmål
          </div>
          <div className="underline_toggle_overview">
            <div
              onClick={() => setShowMatrix(true)}
              className={
                showMatrix
                  ? "underline_left underline_selected  "
                  : "underline_right"
              }
            ></div>
          </div>
        </span>
        <span
          className="toggle_button"
          onClick={() => {
            setShowMatrix(false);
            setShowOverview(true);
          }}
        >
          <div className="title">
            {" "}
            <FontAwesomeIcon
              className="toggle_icon"
              icon={faMagnifyingGlass}
            />{" "}
            Översikt
          </div>
          <div className="underline_toggle_overview">
            <div
              onClick={() => setShowOverview(true)}
              className={
                showOverview
                  ? "underline_right underline_selected"
                  : "underline_right"
              }
            ></div>
          </div>
        </span>
      </div>
      <div className="gray_line"></div>
    </div>
  );
};

export default ToggleOverviewButton;
