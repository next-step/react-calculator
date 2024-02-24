import { ComponentProps, ReactNode } from 'react';
import { CalculateProvider } from './CalculatorProvider';
import DigitButton from './DigitButton';
import ModifierButton from './ModifierButton';
import OperationButton from './OperationButton';
import TotalDisplay from './TotalDisplay';

interface ContainerProps extends ComponentProps<'div'> {
  children: ReactNode;
}

function Container({ children, className }: ContainerProps) {
  return <div className={className}>{children}</div>;
}

export default function Calculator() {
  return (
    <CalculateProvider>
      <Container className="calculator">
        <TotalDisplay />
        <Container className="digits flex">
          <DigitButton number={9} />
          <DigitButton number={8} />
          <DigitButton number={7} />
          <DigitButton number={6} />
          <DigitButton number={5} />
          <DigitButton number={4} />
          <DigitButton number={3} />
          <DigitButton number={2} />
          <DigitButton number={1} />
          <DigitButton number={0} />
        </Container>
        <Container className="modifiers subgrid">
          <ModifierButton.AllClear />
        </Container>
        <Container className="operations subgrid">
          <OperationButton.Divide />
          <OperationButton.Multiply />
          <OperationButton.Subtract />
          <OperationButton.Add />
          <OperationButton.Equal />
        </Container>
      </Container>
    </CalculateProvider>
  );
}
