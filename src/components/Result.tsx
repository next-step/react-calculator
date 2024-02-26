import { Operator } from './button/button.type';

export const Result = ({
  result,
  current,
  operator,
}: {
  result: number;
  current: {
    x: number;
    y: number;
  };
  operator: Operator | null;
}) => {
  return (
    <h1 id='total'>
      {result ? (
        result
      ) : (
        <>
          {current.x}
          {operator}
          {current.y || ''}
        </>
      )}
    </h1>
  );
};
