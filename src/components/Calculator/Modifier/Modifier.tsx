import './modifier.css';

const Modifier = ({ reset }: { reset: () => void }) => {
  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={reset}>
        AC
      </button>
    </div>
  );
};

export default Modifier;
