interface Props {
  className?: string;
  onClick: () => void;
}

const CloseButton = ({ className, onClick }: Props) => {
  const newClassName = className ? " " + className : "";

  return (
    <img
      onClick={onClick}
      className={"close-btn" + newClassName}
      src="/src/assets/close.png"
    />
  );
};

export default CloseButton;
