import React from 'react';
import './App.css';

class NewsBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picks: []
            // figure out how to put picks into the news bar using props?
        }
    }
    render() {
        const thePicks = this.state.picks
        const theList = thePicks.map((thePicks, index) => <li className="ticker-item" key={index}>{index + 1 + '. ' + thePicks}</li>);
        return (
            <div className="PickList">
                <div className="ticker-wrap">
                    <div className="ticker-move">
                        {theList}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsBar;