import LabelInput from "./LabelInput";

interface Props {
  children: string;
  id: string;
  block?: boolean;
}

const Checkbox = (props: Props) => (
  <LabelInput className="checkbox" {...props} type="checkbox"></LabelInput>
);

export default Checkbox;
