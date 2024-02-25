import { NUMBER_MAX_LENGTH } from '../../../constants';

export const validateDigitLength = (value: string) => {
  if (value.length > NUMBER_MAX_LENGTH) {
    alert('숫자는 3자리까지만 입력 가능합니다.');
    return;
  }
};
