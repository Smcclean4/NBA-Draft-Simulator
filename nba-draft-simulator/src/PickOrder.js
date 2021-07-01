import React from 'react';
import './App.css';



class PickOrder extends React.Component {

     constructor(props) {
          super(props);
          this.state = {
               teamOne: {
                    name: [],
                    logo: []
               },
               teamTwo: {
                    name: [],
                    logo: []
               },
               teamThree: {
                    name: [],
                    logo: []
               },
               teamFour: {
                    name: [],
                    logo: []
               }
          }
     }

     render() {
          return (
               <div className="PickOrder flex-container">
                    <div className='teamSection' key='1' value='1'>
                         <p>1.</p>{this.state.teamOne.name}
                         {this.state.teamOne.logo}
                    </div>
                    <div className='teamSection' key='2' value='2'>
                         <p>1.</p>{this.state.teamTwo.name}
                         {this.state.teamTwo.logo}
                    </div>
                    <div className='teamSection' key='3' value='3'>
                         <p>2.</p>{this.state.teamThree.name}
                         {this.state.teamThree.logo}
                    </div>
                    <div className='teamSection' key='4' value='4'>
                         <p>3.</p>{this.state.teamFour.name}   
                         {this.state.teamFour.logo}
                    </div>
               </div>
          )
     }
}

export default PickOrder;