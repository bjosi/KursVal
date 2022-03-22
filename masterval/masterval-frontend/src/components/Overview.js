import "../styles/MyCourses.css"

//För prograss bar
//https://www.npmjs.com/package/react-circular-progressbar
import { CircularProgressbarWithChildren } from 'react-circular-progressbar';
import ProgressBar from "./ProgressBar";


const Overview = ({ selectedCourses, setSelectedCourses }) => {

    let totalHP = 0;
    let percentageTotalHP = 0;
    let totalAdvancedHP = 0;
    let mediaAdvancedHP = 0;
    let dataAdvancedHP = 0;
    let HPMissing = 0;
    let advancedHPMissing = 0;
    let mediaAdvancedHPMissing = 0;
    let dataAdvancedHPMissing = 0;

    if (selectedCourses) {
        selectedCourses.map((course) => totalHP += course.coursepoints);
        percentageTotalHP = Math.round(100 * totalHP / 90);

        const advancedCourses = selectedCourses.filter((course) => course.courselevel.includes('Avancerad'));
        advancedCourses.map((course) => totalAdvancedHP += course.coursepoints);

        const mediaAdvancedCourses = advancedCourses.filter((course) => course.area.includes('Medieteknik'));

        if (mediaAdvancedCourses.length > 0) {
            mediaAdvancedCourses.map((course) => mediaAdvancedHP += course.coursepoints);
        }

        if (HPMissing <= 0) {
            HPMissing = 0;
        }

        const dataAdvancedCourses = advancedCourses.filter((course) => course.area.includes('Datateknik'));

        if (dataAdvancedCourses.length > 0) {
            dataAdvancedCourses.map((course) => dataAdvancedHP += course.coursepoints);
        }

        HPMissing = 90 - totalHP;
        advancedHPMissing = 60 - totalAdvancedHP;
        mediaAdvancedHPMissing = 30 - mediaAdvancedHP;
        dataAdvancedHPMissing = 30 - dataAdvancedHP;


        if (HPMissing <= 0) {
            HPMissing = 0;
        }

        if (advancedHPMissing <= 0) {
            advancedHPMissing = 0;
        }
        if (mediaAdvancedHPMissing <= 0) {
            mediaAdvancedHPMissing = 0;
        }
        if (dataAdvancedHPMissing <= 0) {
            dataAdvancedHPMissing = 0;
        }
    }

    return (<div className='overview'>

        <div className="the_progress_bars">
        <div className='cirkular_progressbar'>
            <CircularProgressbarWithChildren value={percentageTotalHP}  >
                <div className="text_in_progressbar">

                    <p className="bold_text_progressbar" > {percentageTotalHP}%  </p>
                    <p className="bold_text" > av HP uppfyllt </p>
                </div>

            </CircularProgressbarWithChildren>
        </div>
        <div className='vertical_progressbar'> 

            <div className="div_display_progress"> 
            <p className="bold_text">  Kurser p&aring; avancerad niva </p>
            <ProgressBar progress={totalAdvancedHP/60} />
            <p className="normal_text">  {totalAdvancedHP} av 60 HP </p>
            </div>


            <div className="div_display_progress">

                <p className="bold_text">  Kurser p&aring;  avancerad niva inom medieteknik</p>
            <ProgressBar progress={mediaAdvancedHP/30} />
                <p className="normal_text"> {mediaAdvancedHP} av 30 HP</p>
            </div>
            

            <div className="div_display_progress">

                <p className="bold_text">  Kurser p&aring;  avancerad niva inom datateknik</p>
            <ProgressBar progress={dataAdvancedHP/30} />
                <p className="normal_text"> {dataAdvancedHP} av 30 HP </p>
                </div>
            </div>
        </div>

        <div className="div_summary">

            <p className="summary_bold_text">  Sammanfattning</p>

            <div className="div_summary_text">
                <p className="summary_normal_text"> &#8226; {HPMissing} HP saknas. </p>

                <p className="summary_normal_text"> &#8226; {advancedHPMissing} HP p&aring; avanserad niv&aring; saknas. </p>

                <p className="summary_normal_text"> &#8226; {mediaAdvancedHPMissing} HP p&aring; avanserad niv&aring; saknas f&#246;r examen inom medieteknik. </p>

                <p className="summary_normal_text"> &#8226; {dataAdvancedHPMissing} HP p&aring; avanserad niv&aring; saknas f&#246;r examen inom datateknik. </p>
            </div>

                </div>

    </div>)
}



export default Overview;