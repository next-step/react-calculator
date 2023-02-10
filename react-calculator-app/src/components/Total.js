import '../css/total.css';
import { useCalculator } from '../store/CalcContext';
const Total = () => {
  const { total } = useCalculator();
  return <h1 id="total">{total}</h1>;
};

export default Total;
