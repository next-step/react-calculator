import React, { useReducer, useState } from 'react';

export const REDUCER_TYPE = {
  INPUT: 'INPUT',
  RESET: 'RESET',
};
export const initialState = {
  total: '',
  currentNumber: '',
};

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case REDUCER_TYPE.INPUT:
      return { ...state, total: action.payload, currentNumber: action.payload };

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
