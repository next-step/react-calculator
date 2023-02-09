import { createContext, useContext } from 'react';

export const CalcContext = createContext(null);

export const useCalculator = () => {
  const context = useContext(CalcContext);

  if (!context)
    throw new Error('useCalculator must be used within the CalculatorProvider');

  return context;
};
