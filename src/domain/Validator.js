export default class Validator {
  static MAX_DIGIT_LENGTH = 3;
  static MESSAGE = {
    'MAX_DIGIT_LENGTH': '숫자는 한번에 최대 3자리 수까지 입력 가능합니다.',
  };

  static isMaxDigitLength(digit) {
    return digit.length <= Validator.MAX_DIGIT_LENGTH;
  }
}