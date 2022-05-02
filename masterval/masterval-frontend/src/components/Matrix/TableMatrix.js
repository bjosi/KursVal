import React from "react";
import "./Matrix.css";
import Matrix from "./Matrix";
import MatrixInfo from "./MatrixInfo";

const TableMatrix = ({
  selectedCourses,
  courses,
  setSelectedCourses,
  selectedProfileCourses,
  setSelectedProfileCourses,
}) => {
  const kunskaper = [
    "Mål",
    "1.1",
    "1.2",
    "1.3",
    "1.4",
    "1.5",
    "2.1",
    "2.2",
    "2.3",
    "2.4",
    "2.5",
    "3.1",
    "3.2",
    "3.3",
    "4.1",
    "4.2",
    "4.3",
    "4.4",
    "4.5",
    "4.6",
    "5.1",
    "5.2",
    "5.3",
    "5.4",
    "5.5",
  ];
    const uppfyllda = [];
    var vertical_div_k = {
        backgroundColor: "Black",
    };
    const hover = () => {
        vertical_div_k = {
            backgroundColor: "DodgerBlue",
        };
    }

    const leave = () => {
        vertical_div_k = {
            backgroundColor: "Yellow",
        };
    }


  const MakeArr = ({ input }) => {
    const arr = [];
    const splited = input.uChosen.split(",");
    var count = 0;

    if (input !== undefined) {
      for (var i = 1; i < kunskaper.length; i++) {
        if (splited[count] === kunskaper[i]) {
          arr.push(true);
          uppfyllda[i] = kunskaper[i];
          count++;
        } else {
          arr.push(false);
        }
      }
    }

    return (
        <>
            <div className="vertical_div_k" style={vertical_div_k}>
          <p className="p_tag"> {input.coursecode} </p>
        </div>
        {arr.map((s, index) =>
            s ? (
                <div key={index} className="vertical_div_g" onMouseEnter={hover()} onMouseLeave={leave()}></div>
            ) : (
                    <div className="vertical_div" key={index} onMouseEnter={hover()} onMouseLeave={leave()} >
              <p></p>
            </div>
          )
        )}
      </>
    );
  };

  return (
      <>
          {selectedProfileCourses.length === 0 ? <> </> :
              <Matrix
                  kunskaper={kunskaper}
                  MakeArr={MakeArr}
                  selectedCourses={selectedCourses}
                  selectedProfileCourses={selectedProfileCourses}
              />}
      <MatrixInfo
        selectedCourses={selectedCourses}
        setSelectedCourses={setSelectedCourses}
        uppfyllda={uppfyllda}
        kunskaper={kunskaper}
        courses={courses}
        setSelectedProfileCourses={setSelectedProfileCourses}
        selectedProfileCourses={selectedProfileCourses}
      />
    </>
  );
};

export default TableMatrix;
