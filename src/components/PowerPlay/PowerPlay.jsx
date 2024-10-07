import React from 'react';

const PowerPlay = ({ PowerPlay }) => {
  return (
    <table border="1" className='m10'>
      <thead>
        <tr>
          <th>Powerplays</th>
          <th>Overs</th>
          <th>Runs</th>
        </tr>
      </thead>
      <tbody>
          <tr key={PowerPlay.runs}>
            <td>{PowerPlay.powerplays}</td>
            <td>{PowerPlay.overs}</td>
            <td>{PowerPlay.runs}</td>
          </tr>
      </tbody>
    </table>
  );
};

export default PowerPlay;
