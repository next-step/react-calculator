import useCalculatorContext from "./hooks/useCalculatorContext.ts";

const Digits = () => {
    const {onClickDigit} = useCalculatorContext();

    return <div className="digits flex">
        {
            Array.from({length: 10}).map((_, idx) => {
                const digit = 9 - idx;
                return (
                    <button key={`digit${digit}`} className="digit" onClick={() => onClickDigit?.(String(digit))}>
                        {digit}
                    </button>
                )
            })
        }
    </div>
}

export default Digits;