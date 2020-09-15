import React from 'react';
import './App.css';

function PickOrder() {

    const nbaTeam = ['Clevland', 'OKC', 'Warriors', 'Lakers']; // API teams will go here 
    // state will go here and inbetween keys
    const teamLogo = 'https://i.imgur.com/GdzXJPu.png'
    return (
        <div className="PickOrder flex-container">
           <div className='teamSection' key='1' value='1'>
                <p>1.</p>
                <img className='teamLogo' src= {teamLogo} />
           </div>
           <div className='teamSection' key='2' value='2'>
                <p>2.</p> 
                <img className='teamLogo' src= {teamLogo} />
           </div>
           <div className='teamSection' key='3' value='3'>
                <p>3.</p>  
                <img className='teamLogo' src= {teamLogo} />
           </div>
           <div className='teamSection' key='4' value='4'>
                <p>4.</p>    
                <img className='teamLogo' src= {teamLogo} />
           </div>
           <div className='teamSection' key='5' value='5'>
                <p>5.</p>  
                <img className='teamLogo' src= {teamLogo} />
           </div>
           <div className='teamSection' key='6' value='6'>
                <p>6.</p> 
                <img className='teamLogo' src= {teamLogo} />
           </div>
        </div>
    );
}

export default PickOrder;