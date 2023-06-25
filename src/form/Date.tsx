import LabelInput from "./LabelInput";

interface Props {
  children: string;
  id: string;
  block?: boolean;
  error?: string;
  onChange: (date: Date) => void;
}

const Date = (props: Props) => (
  <div>
    <LabelInput
      className="date"
      {...props}
      textPosition="text-start"
      type="date"
    />
    {props.error && <p className="input-error">{props.error}</p>}
  </div>
);

export default Date;
