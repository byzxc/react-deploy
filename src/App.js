import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello <code>src/App.js</code> Simon.
        </p>
        <a
          className="App-link"
          href="https://github.com/TeamWDK/WDK_Engine"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn GAM300
        </a>
      </header>
    </div>
  );
}

class Square extends React.Component
{
  render()
  {
    return (
    <button className="square">
      {this.props.value}
    </button>
    );
  }
}

class Board extends React.Component
{
  renderSquare(i)
  {
    // pass a propertie called "value" to Square
    return <Square value={i} />;
  }

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component
{
  render()
  {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
  }
}

export default Game;
