class CalculatorClass {
  private _formula: string

  constructor() {
    this._formula='0'
  }

  number (num:number){
    if (this._formula === '0') {
      this._formula = num.toString()
    }
    else{
      this._formula += num.toString()
    }
    console.log(this._formula)
    return this._formula
  }
  
  add() {
    this._formula += '+'
    console.log(this._formula)
    
    return this._formula
  }
  subtract() {
    this._formula += '-'
    console.log(this._formula)
    
    return this._formula
  }
  multiply() {
    this._formula += '*'
    console.log(this._formula)
    
    return this._formula
  }
  divide() {
    this._formula += '/'
    console.log(this._formula)
    
    return this._formula
  }
  
  calculate(){
    this._formula = Math.floor(eval(this._formula)).toString()
    return this._formula
  }
  
  clearAll(){
    this._formula='0'
    return this._formula
  }
}

export default CalculatorClass