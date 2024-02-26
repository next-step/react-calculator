/* eslint-disable react/prop-types */
export default function OperationButton({ operationName, firstNumber, setOperationType }) {
    const onClickOperationButton = (e) => {
        if (firstNumber === '') {
            alert('숫자를 먼저 입력한 후 연산을 입력해주세요!');
            return;
        }

        setOperationType(e.target.value);
    };
    return (
        <button value={operationName} onClick={onClickOperationButton}>
            {operationName}
        </button>
    );
}
