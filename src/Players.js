const Player = ({ name, symbol }) => {
  return (
    <div>
      {name}: {symbol}
    </div>
  );
};

const Players = ({ players: [player1, player2] }) => {
  const style = {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
  };

  return (
    <div style={style}>
      <Player name={player1.name} symbol={player1.symbol} />
      <Player name={player2.name} symbol={player2.symbol} />
    </div>
  );
};

export default Players;
