import React from "react";
import "./Matrix.css";

const Matrix = ({
  kunskaper,
  MakeArr,
  selectedCourses,
  selectedProfileCourses,
}) => {
  return (
    <>
      <div className="matrix_title">
        <h1>Översikt över programmålsuppfyllnad</h1>
      </div>
      <div className="the_matrix">
        <div className="table_vertical">
          {kunskaper.map((block, index) => (
            <div key={index} className="vertical_div_k">
              <p className="p_tag">{block}</p>
            </div>
          ))}
        </div>

        <div className="table_matrix">
          {selectedProfileCourses.map((s, index) => (
            <div key={index} className="table_vertical">
              <MakeArr input={s} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Matrix;
