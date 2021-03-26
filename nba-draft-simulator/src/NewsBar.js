import React from 'react';
import './App.css';

class NewsBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picks: ['This', 'is', 'Just', 'a', 'Money', 'Holder']
        }
    }
    render() {
        const thePicks = this.state.picks
            // make a key for theList elements
            const theList = thePicks.map((thePicks, index) => <li key={index}>{index + 1 + '. ' + thePicks}</li>);
            console.log(theList)
        return (
            <div className="PickList">
                <ul>{theList}</ul>
            </div>
        )
    }
}

export default NewsBar;