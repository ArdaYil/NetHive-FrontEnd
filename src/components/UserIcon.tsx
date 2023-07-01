import { CSSProperties } from "react";
import { em } from "../services/units";

interface Props {
  size: number;
  className?: string;
}

const UserIcon = ({ size, className = "" }: Props) => {
  const style: CSSProperties = {
    width: em(size),
    height: em(size),
  };

  return (
    <div style={style} className={`user-icon ${className}`}>
      <img className="user-icon__image" src="/src/assets/user.png" />
    </div>
  );
};

export default UserIcon;
