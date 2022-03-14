import React from "react";

const Popup = props => {
    return (
        
        <div className="popup-box">
            <div className="box">
                <span className="close-icon" onClick={props.handleClose}>x</span>
                <p> Vill du flytta kursen till termin {props.newTerm}? </p>
                <button onClick={props.handleConfirm}>Okej</button>
            </div>

        </div>

    );
};

export default Popup;