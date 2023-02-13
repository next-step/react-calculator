import { operators } from "../const";
import Button from "./Button";

export default function OperationButtons({ onClick }) {
  const operations = operators.map((operator) => (
    <Button
      className="operation"
      key={operator}
      value={operator}
      onClick={onClick}
    />
  ));
  return <div className="operations subgrid">{operations}</div>;
}
