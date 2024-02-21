import { BUTTON } from './button.constant';

export type ButtonType = (typeof BUTTON)[keyof typeof BUTTON]['TYPE'];

export interface ButtonProps {
  type: ButtonType;
  onClick?: () => void;
  children: React.ReactNode;
}
