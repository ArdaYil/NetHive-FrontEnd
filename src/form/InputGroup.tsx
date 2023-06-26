import { CSSProperties, ReactNode } from "react";
import DynamicIndex from "../types/DynamicIndex";
import { em } from "../services/units";

interface Props {
  children: ReactNode | ReactNode[];
  flow?: "ROW" | "COLUMN";
}

const InputGroup = ({ children, flow = "COLUMN" }: Props) => {
  const style: DynamicIndex<CSSProperties> = {
    marginBottom: em(20),
    display: "flex",
    flexDirection: flow == "ROW" ? "row" : "column",
    justifyContent: "space-between",
    gap: flow == "COLUMN" ? em(10) : 0,
  };

  return <section style={style}>{children}</section>;
};

export default InputGroup;
