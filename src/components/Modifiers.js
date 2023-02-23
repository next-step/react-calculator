const Modifiers = ({ handleAllClearClick }) => (
  <div className="modifiers subgrid">
    <button className="modifier" onClick={() => handleAllClearClick()}>
      AC
    </button>
  </div>
);

export default Modifiers;
