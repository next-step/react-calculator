import { digits } from "../const";
import Button from "./Button";

export default function DigitButtons({ className, value }) {
  const digitButtons = digits.map((v) => (
    <Button className="digit" key={v} value={v} />
  ));
  return <div className="digits flex">{digitButtons}</div>;
}
