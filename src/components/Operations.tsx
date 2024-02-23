import styled from '../css/index.module.css';

type Props = {
  onOperationClick: (operation: string) => void;
};

export default function Operations({ onOperationClick }: Props) {
  return (
    <div className={`${styled.operations} ${styled.subgrid}`}>
      {['/', 'X', '-', '+', '='].map((operation, index) => (
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
