import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { LoginPage, SignUpPage } from "./Routes";
import "./App.css";
function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/sign-up" element={<SignUpPage/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
