import React from 'react';
import './App.css';

class DraftablePlayers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        TeamName: {
                TeamDraftee : ["Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney","Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney","Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney","Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney"
            ,"Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney","Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney", "Alucard Von Mooney" ]
            },
        TeamName2: {
                TeamDraftee2 : ["Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez"
            , "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez", "Blake Martinez"] 
        }
        }
    }

    // create algorith for name and logo insertion 
    // create algorithm to handle logos being displayed and also players names being picked

    render() {

        const theTeam = this.state.TeamName.TeamDraftee;

        const thePlayers = theTeam.map((theTeam, index) => <li className="playerName" key={index} value={index}>{index + 1 + '. ' + theTeam}</li>);

        const theTeam2 = this.state.TeamName2.TeamDraftee2;

        const thePlayersRd2 = theTeam2.map((theTeam2, index) => <li className="playerName" key={index} value={index}>{index + 1 + '. ' + theTeam2}</li>);

        return (
            <div className='drafted-players'>
                <p>Drafted Players</p>
            <div className='DraftPlayers flex-container'>
                    <div>
                        <ul>
                            <p className="first-round">1st Round</p>
                            {thePlayers}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <p className='second-round'>2nd Round</p>
                            {thePlayersRd2}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DraftablePlayers;