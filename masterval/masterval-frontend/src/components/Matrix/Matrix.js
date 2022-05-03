import React from "react";
import "./Matrix.css";

const Matrix = ({
  kunskaper,
  MakeArr,
  selectedCourses,
  selectedProfileCourses,
}) => {

    const ret = (inp, index) => {

        const idd = "hej" + index;
        if (inp === false) {
            return (
                <div className="vert" ></div>
            )
        }
        else if (inp === true) {
            return (
                <div className="vertical_div_g"  ></div>
            )
        }
        else {
            return (
                <div className="vertical_div_k"  >{inp}</div>
                )
        }
    }

    const test = (inp, index) => {
        const arr = [];
        for (let i = 0; i < selectedProfileCourses.length; i++) {
            arr.push(inp[i]);
        }
        return (<div className="horisontal" > {arr.map((s) => (ret(s, index)))}</div>)
    }

    const testet = () => {
        const arr = [];
        for (let i = 0; i < selectedProfileCourses.length; i++) {
            arr.push(selectedProfileCourses[i].coursecode);
        }

        return (<div className="horisontal" > {arr.map((s) => (ret(s, 0)))}</div>)
    }

    const onhov = () => {
     //   document.getElementById('vert').style.backgroundColor = 'red';
        console.log("hej");
    }

    return (
        <div className="the_matrix">

            <div className="table_vertical">
                {kunskaper.map((block, index) => (
                    
                    <div key={index} className="vertical_div_k"  >
                        <p className="p_tag">{block}</p>
                    </div>
                ))}
            </div>

            <div className="the_matrix_igen">

                {testet()}
                {MakeArr.map((s, index) => (
                    test(s, index)
                ))}

            </div>
        </div>
    
  );
};

/*        <div className="the_matrix">
         <div className="table_vertical">
        {kunskaper.map((block, index) => (
          <div key={index} className="vertical_div_k">
                <p className="p_tag">{block}</p>
          </div>
        ))}

      </div>
      <div className="the_matrix">
        <div className="table_vertical">
          {kunskaper.map((block, index) => (
            <div key={index} className="vertical_div_k">
              <p className="p_tag">{block}</p>
            </div>
          ))}
        </div>

        </div>*/

        

export default Matrix;
