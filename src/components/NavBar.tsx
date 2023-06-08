import Logo from "./Logo";
import MenuButton from "./MenuButton";
import ProfileIcon from "./ProfileIcon";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Logo />
      <div className="navbar__left-group">
        <MenuButton />
        <ProfileIcon />
      </div>
    </nav>
  );
};

export default NavBar;
