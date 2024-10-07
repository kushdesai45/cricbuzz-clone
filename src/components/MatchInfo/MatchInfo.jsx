import React from 'react';

const MatchInfo = ({matchInfo}) => {
  return (
    <table className='m10'>
      <thead className='matchInfoContainer'>
        <tr>
          <th>Match Info</th>
          <th></th>
        </tr>
      </thead>
      <tbody className='matchInfoDiv'>
          <tr>
            <td>Match</td>
            <td className='p20'>{matchInfo.Match}</td>
          </tr>
          <tr>
            <td>Date</td>
            <td className='p20'>{matchInfo.Date}</td>
          </tr>
          <tr>
            <td>Toss</td>
            <td className='p20'>{matchInfo.Toss}</td>
          </tr>
          <tr>  
            <td>Time</td> 
            <td className='p20'>{matchInfo.Time}</td>
          </tr>
          <tr>
          <td>Venue</td>
          <td className='p20'>{matchInfo.Venue}</td>
          </tr>
          <tr>
          <td>Umpires</td>
          <td className='p20'>{matchInfo.Umpires}</td>
          </tr>
          <tr>
          <td>Third Umpire</td>
          <td className='p20'>{matchInfo.thirdUmpire}</td>
          </tr>
          <tr>
          <td>Match Referee</td>
          <td className='p20'>{matchInfo.matchReferee}</td>
          </tr>
          <tr>
          <td>India Squad</td>
          <td className='p20'>{matchInfo.indiaSquad}</td>
          </tr>
          <tr>
          <td>Playing</td>
          <td className='p20'>{matchInfo.PlayingInd}</td>
          </tr>
          <tr>
          <td>Bench</td>
          <td className='p20'>{matchInfo.BenchInd}</td>
          </tr>
          <tr>
          <td>Support Staff</td>
          <td className='p20'>{matchInfo.supportStaffInd}</td>
          </tr>
          <tr>
          <td>Bangladesh Squad</td>
          <td className='p20'>{matchInfo.BangladeshSquad}</td>
          </tr>
          <tr>
          <td>Playing</td>
          <td className='p20'>{matchInfo.PlayingBng}</td>
          </tr>
          <tr>
          <td>Bench</td>
          <td className='p20'>{matchInfo.BenchBng}</td>
          </tr>
          <tr>
          <td>Support Staff</td>
          <td className='p20'>{matchInfo.supportStaffBng}</td>
          </tr>
      </tbody>
    </table>
  );
};

export default MatchInfo;
