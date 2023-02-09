const DIGIT = {
  NINE: '9',
  EIGHT: '8',
  SEVEN: '7',
  SIX: '6',
  FIVE: '5',
  FOUR: '4',
  THREE: '3',
  TWO: '2',
  ONE: '1',
  ZERO: '0',
} as const;

const OPERATION = {
  DIVIDE: '/',
  MULTIPLE: 'X',
  MINUS: '-',
  PLUS: '+',
  CALCULATE: '=',
} as const;

export { DIGIT, OPERATION };
