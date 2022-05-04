import DisplayOverViewTerms from "../components/DisplayOverViewTerms";
import "../styles/OverViewTerms.css";

const OverviewTerms = ({ selectedCourses }) => {
  const newListtermone = selectedCourses.filter((item) => item.semester === 7);
  const newListtermtwo = selectedCourses.filter((item) => item.semester === 8);
  const newListtermtre = selectedCourses.filter((item) => item.semester === 9);

  return (
    <>
      <h1 className="title">Översikt över terminer</h1>
      <div className="two_overview">
        {newListtermone.length > 0 ? (
          <DisplayOverViewTerms theterm={newListtermone} sem={7} />
        ) : (
          <> </>
        )}

        {newListtermtwo.length > 0 ? (
          <DisplayOverViewTerms theterm={newListtermtwo} sem={8} />
        ) : (
          <> </>
        )}
      </div>
      {newListtermtre.length > 0 ? (
        <div className="one_overview">
          <DisplayOverViewTerms theterm={newListtermtre} sem={9} />
        </div>
      ) : (
        <> </>
      )}
    </>
  );
};
export default OverviewTerms;
