interface ICalculator {
  calculation: string;
  setCalculation: Dispatch<SetStateAction<string>>;
}
export interface IDigitsProps extends ICalculator {}

export interface IModifiersProps {
  allClearHandler: Dispatch<SetStateAction<string>>;
}

export interface IOperationsProps extends ICalculator {}

export interface ITotalProps extends Omit<ICalculator, "setCalculation"> {}

export interface IUseDigtProps extends ICalculator {}

export interface IUseOperationProps extends ICalculator {}
