import React, { useEffect, useState } from "react";
import { SidebarWrapper } from "./Sidebar.styles";
import { sidebarArray } from "../../../constant";
import { useNavigate } from "react-router";
import { NavLink } from "react-router-dom";

const Sidebar = () => {

    const token = localStorage.getItem('token');

  return (
    <SidebarWrapper>
      {token ?<ul>
        {sidebarArray.map((item) => (
          <li
            key={item?.id}
          >
             <NavLink className={({ isActive }) => (isActive ? 'active' : '')} to={`/admin/${item.label.split(" ").join("-").toLowerCase()}`}>{item?.label}
             </NavLink>
          </li>
        ))}
      </ul> : ''}
    </SidebarWrapper>
  );
};

export default Sidebar;
