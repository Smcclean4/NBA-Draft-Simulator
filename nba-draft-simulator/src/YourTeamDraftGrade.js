import React from 'react';
import './App.css';

class YourTeamDraftGrade extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            TeamName : { 
            TeamPickNumber: 16,
            TeamPickName : []
            }
        }
        
    }

render() {

    const YourTeam = this.state.TeamName.TeamPickName;
    const YourTeamList = YourTeam.map((YourTeam, index) => <li className="your-pick" key={index} value={index}>{index + 1 + '. ' + YourTeam}</li>);

    return (
        <div className="one-two flex-container">
                
                    <ul className="your-pick-ul">
                    {YourTeamList}
                    </ul>


                                                                                                              
            <div className="your-draft-grade">
                <h2>Curent NBA Draft Grade:</h2>
                <p className="draft-grade">B+</p>
                <button><a href="#2">Reset Draft Simulator</a></button>
                <button><a href="#2">Generate Current Draft Class</a></button>
            </div>

        </div> 
    );
}
}


export default YourTeamDraftGrade;