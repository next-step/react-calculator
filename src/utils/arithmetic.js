export const arithmetic = (augend, addend, operation) => {
  switch (operation) {
    case '+':
      return augend + addend;
    case '-':
      return augend - addend;
    case '/':
      return Math.floor(augend / addend);
    case 'X':
      return augend * addend;
  }
};
