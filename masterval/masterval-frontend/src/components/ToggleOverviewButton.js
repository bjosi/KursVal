import "../styles/MyCourses.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faMagnifyingGlass,
    faBookOpen,
} from "@fortawesome/free-solid-svg-icons";


const ToggleOverviewButton = ({ showOverview, setShowOverview }) => {

    const onToggle = props => {
        if (props != showOverview) {
            setShowOverview(!showOverview);
        }
    }

    return (
        <>
            <div className='toggle_overview'>
                <span className='toggle_button' onClick={() => onToggle(false)}> <FontAwesomeIcon className='toggle_icon' icon={faBookOpen} />Mina terminer </span>
                <span className='toggle_button' onClick={() => onToggle(true)}> <FontAwesomeIcon className='toggle_icon' icon={faMagnifyingGlass} /> Översikt</span>
            </div>
            <div className='underline_toggle_overview'>
                <div className={showOverview ? 'underline_left' : 'underline_left underline_selected'}></div>
                <div className={showOverview ? 'underline_right underline_selected' : 'underline_right'}></div>
            </div>
        </>
    )
}

export default ToggleOverviewButton;