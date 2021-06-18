import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import NewsBar from './NewsBar';
import PickOrder from './PickOrder';
import DraftablePlayers from './DraftablePlayers';
import * as serviceWorker from './serviceWorker';
import YourTeamDraftGrade from './YourTeamDraftGrade';
import TeamName from './TeamName';
import Footer from './Footer';

// import NBA API Here
class API extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      loading: true
    } 
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <NewsBar />
    <PickOrder />
    <DraftablePlayers />
    <YourTeamDraftGrade />
    <TeamName />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
