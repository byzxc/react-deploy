import './App.css';
import React from 'react';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello <code>src/App.js</code> Simon.
//         </p>
//         <a
//           className="App-link"
//           href="https://github.com/TeamWDK/WDK_Engine"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn GAM300
//         </a>
//       </header>
//     </div>
//   );
// }

// Data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
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