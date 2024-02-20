type ResultButtonProps = {
    value: string;
}
  
export default function ResultButton({value}: ResultButtonProps) {
    return(
      <button className="operation">
      {value}
    </button>
    );
  }
  