import "../styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightToBracket,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const ToggleLoginButton = ({
  showOverview,
  setShowOverview,
  seterrorlogin,
  seterrorpassword,
  seterrosignup,
}) => {
  const onToggle = (props) => {
    if (props != showOverview) {
      setShowOverview(!showOverview);
    }
    seterrosignup(false);
    seterrorpassword(false);
    seterrorlogin(false);
  };

  return (
    <div className="toggle_overview_wrapper">
      <div className="toggle_overview">
        <span className="toggle_button" onClick={() => onToggle()}>
          <div className="title">
            {" "}
            <FontAwesomeIcon
            className="toggle_icon"
            icon={faArrowRightToBracket}
          />
          Logga in
          </div>
          <div className="underline_toggle_overview">
            <div
              className={
                showOverview
                  ? "underline_left"
                  : "underline_left underline_selected"
              }
            ></div>
          </div>
        </span>
        <span
          className="toggle_button"
          onClick={() => {
            onToggle(true);
          }}
        >
          <div className="title">
          <FontAwesomeIcon
            className="toggle_icon"
            icon={faArrowRightFromBracket}
          />{" "}
          Skapa användare
          </div>
          <div className="underline_toggle_overview">
            <div
              onClick={() => onToggle(true)}
              className={
                showOverview
                  ? "underline_left underline_selected  "
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

export default ToggleLoginButton;
