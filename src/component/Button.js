export default function Button({ className, value, onClick }) {
  return (
    <button className={className} key={value} value={value} onClick={onClick}>
      {value}
    </button>
  );
}
