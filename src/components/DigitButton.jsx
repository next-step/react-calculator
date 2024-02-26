/* eslint-disable react/prop-types */
export default function DigitButton({ value, firstNumber, setFirstNumber, operationType, secondNumber, setSecondNumber }) {
    // 입력한 숫자의 범위 초과하는지 검증
    const isMaxLengthExceeded = (prevNumber) => {
        if (prevNumber.length >= 3) {
            alert('숫자는 세 자리까지만 입력 가능합니다!');
            return true;
        }
        return false;
    };

    // 새로운 입력값 추가한 새로운 값 리턴
    const getExtendedValue = (prevNumber, nowClickNumber) => {
        return String(Number(prevNumber + nowClickNumber));
    };

    const onClickDigitButton = (e) => {
        const nowClickValue = e.target.value;
        if (operationType === '') {
            if (firstNumber === '오류') {
                alert('AC 버튼을 눌러주세요.');
                return;
            }

            // 최대 입력 범위 초과
            if (isMaxLengthExceeded(firstNumber)) {
                setFirstNumber(String(firstNumber));
                return;
            }

            // 연장된 값
            const extendedValue = getExtendedValue(firstNumber, nowClickValue);
            setFirstNumber(extendedValue);
        } else {
            // 최대 입력 범위 초과
            if (isMaxLengthExceeded(secondNumber)) {
                setSecondNumber(String(secondNumber));
                return;
            }

            // 연장된 값
            const extendedValue = getExtendedValue(secondNumber, nowClickValue);
            setSecondNumber(extendedValue);
        }
    };

    return (
        <button value={value} onClick={onClickDigitButton}>
            {value}
        </button>
    );
}
