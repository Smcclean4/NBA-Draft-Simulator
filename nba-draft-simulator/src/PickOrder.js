import React from 'react';
import './App.css';

class PickOrder extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               teamOne: {
                    name: 'Wizards',
                    logo: 'https://i.imgur.com/GdzXJPu.png'
               },
               teamTwo: {
                    name: 'Magic',
                    logo: 'https://i.imgur.com/GdzXJPu.png'
               },
               teamThree: {
                    name: 'Rockets',
                    logo: 'https://i.imgur.com/GdzXJPu.png'
               },
               teamFour: {
                    name: 'Timberwolves',
                    logo: 'https://i.imgur.com/GdzXJPu.png'
               }
          }
     }

     render() {
          return (
               <div className="PickOrder flex-container">
                    <div className='teamSection' key='1' value='1'>
                         <p>1. {this.state.teamOne.name}</p>
                         <img className='teamLogo' src= {this.state.teamOne.logo} />
                    </div>
                    <div className='teamSection' key='2' value='2'>
                         <p>2. {this.state.teamTwo.name}</p> 
                         <img className='teamLogo' src= {this.state.teamTwo.logo} />
                    </div>
                    <div className='teamSection' key='3' value='3'>
                         <p>3. {this.state.teamThree.name}</p>  
                         <img className='teamLogo' src= {this.state.teamThree.logo} />
                    </div>
                    <div className='teamSection' key='4' value='4'>
                         <p>4.{this.state.teamFour.name}</p>    
                         <img className='teamLogo' src= {this.state.teamFour.logo} />
                    </div>
               </div>
          )
     }
}

export default PickOrder;