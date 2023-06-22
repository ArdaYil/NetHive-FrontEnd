interface Props {
  children?: string;
  id?: string;
  block?: boolean;
  type?: string;
  name?: string;
  className?: string;
  textPosition?: "text-start" | "text-end";
}

const LabelInput = ({
  id,
  children,
  type,
  name,
  textPosition = "text-end",
  className = "",
  block = false,
}: Props) => {
  const display = block ? "block" : "inline-block";

  return (
    <label
      className={className && className + "__label"}
      style={{ display }}
      htmlFor={id}
    >
      {textPosition == "text-start" && children}
      <input className={className} name={name} id={id} type={type} />
      {textPosition == "text-end" && children}
    </label>
  );
};

export default LabelInput;
