import { validator } from './validator';

describe('validateNumber', () => {
  it('숫자를 전달했을 때, true를 반환합니다.', () => {
    const result = validator.validateNumber(1);
    expect(result).toBe(true);
  });

  it('문자열 숫자를 전달했을 때, true를 반환합니다.', () => {
    const result = validator.validateNumber('1');
    expect(result).toBe(true);
  });

  it('숫자가 아닌 값을 전달했을 때, false를 반환합니다.', () => {
    const result = validator.validateNumber('a');
    expect(result).toBe(false);
  });

  it('빈 문자열을 전달했을 때, false를 반환합니다.', () => {
    const result = validator.validateNumber('');
    expect(result).toBe(false);
  });

  it('Infinity를 전달했을 때, false를 반환합니다.', () => {
    const result = validator.validateNumber(Infinity);
    expect(result).toBe(false);
  });

  it('NaN를 전달했을 때, false를 반환합니다.', () => {
    const result = validator.validateNumber(NaN);
    expect(result).toBe(false);
  });
});

describe('validateInfinity', () => {
  it('Infinity를 전달했을 때, true를 반환합니다.', () => {
    const result = validator.validateInfinity(Infinity);
    expect(result).toBe(true);
  });

  it('-Infinity를 전달했을 때, true를 반환합니다.', () => {
    const result = validator.validateInfinity(-Infinity);
    expect(result).toBe(true);
  });

  it('Infinity가 아닌 값을 전달했을 때, false를 반환합니다.', () => {
    const result = validator.validateInfinity(1);
    expect(result).toBe(false);
  });
});
