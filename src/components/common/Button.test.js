import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from './Button';

test('랜더링될 때 value를 버튼의 텍스트로 화면에 출력한다.', () => {
  render(<Button value="1" />);

  const ButtonElement = screen.getByText('1');

  expect(ButtonElement).toHaveTextContent('1');
});
