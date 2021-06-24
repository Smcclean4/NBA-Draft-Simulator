import React from 'react';
import axios from 'axios';
import './App.css';

async function getUser() {
    try {
      const response = await axios.get('/user?ID=12345');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

export default getUser