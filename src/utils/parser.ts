import { ClassNames } from '../types/components';

export const Parser = {
  classNames(classNames: ClassNames) {
    return classNames.join(' ');
  },
};
