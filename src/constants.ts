export const Operators = {
  Plus: "+",
  Minus: "-",
  Multiply: "X",
  Divide: "/",
} as const;

export type OperatorKeys = keyof typeof Operators;
export type OperatorValues = (typeof Operators)[OperatorKeys];

export const Messages = {
  InputNumberFirst: "숫자를 먼저 입력한 후 연산자를 입력해주세요!",
  InputOperatorOnce: "연산자는 한번만 입력할 수 있습니다.",
  MaxInputLength: "숫자는 최대 3자리까지 입력할 수 있습니다.",
} as const;
