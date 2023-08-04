import React, { useEffect } from 'react';
import Login from '../components/Login/Login';
import { useSelector } from "react-redux"
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
  const { isAuthenticated } = useSelector((state) => state.user);
  const navigate = useNavigate();
  console.log(isAuthenticated)


  useEffect(() => {
    if (isAuthenticated) {
      navigate("/")
    }
  },[isAuthenticated])


  return (
    <div>
      <Login />
    </div>
  )
}

export default LoginPage;
