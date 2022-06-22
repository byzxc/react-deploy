import './App.css';
import React from 'react';

// TODO::
// Ability to click the square once only to avoid it being overwritten

// Function to declaring a winner
function calculateWinner(squares)
{
  // Ways to win the 3x3 tic tac toe
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; ++i)
  {
    // 1 row, 3 cols
    const [a,b,c] = lines[i];
    // As long as there is one diagonal or straight line same, the player wins.
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c])
    {
      return squares[a];
    }
  }
  return null;
}

// React will only call this function after a click
// It will set the State of the square to X
// You will see X on the square
// setState will automatically updates the child component inside of it
function Square(props)
{
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component
{
  // Create a constructor to create the board
  // of an array of 9 squares to be null
  // Default on the square is X by using the boolean xIsNext to see if to flip X or O
  constructor(props)
  {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }

  // Define handeClick function
  handleClick(i)
  {
    // Returns index 0 of the array if no number is passed in to slice();
    // .slice() create a copy of the squares
    // Using slice will benefit us in terms of ability to do undo
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';

    // This is essentially this((prevState) => ({stateName: prevState.stateName + 1}))
    // This will allow to me toggle between O and X
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i)
  {
    // Pass down a function from Board to Square,
    // so that the function will be called by Square when a square is clicked
    // Will call function Square that takes in argument of props
    return (
        <Square 
          value={this.state.squares[i]}
          // Square will call onClick which will call Board.handleClick(i)
          onClick={() => this.handleClick(i)}
        />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner)
    {
        status = 'Winner: ' + winner;
    }
    else
    {
      // Depending on the state of xIsNext, we display X or O
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }


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