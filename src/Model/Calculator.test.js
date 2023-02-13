import { Calculator, exceedLimitOfDigitError } from './Calculator.js';

describe('Calculator', () => {
  it.each`
    fomula                 | expected
    ${['999', '+', '1']}   | ${'1000'}
    ${['-999', '+', '1']}  | ${'-998'}
    ${['1', '+', '-999']}  | ${'-998'}
    ${['-999', '+', '-1']} | ${'-1000'}
  `('can add two numbers', ({ fomula, expected }) => {
    const result = Calculator(fomula).enter('=');
    expect(result.value).toBe(expected);
  });

  it.each`
    fomula                 | expected
    ${['999', '-', '1']}   | ${'998'}
    ${['-999', '-', '1']}  | ${'-1000'}
    ${['1', '-', '-999']}  | ${'1000'}
    ${['-999', '-', '-1']} | ${'-998'}
  `('can subtract two numbers', ({ fomula, expected }) => {
    const result = Calculator(fomula).enter('=');
    expect(result.value).toBe(expected);
  });

  it.each`
    fomula                                   | expected
    ${['999', 'X', '999']}                   | ${'998001'}
    ${['-999', 'X', '999']}                  | ${'-998001'}
    ${['999', 'X', '-999']}                  | ${'-998001'}
    ${['-999', 'X', '-999']}                 | ${'998001'}
    ${['9.920279440699441e+23', 'X', '999']} | ${'9.910359161258741e+26'}
    ${['1.7976931348623157e+308', 'X', '9']} | ${'오류'}
  `('can multiply two numbers', ({ fomula, expected }) => {
    const result = Calculator(fomula).enter('=');
    expect(result.value).toBe(expected);
  });

  it.each`
    fomula                                   | expected
    ${['999', '/', '3']}                     | ${'333'}
    ${['-999', '/', '3']}                    | ${'-333'}
    ${['999', '/', '-3']}                    | ${'-333'}
    ${['-999', '/', '-3']}                   | ${'333'}
    ${['13', '/', '3']}                      | ${'4'}
    ${['2', '/', '3']}                       | ${'0'}
    ${['9.910359161258741e+26', '/', '999']} | ${'9.920279440699441e+23'}
    ${['10', '/', '0']}                      | ${'오류'}
    ${['-10', '/', '0']}                     | ${'오류'}
  `('can divide two numbers', ({ fomula, expected }) => {
    const result = Calculator(fomula).enter('=');
    expect(result.value).toBe(expected);
  });

  it.each`
    fomula               | expected
    ${['13']}            | ${'0'}
    ${['13', '+']}       | ${'0'}
    ${['13', '+', '13']} | ${'0'}
    ${['오류']}          | ${'0'}
  `('can be initialized by all clear action', ({ fomula, expected }) => {
    const result = Calculator(fomula).enter('AC');
    expect(result.value).toBe(expected);
  });

  it.each`
    fomula    | input  | expected
    ${['0']}  | ${'1'} | ${'1'}
    ${['1']}  | ${'1'} | ${'11'}
    ${['11']} | ${'1'} | ${'111'}
  `('can enter up to 3 digits', ({ fomula, input, expected }) => {
    const result = Calculator(fomula).enter(input);
    expect(result.value).toBe(expected);
  });

  it.each`
    fomula        | input  | expected
    ${['1', '+']} | ${'X'} | ${'1 X'}
    ${['1', '+']} | ${'/'} | ${'1 /'}
    ${['1', '+']} | ${'+'} | ${'1 +'}
    ${['1', '+']} | ${'-'} | ${'1 + -'}
  `(
    'replaces an previous operator if new input is also an operator',
    ({ fomula, input, expected }) => {
      const result = Calculator(fomula).enter(input);
      expect(result.value).toBe(expected);
    }
  );

  it.each`
    fomula        | input  | expected
    ${['1', '+']} | ${'-'} | ${'1 + -'}
    ${['1', '-']} | ${'-'} | ${'1 - -'}
    ${['1', 'X']} | ${'-'} | ${'1 X -'}
    ${['1', '/']} | ${'-'} | ${'1 / -'}
  `(
    'treats minus operator after other operator as negative',
    ({ fomula, input, expected }) => {
      const result = Calculator(fomula).enter(input);
      expect(result.value).toBe(expected);
    }
  );

  it.each`
    fomula             | input  | expected
    ${['1', 'X', '-']} | ${'+'} | ${'1 X -'}
    ${['1', 'X', '-']} | ${'-'} | ${'1 X -'}
    ${['1', 'X', '-']} | ${'X'} | ${'1 X -'}
    ${['1', 'X', '-']} | ${'/'} | ${'1 X -'}
  `(
    'ignores entered operator after negative minus',
    ({ fomula, input, expected }) => {
      const result = Calculator(fomula).enter(input);
      expect(result.value).toBe(expected);
    }
  );

  it.each`
    fomula             | input  | expected
    ${['5', 'X', '-']} | ${'1'} | ${'5 X -1'}
    ${['5', '-']}      | ${'1'} | ${'5 - 1'}
  `(
    'makes negative number binding minus operator with entered number',
    ({ fomula, input, expected }) => {
      const result = Calculator(fomula).enter(input);
      expect(result.value).toBe(expected);
    }
  );

  it('throws an error when number exceeds 3 digits', () => {
    expect(() => {
      Calculator(['111']).enter('1');
    }).toThrow(exceedLimitOfDigitError);
  });
});
