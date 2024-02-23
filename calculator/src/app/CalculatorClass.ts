class CalculatorClass {
  formula = ''

  constructor() {}

  add() {
    return this.formula +'+'
  }
  subtract() {
      return this.formula + '-'
  }
  multiply() {
    return this.formula + '*'
  }
  divide() {
    return this.formula + '/'
  }

  calculate(){
    return Math.floor(eval(this.formula))
  }

  clearAll(){
    return 0;
  }
}