import '../css/modifier.css';
import { useCalculator } from '../store/CalcContext';

const Modifier = () => {
  const { reset } = useCalculator();
  return (
    <div className="modifiers subgrid">
      <button className="modifier" onClick={reset}>
        AC
      </button>
    </div>
  );
};

export default Modifier;
