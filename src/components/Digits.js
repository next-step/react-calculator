const renderDigitButton = (i, handleDigitClick) => (
  <button className="digit" key={i} onClick={() => handleDigitClick(i)}>
    {i}
  </button>
);

const Digits = ({ handleDigitClick }) => {
  const digitButtons = Array.from({ length: 10 }, (_, i) => (
    <button className="digit" key={i} onClick={() => handleDigitClick(i)}>
      {i}
    </button>
  )).reverse();

  return <div className="digits flex">{digitButtons}</div>;
};

export default Digits;
