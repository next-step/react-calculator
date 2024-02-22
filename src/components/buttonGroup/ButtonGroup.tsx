import { Button } from '..';
import { Parser } from '../../utils/parser';
import { ButtonValue } from '../button/button.type';
import { ButtonGroupProps } from './buttonGroup.type';

export const ButtonGroup = <T,>({
  onClick,
  buttonConfig,
  classNames,
}: ButtonGroupProps<T>) => {
  return (
    <div className={Parser.classNames(classNames)}>
      {Object.values(buttonConfig.children).map(({ ID, VALUE }) => (
        <Button
          key={ID}
          classNames={buttonConfig.classNames}
          onClick={() => onClick(VALUE)}
        >
          {VALUE as ButtonValue}
        </Button>
      ))}
    </div>
  );
};
