type OperatorButtonProps = {
    setOperator: (value: string) => void;
    value: string;
}
  
export default function OperatorButton({setOperator, value}: OperatorButtonProps) {
      const handleClickOperator = (e) => {
        const { value: operator } = e.target;
        setOperator(operator);
      }
  
      return (
        <button className="operation" 
        onClick={handleClickOperator} 
        value={value}>
          {value}
      </button>
    );
  }