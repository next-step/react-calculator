export default function Button({ className, value }) {
  return (
    <button className={className} key={value} value={value}>
      {value}
    </button>
  );
}
