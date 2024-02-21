import { Button } from '.';
import { BUTTON } from './button/button.constant';

export const Digits = () => {
  return (
    <div className='digits flex'>
      {Object.values(BUTTON.DIGIT.CHILDREN).map(({ ID, VALUE }) => (
        <Button key={ID} type={BUTTON.DIGIT.TYPE}>
          {VALUE}
        </Button>
      ))}
    </div>
  );
};
