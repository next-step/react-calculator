function Digit({ onClick }) {
  const digits = Array.from({ length: 10 }, (_, i) => 9 - i);

  const handleClick = (value) => {
    onClick(value, 'digit');
  };

  return (
    <>
      {digits.map((digit) => (
        <button
          type="button"
          key={digit}
          className="digit"
          onClick={() => handleClick(digit)}
        >
          {digit}
        </button>
      ))}
    </>
  );
}

export default Digit;
