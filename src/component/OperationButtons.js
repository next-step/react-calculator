import { operators } from "../const";
import Button from "./Button";

export default function operationButtons({ onClick }) {
  const operationButtons = operators.map((v) => (
    <Button className="operation" key={v} value={v} onClick={onClick} />
  ));
  return <div className="operations subgrid">{operationButtons}</div>;
}
