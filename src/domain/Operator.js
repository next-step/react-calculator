export default class Operator {
  plus(a, b) {
    return Number(a) + Number(b);
  }

  minus(a, b) {
    return Number(a) - Number(b);
  }

  multiple(a, b) {
    return Number(a) * Number(b);
  }

  division(a, b) {
    return Math.floor(Number(a) / Number(b));
  }
}