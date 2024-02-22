import { Button } from '@/components/Button.tsx';
import styles from './Calculator.module.css';

export const Calculator = () => (
  <div className={styles.calculator}>
    <h1 className={styles.total}>0</h1>
    <div className={styles.digits}>
      <Button colorScheme="digit">9</Button>
      <Button colorScheme="digit">8</Button>
      <Button colorScheme="digit">7</Button>
      <Button colorScheme="digit">6</Button>
      <Button colorScheme="digit">5</Button>
      <Button colorScheme="digit">4</Button>
      <Button colorScheme="digit">3</Button>
      <Button colorScheme="digit">2</Button>
      <Button colorScheme="digit">1</Button>
      <Button colorScheme="digit">0</Button>
    </div>
    <div className={`${styles.modifiers} ${styles.subgrid}`}>
      <Button colorScheme="modifier">AC</Button>
    </div>
    <div className={`${styles.operations} ${styles.subgrid}`}>
      <Button colorScheme="operation">/</Button>
      <Button colorScheme="operation">X</Button>
      <Button colorScheme="operation">-</Button>
      <Button colorScheme="operation">+</Button>
      <Button colorScheme="operation">=</Button>
    </div>
  </div>
);
