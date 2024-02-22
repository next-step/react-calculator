import { BUTTON } from './button/button.constant';
import { ButtonGroup } from './buttonGroup/ButtonGroup';
import { BUTTON_GROUP } from './buttonGroup/buttonGroup.constant';
import { ModifiersButtonGroupProps } from './buttonGroup/buttonGroup.type';

export const Modifiers = ({ onClick }: ModifiersButtonGroupProps) => {
  return (
    <ButtonGroup
      classNames={BUTTON_GROUP.MODIFIERS.CLASSNAMES}
      buttonConfig={{
        children: BUTTON.MODIFIER.CHILDREN,
        classNames: BUTTON.MODIFIER.CLASSNAMES,
      }}
      onClick={onClick}
    />
  );
};
