import React from 'react';
import { Navigate, Outlet } from 'react-router';

const useAuth=()=>{
    const auth = localStorage.getItem("token");
    if(auth){
      return true
    } else {
      return false
    }
  }

const PublicAuth = () => {

    const auth=useAuth()

    return auth? <Navigate to="/admin/dashboard"/> : <Outlet/>;
};

export default PublicAuth;