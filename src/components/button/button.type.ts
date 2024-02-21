import { BUTTON } from './button.constant';
import { ContainerProps } from '../../types/common';

export type ButtonType = (typeof BUTTON)[keyof typeof BUTTON]['TYPE'];

export interface ButtonProps extends ContainerProps {
  type: ButtonType;
  onClick?: () => void;
}
