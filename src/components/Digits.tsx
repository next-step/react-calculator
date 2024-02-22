import { Button } from '.';
import { BUTTON } from './button/button.constant';
import { Digit } from './button/button.type';

export const Digits = ({ handler }: { handler: (value: Digit) => void }) => {
  return (
    <div className='digits flex'>
      {Object.values(BUTTON.DIGIT.CHILDREN).map(({ ID, VALUE }) => (
        <Button
          key={ID}
          classNames={BUTTON.DIGIT.CLASSNAMES}
          onClick={() => handler(VALUE)}
        >
          {VALUE}
        </Button>
      ))}
    </div>
  );
};
