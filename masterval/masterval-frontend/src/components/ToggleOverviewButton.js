import "../styles/MyCourses.css"


const ToggleOverviewButton = ({ showOverview, setShowOverview }) => {

    const onToggle = props => {
        if (props != showOverview) {
            setShowOverview(!showOverview);
        }
    }

    return (<div className='toggle_overview'>
        <span className={showOverview ? 'non_selected_togglebutton' : 'selected_togglebutton'}  onClick={() => onToggle(false)}>Mina terminer</span>
        <span className={showOverview ? 'selected_togglebutton' : 'non_selected_togglebutton'}  onClick={() => onToggle(true)}>Översikt</span>
    </div>)
}

export default ToggleOverviewButton;