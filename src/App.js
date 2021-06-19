import React from 'react';
import Board from './components/Board';
import './styles/root.scss';
const App = () => {
  return (
    <>
      <div className="app">
        <h1>Tic Tac Toe</h1>
        <p> A react Game</p>
        <Board />
      </div>
    </>
  );
};
export default App;
