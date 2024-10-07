// App.js
import React from 'react';
import Scorecard from './components/ScoreCard/ScoreCard';
import matchData from './data/data.json';
import './App.css'

function App() {
  return (
    <div className="App">
      <div style={{ fontSize:'20px',fontWeight:500}}>{matchData?.result}</div>
      <Scorecard data={matchData} />
    </div>
  );
}

export default App;
