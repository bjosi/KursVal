import React from "react";

const MatrixInfo = ({ uppfyllda, kunskaper }) => {
  return (
    <>
      <h2>Ej uppfyllda mål: </h2>

      {kunskaper.map((mål) => {
        if (!uppfyllda.includes(mål)) {
          return (
            <>
              <li>{mål}</li>
            </>
          );
        }
      })}
    </>
  );
};

export default MatrixInfo;
