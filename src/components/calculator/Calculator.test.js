import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import Calculator from './calculator';

test('버튼을 클릭하면 h1 태그에 버튼의 value가 텍스트로 입력된다.', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByText('1'));
  fireEvent.click(screen.getByText('+'));
  fireEvent.click(screen.getByText('1'));

  const h1Element = screen.getByRole('heading');

  expect(h1Element).toHaveTextContent('1+1');
});
