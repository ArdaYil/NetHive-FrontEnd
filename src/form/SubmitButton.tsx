import { CSSProperties, HTMLAttributes } from "react";
import { em } from "../services/units";
import { HorizontalDirection } from "../types/Direction";
import DynamicIndex from "../types/DynamicIndex";

interface Props {
  children: string;
  className?: string;
}

const SubmitButton = ({ children, className = "" }: Props) => {
  return (
    <button className={"btn--primary " + className} type="submit">
      {children}
    </button>
  );
};

export default SubmitButton;
