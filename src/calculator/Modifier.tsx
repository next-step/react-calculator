import useCalculatorContext from "./hooks/useCalculatorContext.ts";

const Modifier = () => {
    const {onClickAllClear} = useCalculatorContext();

    return (
        <div className="modifiers subgrid">
            <button className="modifier" onClick={onClickAllClear}>AC</button>
        </div>
    )
}

export default Modifier;