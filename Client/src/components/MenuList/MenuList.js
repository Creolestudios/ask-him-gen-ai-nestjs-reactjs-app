import React from "react";
import { MenuListWrapper } from "./MenuList.styles";
import { NavLink } from "react-router-dom";

const MenuList = ({ list, windowWidth, setOpen }) => {
  return (
    <MenuListWrapper className={`${windowWidth < 768 ? "mobile-list" : ""}`}>
      <ul>
        {list?.map((menu_item) => (
          <li key={menu_item?.title} onClick={() => setOpen && setOpen(false)}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to={menu_item?.target}
            >
              {menu_item?.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </MenuListWrapper>
  );
};

export default MenuList;
