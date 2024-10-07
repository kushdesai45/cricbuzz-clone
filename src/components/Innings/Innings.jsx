import React from 'react';
import BatsmanList from '../Lists/BatsmanList'
import BowlerList from '../Lists/BowlerList';
import PowerPlay from '../PowerPlay/PowerPlay';
import './inning.css';

const Innings = ({ inning }) => {
  return (
    <div>
      <div className='inningDiv m10' >
      <p>{inning.team}</p>
      <p>{inning.totalScore}{inning.overs}</p>
      </div>
      <BatsmanList batsmen={inning.batsmen} Extras={inning.Extras} Total={inning.Total}/>
      <div className='fallContainer'>Fall Of Wickets</div>
      <div>{inning.FallOfWickets}</div>
      <BowlerList bowlers={inning.bowlers} />
      <PowerPlay PowerPlay={inning.PowerPlay}/>
    </div>
  );
};

export default Innings;
