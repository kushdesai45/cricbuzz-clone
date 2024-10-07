import React from 'react';

const BowlerList = ({ bowlers }) => {
  return (
    <table border="1" className='m10'>
      <thead>
        <tr>
          <th>Bowler</th>
          <th>O</th>
          <th>M</th>
          <th>R</th>
          <th>W</th>
          <th>NB</th>
          <th>WD</th>
          <th>ECO</th>
        </tr>
      </thead>
      <tbody>
        {bowlers.map((bowler, index) => (
          <tr key={index}>
            <td>{bowler.Bowler}</td>
            <td>{bowler.O}</td>
            <td>{bowler.M}</td>
            <td>{bowler.R}</td>
            <td>{bowler.W}</td>
            <td>{bowler.NB}</td>
            <td>{bowler.WD}</td>
            <td>{bowler.ECO}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BowlerList;
