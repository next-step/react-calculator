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
      const { value: number } = e.currentTarget;

      (!operator) ? 
      setFirstNumber(firstNumber + number) 
      : setSecondNumber(secondNumber + number);
      
      console.log(firstNumber, operator, secondNumber);
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