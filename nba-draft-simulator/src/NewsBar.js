import React from 'react';
import './App.css';

function NewsBar() {
    const pick = [];
    return (
        <div className="PickList">
            <li>JUST</li>
            <li>{pick}</li>
            <li>AN</li>
            <li>{pick}</li>
            <li>EXAMPLE</li>
        </div>
    );
}

export default NewsBar;