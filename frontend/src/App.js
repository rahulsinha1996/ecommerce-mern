import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ActivationPage, LoginPage, SignUpPage, HomePage, ProductsPage, BestSellingPage, EventsPage, FAQPage } from "./Routes";
import "./App.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { server } from "./server";
import { useDispatch, useSelector } from "react-redux";
import { getUser, getUserRequest } from "./redux/reducers/user";



function App() {
  const dispatch=useDispatch();
  const data=useSelector((state)=>state)
  console.log(data)

  useEffect(()=>{
    dispatch(getUserRequest())
  },[])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/activation/:activation_token" element={<ActivationPage />} />
        <Route path="/products" element={<ProductsPage/>}/>
        <Route path="/best-selling" element={<BestSellingPage/>}/>
        <Route path="/events" element={<EventsPage/>}/>
        <Route path="/faq" element={<FAQPage/>}/>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
