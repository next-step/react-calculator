import React from 'react';
import { render } from '@testing-library/react';

import Button from './Button';

import { DIGITS } from '../../constants/digits';

test('랜더링될 때 value를 버튼의 텍스트로 화면에 출력한다.', () => {
  const { getByText } = render(<Button value={DIGITS.ONE}>{DIGITS.ONE}</Button>);

  const ButtonElement = getByText('1');

  expect(ButtonElement).toBeInTheDocument();
});
