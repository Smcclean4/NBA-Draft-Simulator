import React from 'react';
import './App.css';

class DraftablePlayers extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            wizards: {
                logo:"https://i.imgur.com/GdzXJPu.png"
            },
            bulls: {
                logo:"https://i.imgur.com/GdzXJPu.png"
            },
            pelicans: {
                logo:"https://i.imgur.com/GdzXJPu.png"
            },
            warriors: {
                logo:"https://i.imgur.com/GdzXJPu.png"
            },
            timberwolves: {
                logo:"https://i.imgur.com/GdzXJPu.png"
            },
        }
    }

    render() {
        return (
            <div className='drafted-players'>
                <p>Drafted Players</p>
            <div className='DraftPlayers flex-container'>
                    <div>
                        <ul>
                            <p className="first-round">1st Round</p>
                            <li className='playerName'><img src={this.state.wizards.logo}/>1. B Smith</li>
                            <li className='playerName'><img src={this.state.bulls.logo}/>2. B Smith</li>
                            <li className='playerName'><img src={this.state.pelicans.logo}/>3. B Smith</li>
                            <li className='playerName'><img src={this.state.warriors.logo}/>4. B Smith</li>
                            <li className='playerName'><img src={this.state.timberwolves.logo}/>5. B Smith</li>
                            <li className='playerName'>6. B Smith</li>
                            <li className='playerName'>7. B Smith</li>
                            <li className='playerName'>8. B Smith</li>
                            <li className='playerName'>9. B Smith</li>
                            <li className='playerName'>10. B Smith</li>
                            <li className='playerName'>11. B Smith</li>
                            <li className='playerName'>12. B Smith</li>
                            <li className='playerName'>13. B Smith</li>
                            <li className='playerName'>14. B Smith</li>
                            <li className='playerName'>15. B Smith</li>
                            <li className='playerName'>16. B Smith</li>
                            <li className='playerName'>17. B Smith</li>
                            <li className='playerName'>18. B Smith</li>
                            <li className='playerName'>19. B Smith</li>
                            <li className='playerName'>20. B Smith</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='playerName'>21. B Smith</li>
                            <li className='playerName'>22. B Smith</li>
                            <li className='playerName'>23. B Smith</li>
                            <li className='playerName'>24. B Smith</li>
                            <li className='playerName'>25. B Smith</li>
                            <li className='playerName'>26. B Smith</li>
                            <li className='playerName'>27. B Smith</li>
                            <li className='playerName'>28. B Smith</li>
                            <li className='playerName'>29. B Smith</li>
                            <li className='playerName'>30. B Smith</li>
                            <p className='second-round'>2nd Round</p>
                            <li className='playerName'>31. B Smith</li>
                            <li className='playerName'>32. B Smith</li>
                            <li className='playerName'>33. B Smith</li>
                            <li className='playerName'>34. B Smith</li>
                            <li className='playerName'>35. B Smith</li>
                            <li className='playerName'>36. B Smith</li>
                            <li className='playerName'>37. B Smith</li>
                            <li className='playerName'>38. B Smith</li>
                            <li className='playerName'>39. B Smith</li>
                            <li className='playerName'>40. B Smith</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className='playerName'>41. B Smith</li>
                            <li className='playerName'>42. B Smith</li>
                            <li className='playerName'>43. B Smith</li>
                            <li className='playerName'>44. B Smith</li>
                            <li className='playerName'>45. B Smith</li>
                            <li className='playerName'>46. B Smith</li>
                            <li className='playerName'>47. B Smith</li>
                            <li className='playerName'>48. B Smith</li>
                            <li className='playerName'>49. B Smith</li>
                            <li className='playerName'>50. B Smith</li>
                            <li className='playerName'>51. B Smith</li>
                            <li className='playerName'>52. B Smith</li>
                            <li className='playerName'>53. B Smith</li>
                            <li className='playerName'>54. B Smith</li>
                            <li className='playerName'>55. B Smith</li>
                            <li className='playerName'>56. B Smith</li>
                            <li className='playerName'>57. B Smith</li>
                            <li className='playerName'>58. B Smith</li>
                            <li className='playerName'>59. B Smith</li>
                            <li className='playerName'>60. B Smith</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default DraftablePlayers;