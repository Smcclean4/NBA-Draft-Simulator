import React, { useState, useEffect } from 'react';
import './App.css';

const PickOrder = () => {
     const [data, setData] = useState(null);
     const [data2, setData2] = useState(null);
     const [data3, setData3] = useState(null);
     const [data4, setData4] = useState(null);
     
     useEffect( () => {
          async function fetchData(url) {
          const response = await fetch(url);
          const teams = await response.json();
          console.log(teams)
          const rando = Math.floor(Math.random() * 29);
          setData(teams.data[`${rando}`].name);
          }
          fetchData('https://www.balldontlie.io/api/v1/teams');
     },[]);

     useEffect( () => {
          async function fetchData(url) {
          const response = await fetch(url);
          const teams = await response.json();
          const rando = Math.floor(Math.random() * 29);
          setData2(teams.data[`${rando}`].name);
          }
          fetchData('https://www.balldontlie.io/api/v1/teams');
     },[]);

     useEffect( () => {
          async function fetchData(url) {
          const response = await fetch(url);
          const teams = await response.json();
          const rando = Math.floor(Math.random() * 29);
          setData3(teams.data[`${rando}`].name);
          }
          fetchData('https://www.balldontlie.io/api/v1/teams');
     },[]);

     useEffect( () => {
          async function fetchData(url) {
          const response = await fetch(url);
          const teams = await response.json();
          const rando = Math.floor(Math.random() * 29);
          setData4(teams.data[`${rando}`].name);
          }
          fetchData('https://www.balldontlie.io/api/v1/teams');
     },[]);

     return (
          <div className="PickOrder flex-container">
               <div className="teamSection" key="1" value="1">
                    <p>1.
                    {data}
                    </p>
               </div>
               <div className="teamSection" key="2" value="2">
                    <p>2.
                    {data2}
                    </p>
               </div>
               <div className="teamSection" key="3" value="3">
                    <p>3.
                    {data3}
                    </p>
               </div>
               <div className="teamSection" key="4" value="4">
                    <p>4.
                    {data4}
                    </p>
               </div>
          </div>
   );
};

export default PickOrder 