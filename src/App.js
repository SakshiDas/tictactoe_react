import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helpers';

import './styles/root.scss';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currMove, setCurrMove] = useState(0);

  const curr = history[currMove];
  const winner = calculateWinner(curr.board);

  const handleSquareClick = position => {
    if (curr.board[position] || winner) {
      return;
    }
    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : '0';
        }

        return square;
      });
      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrMove(prev => prev + 1);
  };

  const moveTo = move => {
    setCurrMove(move);
  };

  return (
    <>
      <div className="app">
        <h1>Tic Tac Toe</h1>
        <p> A react Game</p>
        <StatusMessage winner={winner} curr={curr} />
        <Board board={curr.board} handleSquareClick={handleSquareClick} />
        <History history={history} moveTo={moveTo} currMove={currMove} />
      </div>
    </>
  );
};
export default App;
