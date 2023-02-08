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

  it('can multiply two numbers', () => {
    const result = Calculator(['999', '*', '999']).enter('=');

    expect(result.value).toBe('998001');
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
