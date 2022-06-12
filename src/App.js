import './App.css';
import React from 'react';

class Square extends React.Component
{
  // Use constructor to take in propertie that stores the state of the square
  constructor(props)
  {
    // In javscript classes, you need to always call super when defining the constructor 
    // of a subclass
    super(props);
    this.state = {
      value: null,
    };
  }
  
  
  render()
  {
    // React will only call this function after a click
    // It will set the State of the square to X
    // You will see X on the square
    // setState will automatically updates the child component inside of it
    return (
      <button className="square" 
        onClick={() => this.setState({value: 'X'})}
      >
      {this.state.value}
    </button>
    );
  }
}

class Board extends React.Component
{
  // Create a constructor to create the board
  // of an array of 9 squares to be null
  constructor(props)
  {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    };
  }
  
  renderSquare(i)
  {
    // pass a propertie called "value" to Square
    return <Square value={this.state.squares[i]} />;
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