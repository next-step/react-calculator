export interface IDigitsProps {
  calculation: string;
  setCalculation: Dispatch<SetStateAction<string>>;
}

export interface IModifiersProps {
  setCalculation: Dispatch<SetStateAction<string>>;
}

export interface IOperationsProps {
  calculation: string;
  setCalculation: Dispatch<SetStateAction<string>>;
}

export interface ITotalProps {
  calculation: string;
}
