import { BUTTON } from './button/button.constant';
import { ButtonGroup } from './buttonGroup/ButtonGroup';
import { BUTTON_GROUP } from './buttonGroup/buttonGroup.constant';
import { OperationsButtonGroupProps } from './buttonGroup/buttonGroup.type';

export const Operations = ({ onClick }: OperationsButtonGroupProps) => {
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
