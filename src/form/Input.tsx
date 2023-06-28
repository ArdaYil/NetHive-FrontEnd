import { ChangeEvent } from "react";

interface Props {
  placeHolder: string;
  onChange: (value: string) => void;
  percentWidth?: number;
  value: string;
  error?: string;
  type?: "text" | "password" | "email";
}

const Input = ({
  type = "text",
  placeHolder,
  percentWidth = 100,
  error,
  value,
  onChange,
}: Props) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    onChange(value);
  };

  return (
    <div style={{ width: `${percentWidth}%` }}>
      <input
        type={type}
        className="input"
        placeholder={placeHolder}
        onChange={handleChange}
        value={value}
        style={{ width: `100%` }}
      />
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default Input;
