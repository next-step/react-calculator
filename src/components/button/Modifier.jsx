const modifier = 'AC';

function Modifier({ onClick }) {
  return (
    <button type="button" className="modifier" onClick={() => onClick()}>
      {modifier}
    </button>
  );
}

export default Modifier;
