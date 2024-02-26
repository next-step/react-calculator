const digits = Array.from({ length: 10 }, (_, i) => 9 - i);

function Digit({ onClick }) {
  return (
    <>
      {digits.map((digit) => (
        <button
          type="button"
          key={digit}
          className="digit"
          onClick={() => onClick(digit)}
        >
          {digit}
        </button>
      ))}
    </>
  );
}

export default Digit;
