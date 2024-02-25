type ScreenPanelProps = {
  value: string;
};

const ScreenPanel = ({ value }: ScreenPanelProps) => {
  return <h1 id='total'>{value}</h1>;
};

export default ScreenPanel;
