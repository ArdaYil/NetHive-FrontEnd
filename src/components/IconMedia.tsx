import { ReactNode } from "react";

interface Props {
  src: string;
  children: string | ReactNode;
  className?: string;
}

const IconMedia = ({ src, children, className }: Props) => {
  const newClassName = className ? " " + className : "";

  return (
    <article className={"icon-media" + newClassName}>
      <img className="img-small" src={src} />
      {typeof children === "string" ? (
        <p className={newClassName && newClassName + "__text"}>{children}</p>
      ) : (
        children
      )}
    </article>
  );
};

export default IconMedia;
