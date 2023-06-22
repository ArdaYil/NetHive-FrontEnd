import { FormEvent, ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
}

const Form = ({ className, children }: Props) => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form noValidate className={className + " form"} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
