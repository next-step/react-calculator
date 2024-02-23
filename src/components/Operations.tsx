import styled from '../css/index.module.css';
import { OPERATIONS } from '../constant/calculator';

type Props = {
  onOperationClick: (operation: string) => void;
};

export default function Operations({ onOperationClick }: Props) {
  return (
    <div className={`${styled.operations} ${styled.subgrid}`}>
      {OPERATIONS.map((operation, index) => (
        <button
          key={index}
          className={styled.operation}
          onClick={() => onOperationClick(operation)}
        >
          {operation}
        </button>
      ))}
    </div>
  );
}
