import { act } from 'react-dom/test-utils';

export const handleActions = (callbacks: Array<void | null>) => {
  callbacks.forEach((callback) => {
    act(() => callback);
  });
};
