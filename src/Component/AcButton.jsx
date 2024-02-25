import StyledButton from "./StyledButton";

function AcButton({ handleAc }) {
  const modifiers = {
    gridArea: "modif",
    gridAutoFlow: "column",
    gridAutoColumns: "1fr",
    width: "100%",
    height: "100%",
  };
  const subgrid = {
    display: "flex",
  };

  return (
    <>
      <div className="modifiers subgrid" style={{ ...subgrid, ...modifiers }}>
        <StyledButton handleFunc={handleAc} param={"AC"} props={modifiers} />
      </div>
    </>
  );
}

export default AcButton;
