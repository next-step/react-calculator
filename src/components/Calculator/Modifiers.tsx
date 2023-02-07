import { MouseEvent } from 'react';

import { MODIFIERS } from '../../constants/calculator';
import { AC, ModifierActions, useCalculator } from '../../context/calculator';
import { Modifier } from '../../types/calculator';

const MODIFIER_ACTION_MAPPER: Record<Modifier, ModifierActions> = {
  [MODIFIERS.AC]: AC,
};

const Modifiers = () => {
  const { dispatch } = useCalculator();

  const handleClickModifier = (e: MouseEvent<HTMLDivElement>) => {
    if (!(e.target instanceof HTMLButtonElement)) return;

    const { modifier } = e.target.dataset;
    if (modifier === undefined) return;

    dispatch({ type: MODIFIER_ACTION_MAPPER[modifier as Modifier], payload: modifier as Modifier });
  };

  return (
    <div className="modifiers subgrid" onClick={handleClickModifier}>
      {Object.values(MODIFIERS).map((modifier) => {
        return (
          <button key={modifier} className="modifier" data-modifier={modifier}>
            {modifier}
          </button>
        );
      })}
    </div>
  );
};

export default Modifiers;
