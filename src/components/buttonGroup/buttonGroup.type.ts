import { ClassNames } from '../../types/components';
import { Digit, Modifier, Operator } from '../button/button.type';

export interface ButtonGroupProps<T> {
  onClick: (value: T) => void;
  buttonConfig: {
    children: { [key: string]: { ID: string; VALUE: T } };
    classNames: ClassNames;
  };
  classNames: ClassNames;
}

export interface DigitsButtonGroupProps {
  onClick: (value: Digit) => void;
}

export interface ModifiersButtonGroupProps {
  onClick: (value: Modifier) => void;
}

export interface OperationsButtonGroupProps {
  onClick: (value: Operator) => void;
}
