type Props = {
  clear: () => void;
};

export const AllClear = ({ clear }: Props) => {
  return (
    <>
      <div className="modifiers subgrid">
        <button className="modifier" onClick={clear}>
          AC
        </button>
      </div>
    </>
  );
};
