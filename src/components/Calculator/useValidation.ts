import { Operator, Process } from './CalculatorProvider';

export default function useValidation(process: Process) {
  const isProcessEndsWithOperator = () => {
    const lastItem = process.at(-1);
    return typeof lastItem === 'string' && Object.values(Operator).includes(lastItem);
  };

  const isOperatorFirstInProcess = () => {
    return process.length === 0;
  };

  const isRecentNumberThreeDigitsInProcess = () => {
    const recentThreeDigitsAndOperators = process.slice(-3);

    if (recentThreeDigitsAndOperators.length < 3) return false;

    const hasOperator = recentThreeDigitsAndOperators.some(
      (item) => typeof item === 'string' && Object.values(Operator).includes(item)
    );

    if (hasOperator) return false;

    return true;
  };

  const processHasOperator = () => {
    return process.some((item) => typeof item === 'string' && Object.values(Operator).includes(item));
  };

  return {
    isRecentNumberThreeDigitsInProcess,
    isProcessEndsWithOperator,
    isOperatorFirstInProcess,
    processHasOperator,
  };
}
