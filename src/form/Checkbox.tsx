import { ReactNode } from "react";
import LabelInput from "./LabelInput";

interface Props {
  children: string;
  id: string;
  block?: boolean;
  className?: string;
  onChange: (value: boolean) => void;
}

const Checkbox = ({ children, id, block, className, onChange }: Props) => (
  <LabelInput
    className={`checkbox ${className}`}
    children={children}
    id={id}
    block={block}
    onChange={onChange}
    type="checkbox"
  ></LabelInput>
);

export default Checkbox;
