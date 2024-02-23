function Digit() {
  const digits = Array.from({ length: 10 }, (_, i) => 9 - i);

  return (
    <>
      {digits.map((digit) => (
        <button type="button" key={digit} className="digit">
          {digit}
        </button>
      ))}
    </>
  );
}

export default Digit;
