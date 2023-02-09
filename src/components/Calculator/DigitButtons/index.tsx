import styles from "./index.module.css";

interface DigitButtonsProps {
  onClickDigit(value: number): void;
}

export default function DigitButtons({ onClickDigit }: DigitButtonsProps) {
  return (
    <div className={`${styles.digits} flex`}>
      {Array.from({ length: 10 }, (_, idx) => 9 - idx).map((digit) => (
        <button
          className={styles.digit}
          key={digit}
          onClick={() => onClickDigit(digit)}
        >
          {digit}
        </button>
      ))}
    </div>
  );
}
