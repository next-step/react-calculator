import '../css/total.css';
import { useCalculator } from '../store/CalcContext';
const Total = () => {
  const { ...state } = useCalculator();
  console.log(state);
  return <h1 id="total">{state.total}</h1>;
};

export default Total;
