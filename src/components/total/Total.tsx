import { FC, ReactNode } from "react";

const Total: FC<{ children: ReactNode }> = ({ children }) => {
  return <h1 id="total">{children}</h1>;
};

export default Total;