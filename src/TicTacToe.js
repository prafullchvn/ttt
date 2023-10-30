import React from 'react';
import Board from './Board';
import Players from './Players';

const game = {
  players: [
    { name: 'abc', symbol: 'X' },
    { name: 'xyz', symbol: 'O' },
  ],
  cells: ['', '', 'X', '', 'O', '', 'O', '', ''],
  currentPlayerIndex: 0,
};

class TicTacToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = game;

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(position) {
    console.log(position);

    this.setState((state) => {
      const { players, currentPlayerIndex, cells } = state;
      const symbol = players[currentPlayerIndex].symbol;
      cells[position] = symbol;
      const nextPlayerIndex = 1 - currentPlayerIndex;

      return {
        currentPlayerIndex: nextPlayerIndex,
        cells,
      };
    });
  }

  render() {
    const style = {
      width: '50%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
      rowGap: '3em',
    };

    return (
      <div style={style}>
        <Players players={this.state.players} />
        <Board cells={this.state.cells} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default TicTacToe;
