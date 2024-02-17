import {OPERATIONS} from "../constants/Calcurator";
import {OperatorionsType} from "../models/Operations";

interface GetTotalParams {
  operation: OperatorionsType;
  total: number;
  current: number;
  isPreviousOperator: boolean;
}

type GetTotalType = (params: GetTotalParams) => number;

export const getTotal: GetTotalType = ({
  operation,
  total,
  current,
  isPreviousOperator,
}) => {
  if (total === null || isPreviousOperator) {
    return current;
  }

  switch (operation) {
    case OPERATIONS.plus:
      return total + current;
    case OPERATIONS.minus:
      return total - current;
    case OPERATIONS.multiple:
      return total * current;
    case OPERATIONS.divide:
      return Math.floor(total / current);
    case OPERATIONS.equalSign:
      return total;
  }
};
