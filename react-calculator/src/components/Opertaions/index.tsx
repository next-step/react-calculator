export type OperationType = "/" | "X" | "-" | "+" | "=";

interface Props {
  operationHandler: (operation: OperationType) => void;
}

const Operation = (props: Props) => {
  const { operationHandler } = props;
  const operations: OperationType[] = ["/", "X", "-", "+", "="];
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
