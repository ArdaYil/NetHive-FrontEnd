import { CSSProperties, ReactNode } from "react";
import DynamicIndex from "../types/DynamicIndex";

interface Props {
  children: ReactNode | ReactNode[];
  alignment?: "flex-start" | "space-between" | "flex-end";
}

const HGroup = ({ children, alignment = "flex-start" }: Props) => {
  const style: DynamicIndex<CSSProperties> = {
    justifyContent: alignment,
  };

  return (
    <div style={style} className="flex-row">
      {children}
    </div>
  );
};

export default HGroup;
