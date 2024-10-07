import React from 'react';
import Innings from '../Innings/Innings';
import MatchInfo from '../MatchInfo/MatchInfo';

const Scorecard = ({ data }) => {
  const { innings,matchInfo } = data;

  return (
    <div>
      {innings.map((inning, index) => (
        <Innings key={index} inning={inning} />
      ))}
      <MatchInfo matchInfo={matchInfo}/>
    </div>
  );
};

export default Scorecard;
