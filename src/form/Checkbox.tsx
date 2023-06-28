import { ReactNode } from "react";
import LabelInput from "./LabelInput";

interface Props {
  children: string;
  error?: string;
  id: string;
  value: boolean;
  block?: boolean;
  className?: string;
  onChange: (value: boolean) => void;
}

const Checkbox = ({
  error,
  children,
  id,
  block,
  value,
  className,
  onChange,
}: Props) => (
  <div style={{ display: "inline-block" }}>
    <LabelInput
      className={`checkbox ${className}`}
      children={children}
      id={id}
      block={block}
      checked={value}
      onChange={onChange}
      type="checkbox"
    ></LabelInput>
    {error && <p className="input-error">{error}</p>}
  </div>
);

export default Checkbox;
