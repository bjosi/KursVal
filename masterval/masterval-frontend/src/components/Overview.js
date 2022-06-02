import "../styles/MyCourses.css";

//F�r prograss bar
//https://www.npmjs.com/package/react-circular-progressbar
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import ProgressBar from "./ProgressBar";

const Overview = ({ selectedCourses, selectedProfileName }) => {
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
    selectedCourses.map((course) => (totalHP += course.coursepoints));
    percentageTotalHP = Math.round((100 * totalHP) / 90);

    const advancedCourses = selectedCourses.filter((course) =>
      course.courselevel.includes("Avancerad")
    );
    advancedCourses.map((course) => (totalAdvancedHP += course.coursepoints));

    const mediaAdvancedCourses = advancedCourses.filter((course) =>
      course.area.includes("Medieteknik")
    );

    if (mediaAdvancedCourses.length > 0) {
      mediaAdvancedCourses.map(
        (course) => (mediaAdvancedHP += course.coursepoints)
      );
    }

    if (HPMissing <= 0) {
      HPMissing = 0;
    }

    const dataAdvancedCourses = advancedCourses.filter((course) =>
      course.area.includes("Datateknik")
    );

    if (dataAdvancedCourses.length > 0) {
      dataAdvancedCourses.map(
        (course) => (dataAdvancedHP += course.coursepoints)
      );
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

  return (
    <div className="overview">
      <h1 className="title">Översikt över {selectedProfileName}</h1>
      <div className="the_progress_bars">
        <div className="cirkular_progressbar_wrapper">
          <h2 className="center">Totalt HP</h2>
          <CircularProgressbarWithChildren
            className="circular_progressbar"
            value={percentageTotalHP}
          >
            <div className="text_in_progressbar">
              <p className="bold_text_progressbar"> {percentageTotalHP}% </p>
              <p className="center"> av HP uppfyllt </p>
            </div>
          </CircularProgressbarWithChildren>
          <p className="center">{totalHP} av 90 HP</p>
        </div>
        <div className="vertical_progressbar">
          <div className="div_display_progress">
            <p className="bold_text"> Kurser p&aring; avancerad nivå </p>
            <ProgressBar progress={totalAdvancedHP / 60} />
            <p className="normal_text"> {totalAdvancedHP} av 60 HP </p>
          </div>

          <div className="div_display_progress">
            <p className="bold_text">
              {" "}
              Kurser p&aring; avancerad nivå inom medieteknik
            </p>
            <ProgressBar progress={mediaAdvancedHP / 30} />
            <p className="normal_text"> {mediaAdvancedHP} av 30 HP</p>
          </div>

          <div className="div_display_progress">
            <p className="bold_text">
              {" "}
              Kurser p&aring; avancerad nivå inom datateknik
            </p>
            <ProgressBar progress={dataAdvancedHP / 30} />
            <p className="normal_text"> {dataAdvancedHP} av 30 HP </p>
          </div>
        </div>
      </div>

      <div className="div_summary">
        <p className="summary_bold_text"> Sammanfattning:</p>

        <div className="div_summary_text">
          {HPMissing !== 0 ? (
            <p className="summary_normal_text">
              {" "}
              &#8226; {HPMissing} HP saknas totalt{" "}
            </p>
          ) : (
            <></>
          )}

          {advancedHPMissing !== 0 ? (
            <p className="summary_normal_text">
              {" "}
              &#8226; {advancedHPMissing} HP på avancerad nivå saknas.{" "}
            </p>
          ) : (
            <></>
          )}

          {mediaAdvancedHPMissing !== 0 ? (
            <p className="summary_normal_text">
              {" "}
              &#8226; {mediaAdvancedHPMissing} HP på avancerad nivå saknar för
              examen inom medieteknik.{" "}
            </p>
          ) : (
            <></>
          )}

          {dataAdvancedHPMissing !== 0 ? (
            <p className="summary_normal_text">
              {" "}
              &#8226; {dataAdvancedHPMissing} HP på avancerad nivå saknar för
              examen inom datateknik.{" "}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Overview;
