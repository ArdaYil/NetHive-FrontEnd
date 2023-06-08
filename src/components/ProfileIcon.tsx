import { Link } from "react-router-dom";

const ProfileIcon = () => {
  return (
    <Link to="/account">
      <img
        src="/src/assets/profile.png"
        className="navbar__profile-icon img-medium"
      />
    </Link>
  );
};

export default ProfileIcon;
