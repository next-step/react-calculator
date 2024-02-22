import { ClassNames } from '../types/components';

export const Parser = {
  className(className: ClassNames) {
    return className.join(' ');
  },
};
