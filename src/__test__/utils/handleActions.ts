import { act } from 'react-dom/test-utils';

export const handleActions = (callbacks: Array<void>) => {
  callbacks.forEach((callback) => {
    act(() => callback);
  });
};
