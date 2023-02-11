interface Props {
  operationHandler: (operation: string) => void;
}

const Operation = (props: Props) => {
  const { operationHandler } = props;
  const operations = ["/", "X", "-", "+", "="];
  return (
    <div className="operations subgrid">
      {operations.map((oper) => (
        <button className="operation" onClick={() => operationHandler(oper)}>
          {oper}
        </button>
      ))}
    </div>
  );
};

export default Operation;
