import {
  NUMBER_LENGTH,
  OPERATOR_VALIDATE_MESSAGE,
  VALIDATE_MESSAGE,
} from "@/constant";
import { CalculateParams, OperationKeyType } from "@/type";

export const isOperatorValidate = (data: string) => {
  if (!data) {
    alert(OPERATOR_VALIDATE_MESSAGE);
    return false;
  }
  return true;
};

export const isNumberLengthValidate = (data: string) => {
  if (data.length >= NUMBER_LENGTH) {
    alert(VALIDATE_MESSAGE);
    return false;
  }
  return true;
};

export const calculrate = ({ first, second, operator }: CalculateParams) => {
  const result: OperationKeyType = {
    "+": Number(first) + Number(second),
    "-": Number(first) - Number(second),
    "/": Number(first) / Number(second),
    X: Number(first) * Number(second),
  };

  return result[operator];
};
