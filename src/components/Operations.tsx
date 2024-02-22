import { Button } from '.';
import { BUTTON } from './button/button.constant';
import { Operator } from './button/button.type';

export const Operations = ({
  handler,
}: {
  handler: (value: Operator) => void;
}) => {
  return (
    <div className='operations subgrid'>
      {Object.values(BUTTON.OPERATION.CHILDREN).map(({ ID, VALUE }) => (
        <Button
          key={ID}
          classNames={BUTTON.OPERATION.CLASSNAMES}
          onClick={() => handler(VALUE)}
        >
          {VALUE}
        </Button>
      ))}
    </div>
  );
};
