import { memo } from 'react';

import type { CalculatorArgs } from '@/components/Calculator';
import AllClear from '@/components/Calculator/AllClear';
import Digit from '@/components/Calculator/Digit';
import Operation from '@/components/Calculator/Operation';

type Props = {
  onClick: (arg?: CalculatorArgs) => () => void;
};

const ButtonSection = (props: Props) => {
  return (
    <>
      <Digit onClick={props.onClick} />
      <AllClear onClick={props.onClick} />
      <Operation onClick={props.onClick} />
    </>
  );
};

export default memo(ButtonSection);
