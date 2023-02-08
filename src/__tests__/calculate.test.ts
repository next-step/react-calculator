import { calculate } from 'utils';

describe('calculate 함수', () => {
  const augend = 7;
  const addend = 4;

  test("operation이 '+'인 경우 augend와 addend를 더한 값을 반환해야 한다.", () => {
    const operation = '+';

    expect(calculate(augend, addend, operation)).toBe(11);
  });

  test("operation이 '-'인 경우 augend에서 addend를 뺀 값을 반환해야 한다.", () => {
    const operation = '-';

    expect(calculate(augend, addend, operation)).toBe(3);
  });

  test("operation이 'X'인 경우 augend와 addend를 곱한 값을 반환해야 한다.", () => {
    const operation = 'X';

    expect(calculate(augend, addend, operation)).toBe(28);
  });

  test("operation이 '/'인 경우 augend를 addend로 나눈 값을 반환해야 한다.", () => {
    const operation = '/';

    expect(calculate(augend, addend, operation)).toBe(1);
  });
});
