import { Button } from '.';
import { BUTTON } from './button/button.constant';
import { Modifier } from './button/button.type';

export const Modifiers = ({
  handler,
}: {
  handler: (value: Modifier) => void;
}) => {
  return (
    <div className='modifiers subgrid'>
      {Object.values(BUTTON.MODIFIER.CHILDREN).map(({ ID, VALUE }) => (
        <Button
          key={ID}
          classNames={BUTTON.MODIFIER.CLASSNAMES}
          onClick={() => handler(VALUE)}
        >
          {VALUE}
        </Button>
      ))}
    </div>
  );
};
