import Radiobox from "./Radiobox";

interface Props {
  name: string;
  radioBoxes: string[];
  className?: string;
  error?: string;
  onChange: (value: string) => void;
}

const RadioGroup = ({
  error,
  className,
  radioBoxes,
  name,
  onChange,
}: Props) => {
  return (
    <div className={className}>
      <h2 className={className && className + "__radiogroup-title"}>{name}</h2>
      <div className={className && className + "__radiobox-container"}>
        {radioBoxes.map((radiobox) => (
          <Radiobox
            key={radiobox}
            onChange={(value) => onChange(value)}
            id={radiobox.toLowerCase()}
            name={name.toLowerCase()}
            value={radiobox.toLowerCase()}
          >
            {radiobox}
          </Radiobox>
        ))}
      </div>
      {error && <p className="input-error">{error}</p>}
    </div>
  );
};

export default RadioGroup;
