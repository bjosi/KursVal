import React from 'react'

const ProgressBar = ({ progress,isSmall }) => {
    var prog = progress;
    if (prog > 1) {
        prog = 1;
    }
    prog = prog * 100;

    const Childdiv = {
        height: '100%',
        width: `${prog}%`,
        backgroundColor: '#F9A26C',
        borderRadius: '0.1rem',
        textAlign: 'right'
    }

    const progresstext = {
        padding: 5,
        color: 'black',
        fontWeight: 400
    }

    return (
        <div className={isSmall ? 'progressbar_parent_small' : 'progressbar_parent' } >
            <div style={Childdiv}>
                <span style={progresstext}></span>
            </div>
        </div>
    )
}

export default ProgressBar;