import { BUTTON } from './button.constant';
import { ButtonProps, ButtonType } from './button.type';

export const Button = ({ type, onClick, children }: ButtonProps) => {
  const ButtonFactory = (type: ButtonType) => {
    switch (type) {
      case BUTTON.DIGIT.TYPE: {
        return (
          <button className={BUTTON.DIGIT.CLASSNAME} onClick={onClick}>
            {children}
          </button>
        );
      }

      case BUTTON.MODIFIER.TYPE: {
        return (
          <button className={BUTTON.MODIFIER.CLASSNAME} onClick={onClick}>
            {children}
          </button>
        );
      }

      case BUTTON.OPERATION.TYPE: {
        return (
          <button className={BUTTON.OPERATION.TYPE} onClick={onClick}>
            {children}
          </button>
        );
      }

      default: {
        return <button onClick={onClick}>{children}</button>;
      }
    }
  };

  return ButtonFactory(type);
};
