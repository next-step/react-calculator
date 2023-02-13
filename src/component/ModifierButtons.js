import Button from "./Button";

export default function ModifierButtons({ onClick }) {
  return (
    <div className="modifiers subgrid">
      <Button className="modifier" value="AC" onClick={onClick} />
    </div>
  );
}
