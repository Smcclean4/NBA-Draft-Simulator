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
    // trying to uderstand how I can implement promises into my forEach and setTimeout objects
    // in order to display players after 3 second delay into an <li> in players section.
    render() {
        
        return (
            <div className='drafted-players'>
                <p>Drafted Players</p>
            <div className='DraftPlayers flex-container'>
                    <div>
                        <ul>
                            <p className="first-round">1st Round</p>
                            {}
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <p className='second-round'>2nd Round</p>
                            {}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DraftablePlayers;