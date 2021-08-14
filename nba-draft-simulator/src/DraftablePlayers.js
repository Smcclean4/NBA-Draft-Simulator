import React from 'react';
import './App.css';

class DraftablePlayers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        count: 0,

        TeamName: {
                TeamDraftee : []
            },
        TeamName2: {
                TeamDraftee2 : []
        }
        }
    }

    componentDidMount() {
        async function fetchPlayerName(url) {
        const response = await fetch(url)
        const players = await response.json()
        console.log(players)
        }
        fetchPlayerName(`http://data.nba.net/10s/prod/v1/2016/players.json`)
    }

    // create algorith for name and logo insertion 
    // create algorithm to handle logos being displayed and also players names being picked

    render() {

        const theTeam = this.state.TeamName.TeamDraftee;

        const thePlayers = theTeam.map((theTeam, index) => <li className="playerName" key={index} value={index}>{index + 1 + '. ' + theTeam}</li>);

        const theTeam2 = this.state.TeamName2.TeamDraftee2;

        const thePlayersRd2 = theTeam2.map((theTeam2, index) => <li className="playerName" key={index} value={index}>{index + theTeam.length + 1 + '. ' + theTeam2}</li>);

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