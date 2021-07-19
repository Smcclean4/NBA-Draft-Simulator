import React, { useState, useEffect } from 'react';
import './App.css';

const PickOrder = () => {
     const [data, setData] = useState(null);
     
     useEffect( () => {
          async function fetchData(url) {
          const response = await fetch(url);
          const teams = await response.json();
          // const rando = Math.floor(Math.random() * 30);
          const [item] = teams.data;
          console.log(item);
          setData(item);
          }
          fetchData('https://www.balldontlie.io/api/v1/teams');
     },[]);

     return (
          <div className="PickOrder flex-container">
               <div className="teamSection" key="1" value="1">
                    <p>1.</p>
                    <div>{data}</div>
               </div>
               <div className="teamSection" key="2" value="2">
                    <p>2.</p>

               </div>
               <div className="teamSection" key="3" value="3">
                    <p>3.</p>

               </div>
               <div className="teamSection" key="4" value="4">
                    <p>4.</p>

               </div>
          </div>
   );
};

export default PickOrder 

// class PickOrder extends React.Component {

//      constructor(props) {
//           super(props);

//           this.state = {
//                teamOne: {
//                     name: "",
//                     logo: <img alt="" src=""/>
//                },
//                teamTwo: {
//                     name: "",
//                     logo: <img alt="" src=""/>
//                },
//                teamThree: {
//                     name: "",
//                     logo: <img alt="" src=""/>
//                },
//                teamFour: {
//                     name: "",
//                     logo: <img alt="" src=""/>
//                }
//           }
//      }

//      render() {
//           const axios = require('axios')

//           async function setTeam(url) {
//                try {
//                     var response = await axios.get(url)
//                     var randomNumber = Math.floor(Math.random() * 30)
//                     if (randomNumber === randomNumber) {
//                          Math.floor(Math.random() * 30)
//                     }
//                     var randomTeam = response.data.data[`${randomNumber}`].city
//                     console.log(randomTeam)
//                } catch(error) {
//                     console.log(error)
//                }
//           }

//           setTeam('https://www.balldontlie.io/api/v1/teams')

//           return (
//                <div className="PickOrder flex-container">
//                     <div className='teamSection' key='1' value='1'>
//                          <p>1.</p>{this.state.teamOne.name}
//                          {this.state.teamOne.logo}
//                     </div>
//                     <div className='teamSection' key='2' value='2'>
//                          <p>2.</p>{this.state.teamTwo.name}
//                          {this.state.teamTwo.logo}
//                     </div>
//                     <div className='teamSection' key='3' value='3'>
//                          <p>3.</p>{this.state.teamThree.name}
//                          {this.state.teamThree.logo}
//                     </div>
//                     <div className='teamSection' key='4' value='4'>
//                          <p>4.</p>{this.state.teamFour.name}   
//                          {this.state.teamFour.logo}
//                     </div>
//                </div>
//           )
//      }
// }

// export default PickOrder;