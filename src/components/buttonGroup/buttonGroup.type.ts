import { ClassNames } from '../../types/components';

export interface ButtonGroupProps<T> {
  onClick: (value: T) => void;
  buttonConfig: {
    children: { [key: string]: { ID: string; VALUE: T } };
    classNames: ClassNames;
  };
  classNames: ClassNames;
}

export interface ButtonGroupOnClickProps<T> {
  onClick: (value: T) => void;
}
