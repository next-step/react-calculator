import { separateCalculateUnits } from './separateCalculateUnits';
import { MAX_INPUT_NUMBER, OPERATORS } from '../constants/calculate';
import { MESSAGES } from '../constants/messages';

export const validateDigit = (formula: string) => {
  const lastNumber = separateCalculateUnits(formula)?.pop();

  if (lastNumber && lastNumber?.length >= MAX_INPUT_NUMBER) {
    throw MESSAGES.DIGIT.MAX_LENGTH;
  }
};

export const validateOperation = (formula: string) => {
  if (formula === '' || OPERATORS.includes(formula.slice(-1))) {
    throw MESSAGES.OPERATOR.NOT_FIRST;
  }
};
