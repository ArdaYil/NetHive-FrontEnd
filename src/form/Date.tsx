import LabelInput from "./LabelInput";

interface Props {
  children: string;
  id: string;
  block?: boolean;
  onChange: (date: Date) => void;
}

const Date = (props: Props) => (
  <LabelInput
    className="date"
    {...props}
    textPosition="text-start"
    type="date"
  ></LabelInput>
);

export default Date;
