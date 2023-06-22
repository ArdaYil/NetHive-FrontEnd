import { ChangeEvent, useState } from "react";

interface Props {
  placeHolder: string;
  onChange: (value: string) => void;
  percentWidth?: number;
  type?: "text" | "password" | "email";
}

const Input = ({
  type = "text",
  placeHolder,
  percentWidth = 100,
  onChange,
}: Props) => {
  const [value, setValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setValue(value);
    onChange(value);
  };

  return (
    <input
      type={type}
      className="input"
      placeholder={placeHolder}
      onChange={handleChange}
      style={{ width: `${percentWidth}%` }}
      value={value}
    />
  );
};

export default Input;
