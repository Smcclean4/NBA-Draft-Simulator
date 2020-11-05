import React from 'react';
import './App.css';

function DraftGrade () {

    return (
        <div className="two">
        <div className="your-draft-grade flex-container">
            <h2>Curent NBA Draft Grade:</h2>
            <p className="draft-grade">B+</p>
            <button><a href="">Reset Draft Simulator</a></button>
            <button><a href="">Generate Current Draft Class</a></button>
        </div>
        </div>
    );
}

export default DraftGrade;