import useCalculatorContext from "./hooks/useCalculatorContext.ts";
import {CalculatorNumberType} from "./type/enum/calculatorNumberType.ts";

const Digits = () => {
    const {onClickDigit} = useCalculatorContext();
    const digits = Object.values(CalculatorNumberType).reverse();

    return <div className="digits flex">
        {
            digits.map(value => {
                return (
                    <button key={`digit${value}`} className="digit" onClick={() => onClickDigit?.(value)}>
                        {value}
                    </button>
                )
            })
        }
    </div>
}

export default Digits;
