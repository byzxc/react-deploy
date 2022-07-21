import "./App.css";
import React from "react";

// TODO::
// Button to retry, and reset the entire board

// Button to retry
//function Retry() {}

const WinCondition = {
  Win: 'Win',
  Lose: 'Lose',
  Draw: 'Draw',
};

// Function to declaring a winner
function calculateWinner(squares) {
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

  // To check if all the values in the array is false
  if (squares.every(false)) {
    return WinCondition.Lose;
  }

  for (let i = 0; i < lines.length; ++i) {
    // 1 row, 3 cols
    const [a, b, c] = lines[i];
    // As long as there is one diagonal or straight line same, the player wins.
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return WinCondition.Win;
    }
  }

  return WinCondition.Lose;
}

// React will only call this function after a click
// It will set the State of the square to X
// You will see X on the square
// setState will automatically updates the child component inside of it
function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Board extends React.Component {
  renderSquare(i) {
    // Pass down a function from Board to Square,
    // so that the function will be called by Square when a square is clicked
    // Will call function Square that takes in argument of props
    return (
      <Square
        value={this.props.squares[i]}
        // Square will call onClick which will call Board.handleClick(i)
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  render() {
    return (
      <div>
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

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Game contains History member which is an array of squares of an array of 9 bools
      // contains a bool member xIsNext to keep track of whose turn it is
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.step.stepNumber + 1);
    const current = history[history.length - 1];
    // Returns index 0 of the array if no number is passed in to slice();
    // .slice() create a copy of the squares
    // Using slice will benefit us in terms of ability to do undo
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";

    // This is essentially this((prevState) => ({stateName: prevState.stateName + 1}))
    // This will allow to me toggle between O and X
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  jumpTo(step) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0,
    });
  }

  render() {
    const history = this.state.history.slice;
    const current = history[this.step.stepNumber];
    const winner = calculateWinner(current.squares);

    // step is key, value is move
    const moves = history.map((step, move) => {
      const desc = move ? "Go to move #" + move : "Go to game start";

      return (
        <li>
          <button onClick={() => this.jumpTo(move)}>{desc}</button>
        </li>
      );
    });

    let status;

    switch (winner) {
      case 'Win': {
        status = "Winner: " + winner;
        break;
      }
      case 'Lose': {
        status = "Next player: " + (this.state.xIsNext ? "X" : "O");
        break;
      }
      default: {
        status = "Draw!";
      }
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onclick={(i) => this.handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default Game;
