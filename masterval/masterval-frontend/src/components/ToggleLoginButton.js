import "../styles/login.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRightToBracket,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";


const ToggleLoginButton = ({ showOverview, setShowOverview, seterrorlogin, seterrorpassword, seterrosignup}) => {
    const onToggle = (props) => {
        if (props != showOverview) {
            setShowOverview(!showOverview);
        }
        seterrosignup(false); seterrorpassword(false);
        seterrorlogin(false);
    };

    return (
        <div className="toggle_overview_wrapper">
            <div className="toggle_overview">
                <span className="toggle_button" onClick={() => onToggle(false)}>
                    {" "}
                    <FontAwesomeIcon className="toggle_icon" icon={faArrowRightToBracket} />
                    Logga in
                </span>
                <span className="toggle_button" onClick={() => onToggle(true)}>
                    {" "}
                    <FontAwesomeIcon
                        className="toggle_icon"
                        icon={faArrowRightFromBracket}
                    />{" "}
                    Skapa användare
                </span>
            </div>
            <div className="underline_toggle_overview">
                <div
                    onClick={() => onToggle(false)}
                    className={
                        showOverview
                            ? "underline_left"
                            : "underline_left underline_selected"
                    }
                ></div>
                <div
                    onClick={() => onToggle(true)}
                    className={
                        showOverview
                            ? "underline_right underline_selected"
                            : "underline_right"
                    }
                ></div>
            </div>
        </div>
    );
};

export default ToggleLoginButton;
