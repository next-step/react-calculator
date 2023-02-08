const digits = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

function Digits() {
  return (
    <div className="digits flex">
      {digits.map(digit => (
        <button key={digit} className="digit" name={`${digit}`} value={digit}>
          {digit}
        </button>
      ))}
    </div>
  );
}

export default Digits;
