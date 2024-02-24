import { ERROR_INFINITY } from "@/constant";

interface CalculateDisplay {
  calculrateState: {
    first: string;
    second: string;
    operator: string;
    computed: number;
    display: string;
  };
}

const CalculateDisplay = ({ calculrateState }: CalculateDisplay) => {
  const { display, computed } = calculrateState;
  const result = computed === Infinity ? ERROR_INFINITY : Math.floor(computed);

  return <h1 id="total">{result || display || 0}</h1>;
};

export default CalculateDisplay;
