import { separateCalculateUnits } from './separateCalculateUnits';
import { MAX_INPUT_NUMBER, OPERATORS } from '../constants/calculate';
import { MESSAGES } from '../constants/messages';

export const validateDigit = (formula: string) => {
  const lastNumber = separateCalculateUnits(formula)?.pop();

  if (lastNumber && lastNumber?.length >= MAX_INPUT_NUMBER) {
    alert(MESSAGES.DIGIT.MAX_LENGTH);
    return;
  }
};

export const validateOperation = (formula: string) => {
  if (OPERATORS.includes(formula.slice(-1))) {
    alert(MESSAGES.OPERATOR.NOT_FIRST);
    return;
  }
};
