import { calculate, validateOperand } from '../../domain/calculator';
import { OPERAND_INITIAL_VALUE, OPERATOR_INITIAL_VALUE } from '../../constants/calculator';
import { InitialOperator, Operator } from '../../types/calculator';
import { initialState, State } from './context';
import { Action } from './action';

export const calculatorReducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'ADD':
    case 'SUBTRACT':
    case 'MULTIPLY':
    case 'DIVIDE':
      return { ...state, operator: action.payload as Operator };

    case 'EQUAL': {
      if (state.operator === '') return state;

      return {
        operand1: calculate(state),
        operand2: OPERAND_INITIAL_VALUE,
        operator: OPERATOR_INITIAL_VALUE as InitialOperator,
      };
    }

    case 'AC': {
      return initialState;
    }

    case 'OPERAND': {
      try {
        const targetOperand = state.operator === '' ? 'operand1' : 'operand2';

        const concatOperand = String(state[targetOperand]) + String(action.payload);
        validateOperand(concatOperand.length);

        return { ...state, [targetOperand]: Number(concatOperand) };
      } catch (error) {
        alert(error);
        return state;
      }
    }

    default: {
      throw new Error('reducer에 전달되는 action의 type이 옳바르지 않습니다.');
    }
  }
};
