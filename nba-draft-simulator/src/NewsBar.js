import React from 'react';
import './App.css';

class NewsBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picks: ['This', 'is', 'Just', 'a', 'Money', 'Holder', 'and', 'this', 'will', 'show', 'the', 'draft'
        , 'picks', 'that', 'have', 'been', 'chosen']
        }
    }
    render() {
        const thePicks = this.state.picks
            const theList = thePicks.map((thePicks, index) => <li className="ticker-item" key={index}>{index + 1 + '. ' + thePicks}</li>);
            console.log(theList)
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