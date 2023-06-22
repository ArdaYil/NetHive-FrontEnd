interface Props {
  children: string;
}

const SubmitButton = ({ children }: Props) => {
  return (
    <button className="submit-button btn--primary" type="submit">
      {children}
    </button>
  );
};

export default SubmitButton;
