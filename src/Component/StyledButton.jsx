function StyledButton({ param, handleFunc, props }) {
  const style = {
    fontSize: "2rem",
    border: "0.5px solid #98999b",
  };
  const newstyle = { ...style, ...props };
  return (
    <button style={newstyle} onClick={handleFunc}>
      {param}
    </button>
  );
}

export default StyledButton;
