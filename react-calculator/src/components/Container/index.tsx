import { HTMLAttributes, PropsWithChildren } from "react";

const Container = (
  props: PropsWithChildren<HTMLAttributes<HTMLDivElement>>
) => {
  const { children, ...rest } = props;
  return (
    <div {...rest} className="calculator">
      {children}
    </div>
  );
};

export default Container;
