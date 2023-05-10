import React from 'react';

function WinnersBoard(props) {
  const winners = props.winners;

  return (
    <div>
      <h2>Winners Board</h2>
      <ul>
        {winners.map((winner, index) => (
          <li key={index}>
            <strong>{winner.figure}</strong> - {winner.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WinnersBoard;
