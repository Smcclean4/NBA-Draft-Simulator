import './App.css';
import React from 'react';

var axios = require("axios").default;

var whatYouWant = "seasons/"

var options = {
  method: 'GET',
  url: "https://api-nba-v1.p.rapidapi.com/" + whatYouWant,
  headers: {
    'x-rapidapi-key': '8123b49e6emsh62c326ed3f752a8p1fafaejsnf08931728b5f',
    'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

const TeamName = (props) => {
    return <p>{props.team}</p>
}

const TeamLogo = (props) => {
    return <img alt="" className='teamLogo' src= {props.logo} />
}

export {
    TeamName,
    TeamLogo
}