import {createContext} from "react";
import {OperationType} from "../type/enum/operationType.ts";
import {DisplayInterface} from "../type/interface/displayInterface.ts";
import {CalculatorNumberType} from "../type/enum/calculatorNumberType.ts";

export interface calculatorContext {
    display: DisplayInterface,

    onClickOperation?: (operation: OperationType) => void;
    onClickAllClear?: () => void;
    onClickDigit?: (digit: CalculatorNumberType) => void;
}

export const CalculatorContext = createContext<calculatorContext>({
    display: {
        prev: '',
        after: '',
        operation: OperationType.RESULT
    }
});
