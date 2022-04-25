import React from "react";

const Matrix = ({ kunskaper, MakeArr, selectedCourses }) => {
  return (
    <div className="table_matrix">
      <div className="table_vertical">
        {kunskaper.map((block, index) => (
          <div key={index} className="vertical_div_k">
            <p>{block}</p>
          </div>
        ))}
      </div>

      {selectedCourses.map((s, index) => (
        <div key={index} className="table_vertical">
          <MakeArr input={s} />
        </div>
      ))}
    </div>
  );
};

export default Matrix;
