import { digits } from "../const";
import Button from "./Button";

export default function DigitButtons({ onClick }) {
  const digitButtons = digits.map((v) => (
    <Button className="digit" key={v} value={v} onClick={onClick} />
  ));
  return <div className="digits flex">{digitButtons}</div>;
}
