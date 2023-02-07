import styles from "./index.module.css";

export default function DigitButtons() {
  return (
    <div className={`${styles.digits} flex`}>
      {Array.from({ length: 9 }, (_, idx) => 9 - idx).map((digit) => (
        <button className={styles.digit} key={digit}>
          {digit}
        </button>
      ))}
    </div>
  );
}
