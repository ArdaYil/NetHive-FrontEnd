import LabelInput from "./LabelInput";

interface Props {
  children: string;
  id: string;
  block?: boolean;
  name: string;
  checked: boolean;
  value: string;
  onChange: (value: string) => void;
}

const Radiobox = (props: Props) => (
  <LabelInput className="radiobox" {...props} type="radio"></LabelInput>
);

export default Radiobox;
