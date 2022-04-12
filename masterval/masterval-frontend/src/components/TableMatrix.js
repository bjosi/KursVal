import "../styles/MyCourses.css"

import { useRef, useState } from "react";

const TableMatrix = ({ selectedCourses}) => {
    const kunskaper = ["Mal", '1.1', '1.2', '1.3', '1.4', '1.5', '2.1', '2.2','2.3', '2.4', '2.5','3.1', '3.2', '3.3','4.1', '4.2', '4.3', '4.4',
        '4.5', '4.6', '5.1', '5.2', '5.3', '5.4', '5.5'];

    
    const greendiv = {
        width: '4rem',
        height: '2.5rem',
        textalign: 'center',
        fontfamily: '"Lato", sans - serif',
        border: '1px solid black',
        padding: '1em',
        backgroundcolor : 'green'
}

    const normaldiv = {
        width: '4rem',
        height: '2.5rem',
        textalign: 'center',
    fontfamily: '"Lato", sans - serif',
    border: '1px solid black',
    padding: '1em'

    }

    const Make_arr = ({ input }) => {

        var arr = [];
        console.log("input:");
        console.log(input);
        var splited = input.uChosen.split(",");
        console.log(splited);
        
        var count = 0;

        if (input != undefined) {

            for (var i = 1; i < kunskaper.length; i++) {
                if (splited[count] === kunskaper[i]) {

                    arr.push( true);
                    
                    count++;
                }
                else {
                    arr.push( false);
                }
            }
        }
        console.log(arr);
        return (<>
            <div className="vertical_div"><p> {input.coursecode} </p></div>
            {arr.map((s) => (
                s? <div className="vertical_div_g"><p> X </p></div> :
                    <div className="vertical_div"><p></p></div> 
            ))}
            </>
            )
    }
    
    return (
        <div className="table_matrix">


            <div className="table_vertical" >


            {kunskaper.map((block) => (
                <div className="vertical_div_k"><p>{block}</p></div>
            ))}


            </div>


            
                {selectedCourses.map((s) => (
                    <div className="table_vertical" >

                    <Make_arr input={s} />


                    </div>
                ))}



           
    </div>

    );
};

/*
 <div className="table_vertical" >
                    {s.map((block) => (
                        <div className="vertical_div"><p>{block}</p></div>
                    ))}

 * */

export default TableMatrix;
