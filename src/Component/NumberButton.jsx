function NumberButton({ number, handleAddNumber }) {
  console.log(number, "check", handleAddNumber);

  return (
    <button className="digit" onClick={handleAddNumber}>
      {number}
    </button>
  );
}

export default NumberButton;
