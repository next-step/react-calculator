import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ReactElement } from 'react';

export default async (component: ReactElement) => {
  const user = userEvent.setup();
  return {
    user,
    ...render(component),
  };
};
