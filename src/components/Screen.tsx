type ScreenProps = {
  value: string;
};

const Screen = ({ value }: ScreenProps) => {
  return <h1 id='total'>{value}</h1>;
};

export default Screen;
