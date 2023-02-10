export const validate = (predicate: boolean, message: string) => {
  if (!predicate) {
    throw new Error(message);
  }
};
