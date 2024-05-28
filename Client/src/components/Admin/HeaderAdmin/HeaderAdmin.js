import React from "react";
import { HeaderAdminWrapper } from "./HeaderAdmin.styles";
import handIcon from "../../../assets/images/hand-icon.svg";
import { Avatar } from "antd";
import { useNavigate } from "react-router";
import CustomButtom from "../../CustomButtom/CustomButtom";
import { color } from "../../../assets/css/variable";

const Header = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate("/admin/login");
  };

  return (
    <HeaderAdminWrapper>
      <div className="user">
        Hello, {token ? "Admin" : "There"}{" "}
        <img src={handIcon} alt="hand-icon" width={32} height={32} />
      </div>
      {/* {token && <div className='logout-btn' onClick={handleLogout}>Logout</div>} */}
      {token && (
        <div className="user-avatar">
          <div className="logout-btn" onClick={handleLogout}>
                <CustomButtom
                  className="primary-btn"
                  text={'Logout'}
                  icon={null}
                  height={"30px"}
                  background={`${color.secondaryColor}`}
                  color={`${color.greyColor1}`}
                //   textVisiableMb={true}
                />
          </div>
          {/* <Avatar size={50}>
            <img
              src="https://randomuser.me/api/portraits/men/42.jpg"
              alt="user"
            />
          </Avatar> */}
        </div>
      )}
    </HeaderAdminWrapper>
  );
};

export default Header;
