import { ReactNode } from "react";
import LabelInput from "./LabelInput";

interface Props {
  children: string;
  id: string;
  block?: boolean;
  className?: string;
}

const Checkbox = ({ children, id, block, className }: Props) => (
  <LabelInput
    className={`checkbox ${className}`}
    children={children}
    id={id}
    block={block}
    type="checkbox"
  ></LabelInput>
);

export default Checkbox;
