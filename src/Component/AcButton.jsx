function AcButton({ handleAc }) {
  return (
    <>
      <div className="modifiers subgrid">
        <button className="modifier" onClick={handleAc}>
          AC
        </button>
      </div>
    </>
  );
}
export default AcButton;
