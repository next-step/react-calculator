import { Calculator } from './Calculator.js';

describe('Calculator', () => {
  it('can add two numbers', () => {
    const result = Calculator(['999', '+', '1']).enter('=');

    expect(result.value).toBe('1000');
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
    ${['999', '*', '999']}                   | ${'998001'}
    ${['-999', '*', '999']}                  | ${'-998001'}
    ${['999', '*', '-999']}                  | ${'-998001'}
    ${['-999', '*', '-999']}                 | ${'998001'}
    ${['9.920279440699441e+23', '*', '999']} | ${'9.910359161258741e+26'}
    ${['1.7976931348623157e+308', '*', '9']} | ${'오류'}
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
    ${['9.910359161258741e+26', '/', '999']} | ${'9.920279440699441e+23'}
    ${['10', '/', '0']}                      | ${'오류'}
  `('can divide two numbers', ({ fomula, expected }) => {
    const result = Calculator(fomula).enter('=');
    expect(result.value).toBe(expected);
  });

  it('round down decimal places to express results', () => {});

  it('can be initialized by all clear action', () => {});

  it('can enter up to 3 digits', () => {});

  it('throw an error when number exceeds 3 digits', () => {});

  it('throw an error when operator is entered before number is entered', () => {});
});
