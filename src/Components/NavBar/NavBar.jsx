//Styles
import { NavBarStyle } from "./NavBarStyle";

//Components
import { NavLink } from "react-router-dom";

//Icons
import { CgFileDocument } from "react-icons/cg";

export const NavBar = () => {
  return (
    <NavBarStyle>
      <ul>
        <NavLink to="/">
          <CgFileDocument />
          <h3>Projetos</h3>
        </NavLink>
      </ul>
    </NavBarStyle>
  );
};
