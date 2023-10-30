const Cell = ({ symbol, handleClick, position }) => {
  const style = {
    width: `20px`,
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '1px solid black',
  };

  return (
    <div
      className='cell'
      style={style}
      onClick={symbol === '' ? () => handleClick(position) : null}
    >
      {symbol}
    </div>
  );
};

const Board = ({ cells, handleClick }) => {
  const cellElements = cells.map((symbol, index) => (
    <Cell
      symbol={symbol}
      position={index}
      key={index}
      handleClick={handleClick}
    />
  ));

  const style = {
    width: '50%',
    display: 'flex',
    flexWrap: 'wrap',
  };

  return <div style={style}>{cellElements}</div>;
};

export default Board;
