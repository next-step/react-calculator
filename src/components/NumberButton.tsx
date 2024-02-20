type NumberButtonProps = {
    setFirstNumber: (value: string) => void;
    firstNumber: string;
    setSecondNumber: (value: string) => void;
    secondNumber: string;
    operator: string;
    value: number;
  }
  
export default  function NumberButton({setFirstNumber, firstNumber, setSecondNumber, secondNumber, operator, value}: NumberButtonProps ){
    const handleClickNumber= (e: React.MouseEvent<HTMLButtonElement>) => {
      const { value } = e.currentTarget;
      const number = value;
  
      operator ? 
      setFirstNumber(firstNumber + number) 
      : setSecondNumber(secondNumber + number);
    
    }
  
    return (
      <button 
        className="digit"
        onClick={handleClickNumber} 
        value={value}>
        {value}
      </button>
    )
  }