import React from 'react';
import './App.css';

class DraftablePlayers extends React.Component {

    // const Players = "Cade Cunningham", "Jalen Green", "Evan Mobley", "Scottie Barnes", "Jalen Suggs", "Josh Giddey", "Jonathan Kuminga", "Franz Wagner", "Davion Mitchell", "Ziaire Williams", "James Bouknight", "Joshua Primo", "Chris Duarte", "Moses Moody", "Corey Kispert", "Alperen Sengun", "Trey Murphy", "Tre Mann", "Kai Jones", "Jalen Johnson", "Keon Johnson", "Isaiah Jackson", "Usman Garuba", "Josh Christopher", "Quentin Grimes", "Nah’Shon Hyland", "Cameron Thomas", "Jaden Springer", "Day’Ron Sharpe", "Santi Aldama", "Isaiah Todd", "Jeremiah Robinson-Earl", "Jason Preston", "Rokas Jokubaitis", "Herbert Jones", "Miles McBride", "JT Thor", "Ayo Dosunmu", "Neemias Queta", "Jared Butler", "Joe Wieskamp", "Isaiah Livers", "Greg Brown", "Kessler Edwards", "Juhann Begarin", "Dalano Banton", "David Johnson", "Sharife Cooper", "Marcus Zegarowski", "Filip Petrusev", "BJ Boston", "Luka Garza", "Charles Bassey", "Sandro Mamukelashvili", "Aaron Wiggins", "Scottie Lewis", "Balsa Koprivica", "Jericho Sims", "RaiQuan Gray", "Georgios Kalaitzakis"

    // const first = ["Cade", "Jalen", "Evan", "Scottie", "Jalen", "Josh", "Jonathan", "Franz", "Davion", "Ziaire", "James", "Joshua", "Chris", "Moses", "Cory", "Alperen", "Trey", "Tre", "Kai", "Jalen", "Keon", "Isaiah", "Usman", "Josh", "Quentin", "Nah'shon", "Cameron", "Jaden", "Day'Ron", "Santi", "Isaiah", "Jeremiah", "Jason", "Joe", "Isaiah", "Greg", "Kessler", "Juhann", "Dalano", "David", "Sharife", "Marcus", "Filip", "BJ", "Luka", "Charles", "Sandro", "Aaron", "Scottie", "Balsa", "Jericho", "RaiQuan", "Georgios"]

    // const last = ["Cunningham", "Green", "Mobley", "Barnes", "Suggs", "Giddey", "Kuminga", "Wagner", "Mitchell", "Williams", "Bouknight", "Primo", "Duarte", "Moody", "Kispert", "Sengun", "Murphy", "Mann", "Jones", "Johnson", "Johnson", "Jackson", "Garuba", "Christopher", "Grimes", "Hyland", "Thomas", "Springer", "Sharpe", "Aldama", "Todd", "Robinson-Earl", "Preston", "Jokubaitis", "Jones", "Mcbride", "Thor", "Dosunmu", "Queta", "Butler", "Wieskamp", "Livers", "Brown", "Edwards", "Begarin", "Banton", "Johnson", "Cooper", "Zegarowski", "Petrusev", "Boston", "Garza", "Bassey", "Mamukelashvili", "Wiggins", "Lewis", "Koprivica", "Sims", "Gray", "Kalaitzakis"]

    constructor(props) {
        super(props);

        this.state = {
        count: 0,

        TeamDraftee: ["Cade Cunningham", "Jalen Green", "Evan Mobley", "Scottie Barnes", "Jalen Suggs", "Josh Giddey", "Jonathan Kuminga", "Franz Wagner", "Davion Mitchell", "Ziaire Williams", "James Bouknight", "Joshua Primo", "Chris Duarte", "Moses Moody", "Corey Kispert", "Alperen Sengun", "Trey Murphy", "Tre Mann", "Kai Jones", "Jalen Johnson", "Keon Johnson", "Isaiah Jackson", "Usman Garuba", "Josh Christopher", "Quentin Grimes", "Nah’Shon Hyland", "Cameron Thomas", "Jaden Springer", "Day’Ron Sharpe", "Santi Aldama"],

        TeamDraftee2: ["Isaiah Todd", "Jeremiah Robinson-Earl", "Jason Preston", "Rokas Jokubaitis", "Herbert Jones", "Miles McBride", "JT Thor", "Ayo Dosunmu", "Neemias Queta", "Jared Butler", "Joe Wieskamp", "Isaiah Livers", "Greg Brown", "Kessler Edwards", "Juhann Begarin", "Dalano Banton", "David Johnson", "Sharife Cooper", "Marcus Zegarowski", "Filip Petrusev", "BJ Boston", "Luka Garza", "Charles Bassey", "Sandro Mamukelashvili", "Aaron Wiggins", "Scottie Lewis", "Balsa Koprivica", "Jericho Sims", "RaiQuan Gray", "Georgios Kalaitzakis"]
        }

    }
    
    render() {

        const theTeam = this.state.TeamDraftee;

        const thePlayersRd1 = []

        var intervalID = setInterval(function() {
            
            console.log(thePlayersRd1.push('money'))
            if (thePlayersRd1.length === 30) {
                clearInterval(intervalID)
            }
        }, 2000)

        console.log(thePlayersRd1)

        const theTeam2 = this.state.TeamDraftee2;

        const thePlayersRd2 = []

        theTeam2.forEach((theName2, index) => thePlayersRd2.push(<li className="playerName" key={index} value={index}>{`${index + 1 + theTeam.length}. ${theName2}`}</li>))

        return (
            <div className='drafted-players'>
                <p>Drafted Players</p>
            <div className='DraftPlayers flex-container'>
                    <div>
                        <ul>
                            <p className="first-round">1st Round</p>
                            {thePlayersRd1}
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