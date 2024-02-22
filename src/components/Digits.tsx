import { BUTTON } from './button/button.constant';
import { ButtonGroup } from './buttonGroup/ButtonGroup';
import { BUTTON_GROUP } from './buttonGroup/buttonGroup.constant';
import { DigitsButtonGroupProps } from './buttonGroup/buttonGroup.type';

export const Digits = ({ onClick }: DigitsButtonGroupProps) => {
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
