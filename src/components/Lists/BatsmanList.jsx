import React from 'react';

const BatsmanList = ({ batsmen,Extras,Total }) => {
  return (
    <table border="1" className='m10'>
      <thead>
        <tr>
          <th>Batter</th>
          <th></th>
          <th>R</th>
          <th>B</th>
          <th>F</th>
          <th>S</th>
          <th>SR</th>
        </tr>
      </thead>
      <tbody>
        {batsmen.map((batsman, index) => (
          <tr key={index}>
            <td>{batsman.name}</td>
            <td>{batsman.wicket}</td>
            <td>{batsman.runs}</td>
            <td>{batsman.balls}</td>
            <td>{batsman.fours}</td>
            <td>{batsman.sixes}</td>
            <td>{batsman.stikeRate}</td>
          </tr>
        ))}
        <tr>
            <td>Extras</td>
            <td></td>
            <td>{Extras}</td>
        </tr>
        <tr>
            <td>Total</td>
            <td></td>
            <td>{Total}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default BatsmanList;
