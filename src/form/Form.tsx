import { FormEvent, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
  onSubmit: () => void;
}

const Form = ({ className, onSubmit, children }: Props) => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form noValidate className={className + " form"} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

export default Form;
