import {OperationType} from "./type/enum/operationType.ts";
import useCalculatorContext from "./hooks/useCalculatorContext.ts";

const Operation = () => {
    const {onClickOperation} = useCalculatorContext();

    return <div className="operations subgrid">
        {
            Object.values(OperationType).map(value => {
                return (
                    <button className="operation" key={value} onClick={() => onClickOperation?.(value)}>
                        {value}
                    </button>
                )
            })
        }
    </div>
}

export default Operation;