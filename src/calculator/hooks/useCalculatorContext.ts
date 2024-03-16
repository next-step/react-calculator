import {CalculatorContext} from "../context/calculatorContext.ts";
import {useContext} from "react";

const useCalculatorContext = () => {
    return useContext(CalculatorContext);
}

export default useCalculatorContext;
