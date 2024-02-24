/* eslint-disable react/prop-types */
export default function DigitButton({ value, firstNumber, setFirstNumber, operationType, secondNumber, setSecondNumber }) {
    const getValidateNumber = (prevNumber, nowClickNumber) => {
        if (prevNumber.length >= 3) {
            alert('숫자는 세 자리까지만 입력 가능합니다!');
            return prevNumber;
        }

        return String(Number(prevNumber + nowClickNumber));
    };

    const onClickDigitButton = (e) => {
        const nowClickValue = e.target.value;
        if (operationType === '') {
            if (firstNumber === '오류') {
                alert('AC 버튼을 눌러주세요.');
                return;
            }
            setFirstNumber(getValidateNumber(firstNumber, nowClickValue));
        } else {
            setSecondNumber(getValidateNumber(secondNumber, nowClickValue));
        }
    };

    return (
        <button value={value} onClick={onClickDigitButton}>
            {value}
        </button>
    );
}
