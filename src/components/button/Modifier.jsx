function Modifier({ onClick }) {
  const handleClick = (value) => {
    onClick(value, 'modifier');
  };

  return (
    <button
      type="button"
      className="modifier"
      onClick={() => handleClick('AC')}
    >
      AC
    </button>
  );
}

export default Modifier;
