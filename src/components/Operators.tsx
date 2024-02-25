import { BUTTON } from './button/button.constant';
import { Operator } from './button/button.type';
import { ButtonGroup } from './buttonGroup/ButtonGroup';
import { BUTTON_GROUP } from './buttonGroup/buttonGroup.constant';
import { ButtonGroupOnClickProps } from './buttonGroup/buttonGroup.type';

export const Operators = ({ onClick }: ButtonGroupOnClickProps<Operator>) => {
  return (
    <ButtonGroup
      classNames={BUTTON_GROUP.OPERATIONS.CLASSNAMES}
      buttonConfig={{
        children: BUTTON.OPERATION.CHILDREN,
        classNames: BUTTON.OPERATION.CLASSNAMES,
      }}
      onClick={onClick}
    />
  );
};
