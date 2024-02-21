import { Button } from '.';
import { BUTTON } from './button/button.constant';

export const Modifier = () => {
  return (
    <div className='modifiers subgrid'>
      {Object.values(BUTTON.MODIFIER.CHILDREN).map(({ ID, VALUE }) => (
        <Button key={ID} type={BUTTON.MODIFIER.TYPE}>
          {VALUE}
        </Button>
      ))}
    </div>
  );
};
