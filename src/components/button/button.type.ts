import { BUTTON } from './button.constant';
import { ClassNames, ContainerProps } from '../../types/components';

export interface ButtonProps extends ContainerProps {
  onClick?: () => void;
  classNames: ClassNames;
}

export type Operator =
  (typeof BUTTON.OPERATION.CHILDREN)[keyof typeof BUTTON.OPERATION.CHILDREN]['VALUE'];

export type Digit =
  (typeof BUTTON.DIGIT.CHILDREN)[keyof typeof BUTTON.DIGIT.CHILDREN]['VALUE'];

export type Modifier =
  (typeof BUTTON.MODIFIER.CHILDREN)[keyof typeof BUTTON.MODIFIER.CHILDREN]['VALUE'];

export type ButtonValue = Digit | Operator | Modifier;
