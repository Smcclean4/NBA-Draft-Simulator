import React from 'react';
import './App.css';

class PickOrder extends React.Component {

     constructor(props) {
          super(props);

          this.state = {
               teamOne: {
                    name: "",
                    logo: <img alt="" src=""/>
               },
               teamTwo: {
                    name: "",
                    logo: <img alt="" src=""/>
               },
               teamThree: {
                    name: "",
                    logo: <img alt="" src=""/>
               },
               teamFour: {
                    name: "",
                    logo: <img alt="" src=""/>
               }
          }
     }

     render() {
          const axios = require('axios')

          async function setTeam() {
               try {
                    var response = axios.get('https://www.balldontlie.io/api/v1/teams')
                    var randomNumber = Math.floor(Math.random() * 5)
                    var randomTeam = response
                    console.log(randomTeam)
               } catch(error) {
                    console.log(error)
               }
          }

          setTeam()

          return (
               <div className="PickOrder flex-container">
                    <div className='teamSection' key='1' value='1'>
                         <p>1.</p>{this.state.teamOne.name}
                         {this.state.teamOne.logo}
                    </div>
                    <div className='teamSection' key='2' value='2'>
                         <p>2.</p>{this.state.teamTwo.name}
                         {this.state.teamTwo.logo}
                    </div>
                    <div className='teamSection' key='3' value='3'>
                         <p>3.</p>{this.state.teamThree.name}
                         {this.state.teamThree.logo}
                    </div>
                    <div className='teamSection' key='4' value='4'>
                         <p>4.</p>{this.state.teamFour.name}   
                         {this.state.teamFour.logo}
                    </div>
               </div>
          )
     }
}

export default PickOrder;