import React from 'react';

const StatusMessage = ({ winner, curr }) => {
  const noMovesLeft = curr.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : ' text-orange'}>
            {' '}
            {winner}
          </span>
        </>
      )}
      {!winner && !noMovesLeft && (
        <>
          Next player is{' '}
          <span className={curr.isXNext ? 'text-green' : ' text-orange'}>
            {curr.isXNext ? 'X' : '0'}
          </span>
        </>
      )}
      {!winner && noMovesLeft && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span> tied!
        </>
      )}
    </div>
  );
};

export default StatusMessage;
