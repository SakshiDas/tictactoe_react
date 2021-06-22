import React from 'react';

const StatusMessage = ({ winner, curr }) => {
  const noMovesLeft = curr.board.every(el => el !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && !noMovesLeft && `Next player is ${curr.isXNext ? 'X' : '0'}`}
      {!winner && noMovesLeft && `It's a tie!`}
    </h2>
  );
};

export default StatusMessage;
