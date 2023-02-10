import { Calculator } from './Calculator.js';

describe('Calculator', () => {
  it('can add two numbers', () => {
    const result = Calculator(['999', '+', '1']).enter('=');

    expect(result.value).toBe('1000');
  });

  it('can subtract two numbers', () => {
    const result = Calculator(['999', '-', '1']).enter('=');

    expect(result.value).toBe('998');
  });

  it.each`
    fomula                                   | expected
    ${['999', '*', '999']}                   | ${'998001'}
    ${['-999', '*', '999']}                  | ${'-998001'}
    ${['999', '*', '-999']}                  | ${'-998001'}
    ${['-999', '*', '-999']}                 | ${'998001'}
    ${['9.920279440699441e+23', '*', '999']} | ${'9.910359161258741e+26'}
  `('can multiply two numbers', ({ fomula, expected }) => {
    const result = Calculator(fomula).enter('=');
    expect(result.value).toBe(expected);
  });

  it('can divide two numbers', () => {
    const result = Calculator(['999', '/', '3']).enter('=');

    expect(result.value).toBe('333');
  });

  it('round down decimal places to express results', () => {});

  it('can be initialized by all clear action', () => {});

  it('can enter up to 3 digits', () => {});

  it('throw an error when number exceeds 3 digits', () => {});

  it('throw an error when operator is entered before number is entered', () => {});
});
