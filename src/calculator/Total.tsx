import useCalculatorContext from "./hooks/useCalculatorContext.ts";
import {OperationType} from "./type/enum/operationType.ts";

const Total = () => {
    const {display} = useCalculatorContext();
    return (
        <h1 id="total">{display.prev === '' ? 0 : display.prev}{display.operation === OperationType.RESULT ? '' : display.operation}{display.after}</h1>
    );
}

export default Total;