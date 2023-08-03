import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ActivationPage, LoginPage, SignUpPage, HomePage } from "./Routes";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { server } from "./server";
function App() {


  // useEffect(()=>{
  //   axios.get(`${server}/user/getuser`,{withCredentials:true}).then((res)=>{
  //     console.log(res.data)
  //     // toast.success(res.data.message)
  //   }).catch((err)=>{
  //     toast.error(err.response.data.message);
  //   })
  // },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
