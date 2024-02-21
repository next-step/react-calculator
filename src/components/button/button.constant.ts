export const BUTTON = {
  DIGIT: {
    TYPE: 'digit',
    CLASSNAME: 'digit',
    CHILDREN: {
      NINE: {
        ID: 'nine',
        VALUE: 9,
      },
      EIGHT: {
        ID: 'eight',
        VALUE: 8,
      },
      SEVEN: {
        ID: 'seven',
        VALUE: 7,
      },
      SIX: {
        ID: 'six',
        VALUE: 6,
      },
      FIVE: {
        ID: 'five',
        VALUE: 5,
      },
      FOUR: {
        ID: 'four',
        VALUE: 4,
      },
      THREE: {
        ID: 'three',
        VALUE: 3,
      },
      TWO: {
        ID: 'two',
        VALUE: 2,
      },
      ONE: {
        ID: 'one',
        VALUE: 1,
      },
      ZERO: {
        ID: 'zero',
        VALUE: 0,
      },
    },
  },

  MODIFIER: {
    TYPE: 'modifier',
    CLASSNAME: 'modifier',
    CHILDREN: {
      AC: {
        ID: 'ac',
        VALUE: 'AC',
      },
    },
  },

  OPERATION: {
    TYPE: 'operation',
    CLASSNAME: 'operation',
    CHILDREN: {
      DIVIDE: {
        ID: 'divide',
        VALUE: '/',
      },
      MULTIPLY: {
        ID: 'multiply',
        VALUE: 'X',
      },
      SUBTRACT: {
        ID: 'subtract',
        VALUE: '-',
      },
      ADD: {
        ID: 'add',
        VALUE: '+',
      },
      EQUAL: {
        ID: 'equal',
        VALUE: '=',
      },
    },
  },
} as const;
