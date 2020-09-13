import React from 'react';
import './App.css';

function PickOrder() {

    const nbaTeam = ['Clevland', 'OKC', 'Warriors', 'Lakers']; // API teams will go here 
    // state will go here and inbetween keys
    
    return (
        <div className="PickOrder">
           <div key='1' value='1'>

           </div>
           <div key='2' value='2'>
                
           </div>
           <div key='3' value='3'>
                
           </div>
           <div key='4' value='4'>
                
           </div>
           <div key='5' value='5'>
                
           </div>
           <div key='6' value='6'>
                
           </div>
        </div>
    );
}

export default PickOrder;