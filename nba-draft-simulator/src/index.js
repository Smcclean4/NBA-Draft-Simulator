import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import NewsBar from './NewsBar';
import PickOrder from './PickOrder';
import DraftablePlayers from './DraftablePlayers';
import * as serviceWorker from './serviceWorker';
import YourTeam_DraftGrade from './YourTeam_DraftGrade';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <NewsBar />
    <PickOrder />
    <DraftablePlayers />
    <YourTeam_DraftGrade />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
