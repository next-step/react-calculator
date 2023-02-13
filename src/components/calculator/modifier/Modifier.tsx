import React, { Dispatch, SetStateAction } from 'react';
import './Modifier.css';

type Props = {
  setCalc: Dispatch<SetStateAction<string>>;
};

const Modifier = ({ setCalc }: Props) => {
  const onClickAC = () => {
    setCalc('');
  };

  return (
    <div className="modifiers subgrid">
      <button onClick={onClickAC} className="modifier">
        AC
      </button>
    </div>
  );
};

export default Modifier;
