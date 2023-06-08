import { useStore } from "zustand";
import navSidebarStore from "./NavSidebar/NavSidebarStore";

const MenuButton = () => {
  const open = useStore(navSidebarStore, (s) => s.open);

  return (
    <button onClick={open} className="navbar__menu-button">
      <img className="img-medium" src="/src/assets/hamburger-icon.png" />
    </button>
  );
};

export default MenuButton;
