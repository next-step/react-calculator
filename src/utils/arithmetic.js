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
    default:
      alert('잘못된 기호 또는 문자가 포함되어있습니다.');
      return '';
  }
};
