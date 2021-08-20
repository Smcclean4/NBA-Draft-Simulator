import React from 'react';
import './App.css';

class DraftablePlayers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        count: 0,

        TeamDraftee: [],

        TeamDraftee2: []
        }
    }

    componentDidMount() {
        async function fetchPlayerName(url) {
        const response = await fetch(url)
        const items = await response.json()
        console.log(items)
        // get player data and loop throught it and place data inside of the draft board
        }
        fetchPlayerName(`https://www.balldontlie.io/api/v1/players/next_page?=2`)
    }

    // create algorith for name and logo insertion 
    // create algorithm to handle logos being displayed and also players names being picked

    render() {

        const theTeam = this.state.TeamDraftee;

        const thePlayers = theTeam.map((theTeam, index) => <li className="playerName" key={index} value={index}>{index + 1 + '. ' + theTeam}</li>);

        const theTeam2 = this.state.TeamDraftee2;

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