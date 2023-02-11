import { operators } from "../const";
import Button from "./Button";

export default function operationButtons() {
  const operationButtons = operators.map((v) => (
    <Button className="digit" key={v} value={v} />
  ));
  return <div className="operations subgrid">{operationButtons}</div>;
}
