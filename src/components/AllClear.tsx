type Props = {
  clear: () => void;
};

export const AllClearButton = ({ clear }: Props) => {
  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={clear}>
        AC
      </button>
    </div>
  );
};
