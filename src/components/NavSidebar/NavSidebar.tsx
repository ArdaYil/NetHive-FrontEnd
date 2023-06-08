import { Link } from "react-router-dom";
import IconMedia from "../IconMedia";
import { useStore } from "zustand";
import navSidebarStore from "./NavSidebarStore";
import CloseButton from "../CloseButton";

const NavSidebar = () => {
  const isOpen = useStore(navSidebarStore, (s) => s.isOpen);
  const close = useStore(navSidebarStore, (s) => s.close);
  const openClassName = isOpen ? " open" : "";

  return (
    <aside className={"nav-sidebar" + openClassName}>
      <ul className="nav-sidebar__main-container">
        <IconMedia
          className="nav-sidebar__nav-item"
          src="/src/assets/profile.png"
        >
          <Link className="nav-sidebar__nav-item__text" to="/account">
            Account
          </Link>
        </IconMedia>
        <IconMedia
          className="nav-sidebar__nav-item"
          src="/src/assets/profile.png"
        >
          <Link className="nav-sidebar__nav-item__text" to="/account/friends">
            Friends
          </Link>
        </IconMedia>
        <IconMedia
          className="nav-sidebar__nav-item"
          src="/src/assets/profile.png"
        >
          <Link className="nav-sidebar__nav-item__text" to="/latest">
            Latest
          </Link>
        </IconMedia>
        <IconMedia
          className="nav-sidebar__nav-item"
          src="/src/assets/profile.png"
        >
          <Link className="nav-sidebar__nav-item__text" to="/spools">
            Spools
          </Link>
        </IconMedia>
      </ul>
      <CloseButton className="nav-sidebar__close-btn" onClick={close} />
    </aside>
  );
};

export default NavSidebar;
