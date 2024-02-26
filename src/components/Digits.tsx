import { BUTTON } from './button/button.constant';
import { Digit } from './button/button.type';
import { ButtonGroup } from './buttonGroup/ButtonGroup';
import { BUTTON_GROUP } from './buttonGroup/buttonGroup.constant';
import { ButtonGroupOnClickProps } from './buttonGroup/buttonGroup.type';

export const Digits = ({ onClick }: ButtonGroupOnClickProps<Digit>) => {
  return (
    <ButtonGroup
      classNames={BUTTON_GROUP.DIGITS.CLASSNAMES}
      buttonConfig={{
        children: BUTTON.DIGIT.CHILDREN,
        classNames: BUTTON.DIGIT.CLASSNAMES,
      }}
      onClick={onClick}
    />
  );
};
