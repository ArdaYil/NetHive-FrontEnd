import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
}

const HGroup = ({ children }: Props) => {
  return <div className="flex-row">{children}</div>;
};

export default HGroup;
