import {FC} from "react";
import Button from "../button/Button";
import useCalculator from "../hooks/useCalculator.tsx";
import {OperationTypeEnum} from "./Opertaiton.type.ts";
import {ButtonVariantEnum} from "../button/Button.type.ts";

const OPERATION_BUTTON_LIST: { render: string; type: OperationTypeEnum }[] = [
    {render: "/", type: OperationTypeEnum.DIVIDE},
    {render: "X", type: OperationTypeEnum.MULTIPLE},
    {render: "-", type: OperationTypeEnum.SUBTRACT},
    {render: "+", type: OperationTypeEnum.ADD},
    {render: "=", type: OperationTypeEnum.EQUAL},
];

interface Props {
    number: { left: string; right: string };
    operator: {
        render: string;
        type: OperationTypeEnum;
    };
    setOperator: (operation: { render: string; type: OperationTypeEnum }) => void;
    handleCalculatorResult: (value: string) => void;
}

const Operator: FC<Props> = ({
        number: {left, right},
        operator: {type},
        setOperator,
        handleCalculatorResult,
    }) => {
    const {calcMul, calcSub, calcDiv, calcAdd} = useCalculator();

    const handleClickOperator = (operator: {
        render: string;
        type: OperationTypeEnum;
    }) => {
        if(!Number(left)) return alert("숫자를 먼저 입력한 후 연산자를 입력해주세요!");
        if (type !== OperationTypeEnum.INIT)
            return alert("연산자는 한번만 입력해주세요.");

        setOperator(operator);
    };

    const handleClickResult = () => {
        switch (type) {
            case "add":
                return handleCalculatorResult(`${calcAdd(Number(left), Number(right))}`);
            case "subtract":
                return handleCalculatorResult(`${calcSub(Number(left), Number(right))}`);
            case "multiple":
                return handleCalculatorResult(`${calcMul(Number(left), Number(right))}`);
            case "divide":
                return handleCalculatorResult(`${calcDiv(Number(left), Number(right))}`);
        }
    };

    return (
        <div className="operations subgrid">
            {OPERATION_BUTTON_LIST.map(({render, type}) => (
                <Button
                    key={type}
                    variant={ButtonVariantEnum.OPERATION}
                    onClick={() =>
                        type === OperationTypeEnum.EQUAL
                            ? handleClickResult()
                            : handleClickOperator({render, type})
                    }
                >
                    {render}
                </Button>
            ))}
        </div>
    );
};

export default Operator;