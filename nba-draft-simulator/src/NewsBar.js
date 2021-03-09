import React from 'react';
import './App.css';

class NewsBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            picks: []
        }
    }
    render() {
        return(
            <div className="PickList">
                <li>JUST</li>
                <li>{this.state.picks}</li>
                <li>AN</li>
                <li>{this.state.picks}</li>
                <li>EXAMPLE</li>
            </div>
        );
    }
}

export default NewsBar;