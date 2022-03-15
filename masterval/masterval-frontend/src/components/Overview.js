import "../styles/MyCourses.css"


const Overview = ({ selectedCourses, setSelectedCourses }) => {

    let totalHP = 0;
    let percentageTotalHP = 0;
    let totalAdvancedHP = 0;
    let mediaAdvancedHP = 0;
    let dataAdvancedHP = 0;

    if (selectedCourses) {
        selectedCourses.map((course) => totalHP += course.coursepoints);
        percentageTotalHP = Math.round(100 * totalHP / 90);

        const advancedCourses = selectedCourses.filter((course) => course.courselevel.includes('Avancerad'));
        advancedCourses.map((course) => totalAdvancedHP += course.coursepoints);

        const mediaAdvancedCourses = advancedCourses.filter((course) => course.area.includes('Medieteknik'));

        if (mediaAdvancedCourses.length > 0) {
            mediaAdvancedCourses.map((course) => mediaAdvancedHP += course.coursepoints);
        }

        const dataAdvancedCourses = advancedCourses.filter((course) => course.area.includes('Datateknik'));

        if (dataAdvancedCourses.length > 0) {
            dataAdvancedCourses.map((course) => dataAdvancedHP += course.coursepoints);
        }

    }

    return (<div className='overview'>
       <p> {percentageTotalHP}% av 90 HP uppfyllt</p>
        <p>  {totalAdvancedHP} av 60HP pa avancerad niva </p>
        <p> {mediaAdvancedHP} av 30HP pa avancerad niva inom medieteknik</p>
        <p> {dataAdvancedHP} av 30HP pa avancerad niva inom datateknik</p>

    </div>)
}



export default Overview;