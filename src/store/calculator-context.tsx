import { createContext, useContext } from 'react';

import type { Operator } from '@/constants/operation';

type CalculatorContext = {
  computedInput: string;
  addOperation: (operator: Operator) => void;
  addNumber: (n: number) => void;
  calculate: () => void;
  reset: () => void;
};

export const CalculatorContext = createContext<CalculatorContext | null>(null);

export const useCalculator = () => {
  const context = useContext(CalculatorContext);
  if (!context) {
    throw new Error('useCalculator must ne used within a CalculatorProvider');
  }

  return context;
};
