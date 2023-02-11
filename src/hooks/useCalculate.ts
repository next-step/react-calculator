import React, { useReducer, useState } from 'react';

export const REDUCER_TYPE = {
  INPUT_DIGIT: 'INPUT_DIGIT',
  INPUT_OPERATOR: 'INPUT_OPERATOR',
  RESET_CURRENT_NUMBER: 'RESET_CURRENT_NUMBER',
  CALCULATE: 'CALCULATE',
  RESET: 'RESET',
};
export const initialState = {
  total: '',
  beforeNumber: '',
  currentNumber: '',
  operator: '',
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case REDUCER_TYPE.INPUT_DIGIT:
      return { ...state, ...action.payload };
    case REDUCER_TYPE.INPUT_OPERATOR:
      return { ...state, ...action.payload };
    case REDUCER_TYPE.RESET_CURRENT_NUMBER:
      return {
        ...state,
        currentNumber: initialState.currentNumber,
      };
    case REDUCER_TYPE.CALCULATE:
      return {
        ...state,
        total: initialState.total,
        beforeNumber: initialState.beforeNumber,
        currentNumber: action.payload,
        operator: initialState.operator,
      };
    case REDUCER_TYPE.RESET:
      return initialState;
  }
};

const useCalculate = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    state,
    dispatch,
  };
};

export default useCalculate;
