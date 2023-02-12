import { memo } from 'react';

import {
  AllClearButton,
  DigitButton,
  OperationButton,
} from '@/components/Calculator';
import type { CalculatorArgs } from '@/components/Calculator/Calculator';

type Props = {
  onClick: (arg?: CalculatorArgs) => () => void;
};

const ButtonSection = (props: Props) => {
  return (
    <>
      <DigitButton onClick={props.onClick} />
      <AllClearButton onClick={props.onClick} />
      <OperationButton onClick={props.onClick} />
    </>
  );
};

export default memo(ButtonSection);
