import { Button } from '.';
import { BUTTON } from './button/button.constant';

export const Operations = () => {
  return (
    <div className='operations subgrid'>
      {Object.values(BUTTON.OPERATION.CHILDREN).map(({ ID, VALUE }) => (
        <Button key={ID} type={BUTTON.OPERATION.TYPE}>
          {VALUE}
        </Button>
      ))}
    </div>
  );
};
