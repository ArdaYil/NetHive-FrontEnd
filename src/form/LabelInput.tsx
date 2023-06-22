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

  const space = className.indexOf(" ");
  const classNameFirst = className.substring(0, space) + "__label";

  const classNameSecond =
    className.substring(space, className.length) + "__label";

  return (
    <label
      className={className && classNameFirst + classNameSecond}
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
