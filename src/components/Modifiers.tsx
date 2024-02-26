import { BUTTON } from './button/button.constant';
import { Modifier } from './button/button.type';
import { ButtonGroup } from './buttonGroup/ButtonGroup';
import { BUTTON_GROUP } from './buttonGroup/buttonGroup.constant';
import { ButtonGroupOnClickProps } from './buttonGroup/buttonGroup.type';

export const Modifiers = ({ onClick }: ButtonGroupOnClickProps<Modifier>) => {
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
