import React, { useEffect } from "react";
import { AdminWrapper, ContentWrapper } from "./Admin.styles";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";
import HeaderAdmin from "../../components/Admin/HeaderAdmin/HeaderAdmin";
import { Navigate, Route, Routes, useNavigate } from "react-router";
import Dashboard from "./Dashboard/Dashboard";
import ChatHistory from "./ChatHistory/ChatHistory";
import Login from "./Login/Login";
import Reset from "./Reset/Reset"
import PrivateAuth from "../../components/PrivateAuth/PrivateAuth";
import PublicAuth from "../../components/PublicAuth/PublicAuth";

const Admin = () => {
  // const navigate = useNavigate();

  return (
    <AdminWrapper>
      <div className="sidebar">
        <div className="logo"></div>
        <Sidebar />
      </div>
      <div className="content-area">
        <HeaderAdmin />
        <ContentWrapper>
          <Routes>
            <Route element={<PublicAuth />}>
              <Route path={"/login"} element={<Login />} />
              <Route path={'/resetpassword'} element={<Reset />} />
            </Route>

            <Route element={<PrivateAuth />}>
              <Route path={"/dashboard"} element={<Dashboard />} />
              <Route path={"/chat-history"} element={<ChatHistory />} />
            </Route>

            <Route
              path={"/*"}
              element={<Navigate to="/admin/login" replace />}

            />
          </Routes>
        </ContentWrapper>
      </div>
    </AdminWrapper>
  );
};

export default Admin;
