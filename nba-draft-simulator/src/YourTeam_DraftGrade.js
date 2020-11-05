import React from 'react';
import './App.css';

function YourTeam_DraftGrade () {

    return (
        <div className="one-two flex-container">
            <div className="your-team">
                    <ul>
                    <li className="your-pick">1. Player Name</li>
                    <li className="your-pick">2. Player Name</li>
                    <li className="your-pick">3. Player Name</li>
                    <li className="your-pick">4. Player Name</li>
                    <li className="your-pick">5. Player Name</li>
                    <li className="your-pick">6. Player Name</li>
                    <li className="your-pick">7. Player Name</li>
                    </ul>
                    <ul>
                    <li className="your-pick">8. Player Name</li>
                    <li className="your-pick">9. Player Name</li>
                    <li className="your-pick">10. Player Name</li>
                    <li className="your-pick">11. Player Name</li>
                    <li className="your-pick">12. Player Name</li>
                    <li className="your-pick">13. Player Name</li>
                    <li className="your-pick">14. Player Name</li>
                    </ul>
                <div className="your-team-name">
                        <h2>San Diego Sabers</h2>
                </div>                                                                                            
            </div>
            <div className="your-draft-grade">
                <h2>Curent NBA Draft Grade:</h2>
                <p className="draft-grade">B+</p>
                <button><a href="">Reset Draft Simulator</a></button>
                <button><a href="">Generate Current Draft Class</a></button>
            </div>
        </div>
    );
}

export default YourTeam_DraftGrade;