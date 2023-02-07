import { insertDigit } from '@/store/calculator';
import { useDispatch } from 'react-redux';

export default function useDigit(value) {
  const dispatch = useDispatch();
  // const calculatorValue = useSelector((state) => state.calculator.value);
  // console.log(value, calculatorValue);
  dispatch(insertDigit(value));
}