import React from 'react';
import './App.css';

class DraftablePlayers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        TeamName: {
                TeamLogo : <img src= "https://i.imgur.com/GdzXJPu.png"/>,
                TeamDraftee : "Alucard Von Mooney"
            }
        }
    }

    // create algorith for name and logo insertion 
    // create algorithm to handle logos being displayed and also players names being picked
    // apply list aspect from news bar here to shorten list...?? 

    render() {

        return (
            <div className='drafted-players'>
                <p>Drafted Players</p>
            <div className='DraftPlayers flex-container'>
                    <div>
                        <ul>
                            <p className="first-round">1st Round</p>
                            <li className='playerName'>{this.state.TeamName.TeamLogo}1. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>{this.state.TeamName.TeamLogo}2. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>{this.state.TeamName.TeamLogo}3. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>{this.state.TeamName.TeamLogo}4. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>{this.state.TeamName.TeamLogo}5. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>{this.state.TeamName.TeamLogo}6. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>7. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>8. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>9. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>10. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>11. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>12. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>13. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>14. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>15. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>16. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>17. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>18. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>19. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>20. {this.state.TeamName.TeamDraftee}</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='playerName'>21. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>22. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>23. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>24. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>25. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>26. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>27. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>28. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>29. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>30. {this.state.TeamName.TeamDraftee}</li>
                            <p className='second-round'>2nd Round</p>
                            <li className='playerName'>31. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>32. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>33. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>34. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>35. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>36. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>37. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>38. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>39. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>40. {this.state.TeamName.TeamDraftee}</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='playerName'>41. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>42. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>43. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>44. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>45. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>46. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>47. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>48. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>49. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>50. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>51. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>52. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>53. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>54. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>55. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>56. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>57. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>58. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>59. {this.state.TeamName.TeamDraftee}</li>
                            <li className='playerName'>60. {this.state.TeamName.TeamDraftee}</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DraftablePlayers;