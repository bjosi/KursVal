import "../styles/OverViewTerms.css";

const DisplayOverViewTerms = ({ theterm, sem }) => {
  const newListperiodone = theterm.filter((item) => item.period === "1");
  const newListperiodtwo = theterm.filter((item) => item.period === "2");
  const newListPeriodOneAndTwo = theterm.filter(
    (item) => item.period === "1,2"
  );
  var periodonebigger = true;
  var diff = 0;
  const arr = [];
  if (newListperiodtwo < newListperiodone) {
    periodonebigger = true;
    diff = newListperiodone - newListperiodtwo;
  } else {
    periodonebigger = false;
    diff = newListperiodtwo - newListperiodone;
  }

  for (var i = 0; i < diff; i++) {
    arr.push("");
  }

  return (
    <>
      <div className="the_box_big">
        {sem === 7 ? (
          <h2 className="h2_overview"> Hösttermin, åk 4 </h2>
        ) : (
          <> </>
        )}
        {sem === 8 ? (
          <h2 className="h2_overview"> Vårtermin, åk 4 </h2>
        ) : (
          <> </>
        )}

        {sem === 9 ? (
          <h2 className="h2_overview"> Hösttermin, åk 5 </h2>
        ) : (
          <> </>
        )}

        <div className="the_box">
          <div className="period_one">
            <div className="div_one_or_two">
              {" "}
              <p>Period 1</p>{" "}
            </div>
            {newListperiodone.map((course, index) => (
              <div className="div_one_or_two" key={index}>
                {" "}
                {course.coursename}{" "}
              </div>
            ))}
            {periodonebigger ? (
              <> </>
            ) : (
              arr.map(() => <div className="div_one_or_two"> </div>)
            )}
          </div>

          <div className="period_two">
            <div className="div_one_or_two">
              {" "}
              <p>Period 1</p>{" "}
            </div>
            {newListperiodtwo.map((course, index) => (
              <div className="div_one_or_two" key={index}>
                {" "}
                {course.coursename}{" "}
              </div>
            ))}
          </div>
        </div>

        <div className="period_two_one">
          {newListPeriodOneAndTwo.map((course, index) => (
            <div className="div_one_and_two" key={index}>
              {" "}
              {course.coursename}{" "}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayOverViewTerms;
