import { Link } from "react-router-dom";

const ProfileIcon = () => {
  return (
    <Link to="/account">
      <img src="/src/assets/profile.png" />
    </Link>
  );
};

export default ProfileIcon;
