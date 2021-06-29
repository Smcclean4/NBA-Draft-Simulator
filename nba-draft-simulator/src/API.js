import React from 'react';
import axios from 'axios';
import './App.css';

async function getUser() {
    try {
      const response = await axios.get('https://api-nba-v1.p.rapidapi.com/seasons/')
        console.log(response.data)
    } catch (error) {
        console.log(error)
    }
  }

export default getUser()