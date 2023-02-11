import { OperationType } from "../../../components/Calculator/Operations/Operation";

export const ADD_DIGIT = "ADD_DIGIT";
type DIGIT = { type: typeof ADD_DIGIT; digit: number };

export const ADD_OPERATION = "ADD_OPERATION";
type OPERATION = {
  type: typeof ADD_OPERATION;
  operation: OperationType | "ac";
};

export const CLEAR_ALL = "CLEAR_ALL";
type CLEAR = { type: typeof CLEAR_ALL };

export type ActionType = DIGIT | OPERATION | CLEAR;
