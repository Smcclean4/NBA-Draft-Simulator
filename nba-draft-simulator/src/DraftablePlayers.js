import React from 'react';
import './App.css';

// const Players = "Cade Cunningham, Jalen Green, Evan Mobley, Scottie Barnes, Jalen Suggs, Josh Giddey, Jonathan Kuminga, Franz Wagner, Davion Mitchell, Ziaire Williams, James Bouknight, Joshua Primo, Chris Duarte, Moses Moody, Corey Kispert, Alperen Sengun, Trey Murphy, Tre Mann, Kai Jones, Jalen Johnson, Keon Johnson, Isaiah Jackson, Usman Garuba, Josh Christopher, Quentin Grimes, Nah’Shon Hyland, Cameron Thomas, Jaden Springer, Day’Ron Sharpe, Santi Aldama, Isaiah Todd, Jeremiah Robinson-Earl, Jason Preston, Rokas Jokubaitis, Herbert Jones, Miles McBride, JT Thor, Ayo Dosunmu, Neemias Queta, Jared Butler, Joe Wieskamp, Isaiah Livers, Greg Brown, Kessler Edwards, Juhann Begarin, Dalano Banton, David Johnson, Sharife Cooper, Marcus Zegarowski, Filip Petrusev, BJ Boston, Luka Garza, Charles Bassey, Sandro Mamukelashvili, Aaron Wiggins, Scottie Lewis, Balsa Koprivica, Jericho Sims, RaiQuan Gray, Georgios Kalaitzakis"

// const first = "Cade, Jalen, Evan, Scottie, Jalen, Josh, Jonathan, Franz, Davion, Ziaire, James, Joshua, Chris, Moses, Cory, Alperen, Trey, Tre, Kai, Jalen, Keon, Isaiah, Usman, Josh, Quentin, Nah'shon, Cameron, Jaden, Day'Ron, Santi, Isaiah, Jeremiah, Jason, Joe, Isaiah, Greg, Kessler, Juhann, Dalano, David, Sharife, Marcus, Filip, BJ, Luka, Charles, Sandro, Aaron, Scottie, Balsa, Jericho, RaiQuan, Georgios"

// const last = "Cunningham, Green, Mobley, Barnes, Suggs, Giddey, Kuminga, Wagner, Mitchell, Williams, Bouknight, Primo, Duarte, Moody, Kispert, Sengun, Murphy, Mann, Jones, Johnson, Johnson, Jackson, Garuba, Christopher, Grimes, Hyland, Thomas, Springer, Sharpe, Aldama, Todd, Robinson-Earl, Preston, Jokubaitis, Jones, Mcbride, Thor, Dosunmu, Queta, Butler, Wieskamp, Livers, Brown, Edwards, Begarin, Banton, Johnson, Cooper, Zegarowski, Petrusev, Boston, Garza, Bassey, Mamukelashvili, Wiggins, Lewis, Koprivica, Sims, Gray, Kalaitzakis"

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
        const rookies = await response.json()
        console.log(rookies)
        }
        fetchPlayerName(`https://www.balldontlie.io/api/v1/players/?search=lamelo_ball`)
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