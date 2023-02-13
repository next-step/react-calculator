import { DIGIT_NUMBERS } from "../const";
import Button from "./Button";

export default function DigitButtons({ onClick }) {
  const digits = DIGIT_NUMBERS.map((digit) => (
    <Button className="digit" key={digit} value={digit} onClick={onClick} />
  ));
  return <div className="digits flex">{digits}</div>;
}
