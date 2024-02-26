import styled from '.././css/index.module.css';

type Props = {
  onModifierClick: () => void;
};

export default function Modifiers({ onModifierClick }: Props) {
  return (
    <div className={`${styled.modifiers} ${styled.subgrid}`}>
      <button className={styled.modifier} onClick={onModifierClick}>
        AC
      </button>
    </div>
  );
}
