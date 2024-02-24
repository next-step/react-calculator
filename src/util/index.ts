import {
  ERROR_INFINITY,
  NUMBER_LENGTH,
  OPERATOR_VALIDATE_MESSAGE,
  VALIDATE_MESSAGE,
} from "@/constant";

export const isOperatorValidate = (data: any) => {
  if (!data) {
    alert(OPERATOR_VALIDATE_MESSAGE);
    return false;
  }
  return true;
};
export const isNumberLengthValidate = (number: any) => {
  if (String(number).length >= NUMBER_LENGTH) {
    alert(VALIDATE_MESSAGE);
    return false;
  }
  return true;
};

type OperatiorType = {
  [key: string]: number;
};

export const calculrate = (prev: string, next: string, operate: string) => {
  const result: OperatiorType = {
    "+": Number(prev) + Number(next),
    "-": Number(prev) - Number(next),
    "/": Number(prev) / Number(next),
    X: Number(prev) * Number(next),
  };

  return result[operate];
};
