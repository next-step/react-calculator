import { configureStore } from '@reduxjs/toolkit';
import calculatorReducer from '@/store/calculator.js';

export default configureStore({
  reducer: {
    calculator: calculatorReducer
  },
});