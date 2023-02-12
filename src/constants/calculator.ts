enum Digit {
  NINE = '9',
  EIGHT = '8',
  SEVEN = '7',
  SIX = '6',
  FIVE = '5',
  FOUR = '4',
  THREE = '3',
  TWO = '2',
  ONE = '1',
  ZERO = '0',
}

const OPERATION = {
  DIVIDE: '/',
  MULTIPLE: 'X',
  MINUS: '-',
  PLUS: '+',
} as const;

const MAX_LENGTH = 3;

export { Digit, OPERATION, MAX_LENGTH };
