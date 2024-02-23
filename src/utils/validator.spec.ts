import { validator } from './validator';

describe('validator', () => {
  it('validNumber 함수에 숫자를 전달했을 때, true를 반환합니다.', () => {
    const result = validator.validNumber(1);
    expect(result).toBe(true);
  });

  it('validNumber 함수에 문자열 숫자를 전달했을 때, true를 반환합니다.', () => {
    const result = validator.validNumber('1');
    expect(result).toBe(true);
  });

  it('validNumber 함수에 숫자가 아닌 값을 전달했을 때, false를 반환합니다.', () => {
    const result = validator.validNumber('a');
    expect(result).toBe(false);
  });

  it('validNumber 함수에 빈 문자열을 전달했을 때, false를 반환합니다.', () => {
    const result = validator.validNumber('');
    expect(result).toBe(false);
  });

  it('validNumber 함수에 Infinity를 전달했을 때, false를 반환합니다.', () => {
    const result = validator.validNumber(Infinity);
    expect(result).toBe(false);
  });

  it('validNumber 함수에 NaN를 전달했을 때, false를 반환합니다.', () => {
    const result = validator.validNumber(NaN);
    expect(result).toBe(false);
  });
});
