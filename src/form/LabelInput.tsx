import { ChangeEvent } from "react";

interface Props {
  children?: string;
  id?: string;
  block?: boolean;
  type?: string;
  name?: string;
  className?: string;
  checked?: boolean;
  value?: string;
  onChange: (data: any) => void;
  textPosition?: "text-start" | "text-end";
}

const LabelInput = ({
  id,
  children,
  type,
  name,
  value,
  checked,
  textPosition = "text-end",
  className = "",
  block = false,
  onChange,
}: Props) => {
  const display = block ? "block" : "inline-block";

  const space = className.indexOf(" ");
  const classNameFirst = className.substring(0, space) + "__label";

  const classNameSecond =
    className.substring(space, className.length) + "__label";

  const getValue = (e: ChangeEvent<HTMLInputElement>) =>
    type == "checkbox" ? e.target.checked : e.target.value;

  return (
    <label
      className={className && classNameFirst + classNameSecond}
      style={{ display }}
      htmlFor={id}
    >
      {textPosition == "text-start" && children}
      <input
        onChange={(e) => onChange(getValue(e))}
        className={className}
        name={name}
        id={id}
        checked={checked}
        type={type}
        value={value && value}
      />
      {textPosition == "text-end" && children}
    </label>
  );
};

export default LabelInput;
