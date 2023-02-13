interface ResultProps {
  displayValue: string;
}

const Result = (props: ResultProps) => {
  const { displayValue } = props;
  return <h1 id="total">{displayValue}</h1>;
};

export default Result;
