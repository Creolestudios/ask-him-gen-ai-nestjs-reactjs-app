import React, { useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router";

const useAuth=()=>{
    const auth = localStorage.getItem("token");
    if(auth){
      return true
    } else {
      return false
    }
  }

const PrivateAuth = () => {
    const auth=useAuth()

    return auth? <Outlet/>: <Navigate to="/admin/login"/>;
};

export default PrivateAuth;
